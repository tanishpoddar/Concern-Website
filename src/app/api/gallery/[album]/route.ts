
// src/app/api/gallery/[album]/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// This is the parent folder where 'by year' and 'programmes and events' folders are located.
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
            fields: 'files(id, name)', // We only need id and name
            pageSize: 1,
        });
        const folder = res.data.files?.[0];
        if (folder?.id) {
            folderIdCache.set(cacheKey, folder.id);
            return folder.id;
        }
        return null;
    } catch (error) {
        console.error(`Error fetching ID for folder "${folderName}":`, error);
        return null;
    }
}

// Function to find an album folder ID by its name within a list of possible parent folders.
async function findAlbumFolderId(albumName: string, parentFolderNames: string[]): Promise<string | null> {
    for (const parentName of parentFolderNames) {
        const parentFolderId = await getFolderId(parentName, GALLERY_FOLDER_ID);
        if (parentFolderId) {
            const albumFolderId = await getFolderId(albumName, parentFolderId);
            if (albumFolderId) {
                return albumFolderId;
            }
        }
    }
    return null;
}

// Helper to convert a slug back to a title case name.
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/ And /g, ' & '); // Handle the '&' case
}

export async function GET(
  request: Request,
  { params }: { params: { album: string } }
) {
  const albumSlug = params.album;
  
  if (!albumSlug) {
      return NextResponse.json({ error: 'Album slug is required' }, { status: 400 });
  }

  // Convert slug to a potential folder name.
  const albumName = slugToTitle(albumSlug);
  
  try {
    // Search for the album folder in both possible parent directories.
    const albumFolderId = await findAlbumFolderId(albumName, ['Programmes and Events', 'By Year']);

    if (!albumFolderId) {
        return NextResponse.json({ error: `Album folder '${albumName}' not found` }, { status: 404 });
    }
    
    // List all images in the album folder with pagination.
    let images: { id: string; name: string; url: string; }[] = [];
    let pageToken: string | undefined = undefined;

    do {
      const imageRes: any = await drive.files.list({
        q: `'${albumFolderId}' in parents and mimeType contains 'image/' and trashed=false`,
        fields: 'nextPageToken, files(id, name, webContentLink)',
        pageSize: 1000, // Max page size
        pageToken: pageToken,
      });

      const files = imageRes.data.files;
      if (files && files.length > 0) {
        const mappedImages = files.map((file: any) => ({
          id: file.id!,
          name: file.name!,
          // The webContentLink is better for direct embedding in `<img>` tags.
          url: file.webContentLink!.replace('&export=download', ''),
        }));
        images = images.concat(mappedImages);
      }
      
      pageToken = imageRes.data.nextPageToken;

    } while (pageToken);


    return NextResponse.json(images);

  } catch (error) {
    console.error('Google Drive API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch images from Google Drive' }, { status: 500 });
  }
}
