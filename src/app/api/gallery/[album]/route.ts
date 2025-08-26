// src/app/api/gallery/[album]/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// This is the parent folder where 'by year' and 'programmes and events' folders are located.
// You must get this ID from the URL of your main "gallery" folder in Google Drive.
const GALLERY_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID!;

const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // The private key is sensitive and should be stored in an environment variable.
      // Make sure to replace the `\n` characters in the key with actual newlines.
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

// A simple in-memory cache to avoid repeatedly fetching folder IDs.
const folderIdCache = new Map<string, string>();

async function getFolderId(folderName: string, parentId: string): Promise<string | null> {
    const cacheKey = `${parentId}-${folderName}`;
    if (folderIdCache.has(cacheKey)) {
        return folderIdCache.get(cacheKey)!;
    }

    try {
        const res = await drive.files.list({
            q: `'${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`,
            fields: 'files(id)',
            pageSize: 1,
        });
        const folderId = res.data.files?.[0]?.id || null;
        if (folderId) {
            folderIdCache.set(cacheKey, folderId);
        }
        return folderId;
    } catch (error) {
        console.error(`Error fetching ID for folder "${folderName}":`, error);
        return null;
    }
}


// A map to convert URL slugs to the actual folder names in Google Drive.
const slugToFolderNameMap: { [key: string]: { name: string, parent: string } } = {
  'ministry-of-social-justice-empowerment': { name: 'Ministry of Social Justice & Empowerment', parent: 'Programmes and Events' },
  'synopsis': { name: 'Synopsis', parent: 'Programmes and Events' },
  'training-programmes': { name: 'Training Programmes', parent: 'Programmes and Events' },
  'concern-premises': { name: 'Concern Premises', parent: 'Programmes and Events' },
  'awareness-programmes': { name: 'Awareness Programmes', parent: 'Programmes and Events' },
  'award-recognitions': { name: 'Award Recognitions', parent: 'Programmes and Events' },
  '2025': { name: '2025', parent: 'By Year' },
  '2024': { name: '2024', parent: 'By Year' },
  '2023': { name: '2023', parent: 'By Year' },
  '2022': { name: '2022', parent: 'By Year' },
  '2021': { name: '2021', parent: 'By Year' },
  '2020': { name: '2020', parent: 'By Year' },
  '2019': { name: '2019', parent: 'By Year' },
  '2018': { name: '2018', parent: 'By Year' },
  '2017': { name: '2017', parent: 'By Year' },
  '2016': { name: '2016', parent: 'By Year' },
  '2014': { name: '2014', parent: 'By Year' },
  '2013': { name: '2013', parent: 'By Year' },
  '2012': { name: '2012', parent: 'By Year' },
  '2011': { name: '2011', parent: 'By Year' },
  '2009': { name: '2009', parent: 'By Year' },
};


export async function GET(
  request: Request,
  { params }: { params: { album: string } }
) {
  const albumSlug = params.album;
  const albumInfo = slugToFolderNameMap[albumSlug];

  if (!albumInfo) {
    return NextResponse.json({ error: 'Album not found' }, { status: 404 });
  }

  try {
    // 1. Find the parent folder ('Programmes and Events' or 'By Year')
    const parentFolderId = await getFolderId(albumInfo.parent, GALLERY_FOLDER_ID);
    if (!parentFolderId) {
        return NextResponse.json({ error: `Parent folder '${albumInfo.parent}' not found` }, { status: 404 });
    }

    // 2. Find the specific album folder inside the parent folder
    const albumFolderId = await getFolderId(albumInfo.name, parentFolderId);
    if (!albumFolderId) {
        return NextResponse.json({ error: `Album folder '${albumInfo.name}' not found` }, { status: 404 });
    }
    
    // 3. List images in the album folder
    const imageRes = await drive.files.list({
      q: `'${albumFolderId}' in parents and mimeType contains 'image/' and trashed=false`,
      fields: 'files(id, name, webContentLink)', // webContentLink provides a direct download link
      pageSize: 100, // Adjust as needed
    });

    const images = imageRes.data.files?.map(file => ({
      id: file.id!,
      name: file.name!,
      // The webContentLink is better for direct embedding in `<img>` tags.
      url: file.webContentLink!.replace('&export=download', ''),
    })) || [];

    return NextResponse.json(images);

  } catch (error) {
    console.error('Google Drive API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch images from Google Drive' }, { status: 500 });
  }
}
