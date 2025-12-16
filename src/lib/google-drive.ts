
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
  thumbnailLink?: string | null | undefined;
  webViewLink: string | null | undefined;
  webContentLink: string | null | undefined;
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
    return [];
  }

  try {
    const res = await drive.files.list({
      q: `'${albumFolderId}' in parents and mimeType contains 'image/' and trashed=false`,
      fields: 'files(id, name)',
      pageSize: 50, // Adjust as needed
    });

    // We must return plain objects, not complex class instances
    return res.data.files ? res.data.files.map(file => ({
        id: file.id!,
        name: file.name!,
        thumbnailLink: `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
        webViewLink: `https://drive.google.com/file/d/${file.id}/view`,
        webContentLink: `https://drive.google.com/thumbnail?id=${file.id}&sz=w2000`,
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
        return [];
    }

    try {
        const res = await drive.files.list({
            q: `'${parentFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
            fields: 'files(id, name)',
            orderBy: 'name',
        });
        const albums = res.data.files ? res.data.files.map(f => ({ slug: f.name!.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and'), title: f.name! })) : [];

        if (parentFolderName === 'Programmes and Events') {
            const desiredOrder = [
                'Ministry of Social Justice and Empowerment',
                'Synopsis',
                'Training Programmes',
                'Concern Premises',
                'Awareness Programmes',
                'Awards & Recognitions',
            ];
            return albums.sort((a, b) => {
                const indexA = desiredOrder.indexOf(a.title);
                const indexB = desiredOrder.indexOf(b.title);
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            });
        }
        
        if (parentFolderName === 'By Year') {
            return albums.sort((a,b) => b.title.localeCompare(a.title));
        }

        return albums;
    } catch (error) {
        console.error(`Error fetching albums from "${parentFolderName}":`, error);
        return [];
    }
});
