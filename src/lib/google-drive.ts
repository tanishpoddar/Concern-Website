
// src/lib/google-drive.ts
import { google } from 'googleapis';
import { cache } from 'react';

// Main folder ID from your environment variables
const MAIN_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID!;

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

interface DriveFile {
  id: string;
  name: string;
  thumbnailLink?: string | null;
  webViewLink: string | null;
  webContentLink: string | null;
}

// Helper to get the ID of a subfolder (album) by its name
const getFolderId = cache(async (folderName: string, parentId: string): Promise<string | null> => {
  try {
    const res = await drive.files.list({
      q: `'${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`,
      fields: 'files(id)',
      pageSize: 1,
    });
    return res.data.files?.[0]?.id || null;
  } catch (error) {
    console.error(`Error fetching folder ID for "${folderName}":`, error);
    return null;
  }
});

// Fetches a list of images from a specific folder ID
export const getImagesFromDrive = cache(async (folderName: string): Promise<DriveFile[]> => {
  const albumFolderId = await getFolderId(folderName, MAIN_FOLDER_ID);
  
  if (!albumFolderId) {
    console.log(`Album folder "${folderName}" not found.`);
    return [];
  }

  try {
    const res = await drive.files.list({
      q: `'${albumFolderId}' in parents and mimeType contains 'image/' and trashed=false`,
      fields: 'files(id, name, thumbnailLink, webViewLink, webContentLink)',
      pageSize: 50, // Adjust as needed
    });

    // We must return plain objects, not complex class instances
    return res.data.files ? res.data.files.map(file => ({
        id: file.id!,
        name: file.name!,
        thumbnailLink: file.thumbnailLink,
        webViewLink: file.webViewLink,
        webContentLink: file.webContentLink,
    })) : [];
  } catch (error) {
    console.error(`Error fetching images from folder "${folderName}":`, error);
    return [];
  }
});

// Fetches all album folders
export const getAlbumsFromDrive = cache(async (parentFolderName: string) => {
    const parentFolderId = await getFolderId(parentFolderName, MAIN_FOLDER_ID);
    if (!parentFolderId) {
        console.log(`Parent folder "${parentFolderName}" not found.`);
        return [];
    }

    try {
        const res = await drive.files.list({
            q: `'${parentFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
            fields: 'files(id, name)',
            orderBy: 'name',
        });
        return res.data.files ? res.data.files.map(f => ({ slug: f.name!.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and'), title: f.name! })) : [];
    } catch (error) {
        console.error(`Error fetching albums from "${parentFolderName}":`, error);
        return [];
    }
});
