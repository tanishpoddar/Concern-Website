import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  if (!id) {
    return new NextResponse('Video ID is required', { status: 400 });
  }

  try {
    // Get file metadata to check if it's a video
    const fileMetadata = await drive.files.get({
      fileId: id,
      fields: 'mimeType, name, size',
    });

    const mimeType = fileMetadata.data.mimeType;
    const fileName = fileMetadata.data.name;
    const fileSize = fileMetadata.data.size;

    if (!mimeType?.startsWith('video/')) {
      return new NextResponse('File is not a video', { status: 400 });
    }

    // Handle range requests for video streaming
    const range = request.headers.get('range');
    
    if (range && fileSize) {
      // Parse range header
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : parseInt(fileSize) - 1;
      const chunkSize = (end - start) + 1;

      // Get the video stream with range - use request headers in options
      const videoStream = await drive.files.get({
        fileId: id,
        alt: 'media',
      }, { 
        responseType: 'stream',
        headers: {
          Range: `bytes=${start}-${end}`,
        },
      });

      const headers = new Headers({
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize.toString(),
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=3600',
      });

      // Convert Node.js Readable to Web ReadableStream
      const webStream = new ReadableStream({
        start(controller) {
          const nodeStream = videoStream.data as any;
          nodeStream.on('data', (chunk: any) => {
            controller.enqueue(new Uint8Array(chunk));
          });
          nodeStream.on('end', () => {
            controller.close();
          });
          nodeStream.on('error', (err: any) => {
            controller.error(err);
          });
        },
      });

      return new NextResponse(webStream, {
        status: 206, // Partial Content
        headers,
      });
    } else {
      // Get the full video stream
      const videoStream = await drive.files.get({
        fileId: id,
        alt: 'media',
      }, { responseType: 'stream' });

      const headers = new Headers({
        'Content-Type': mimeType,
        'Content-Disposition': `inline; filename="${fileName}"`,
        'Cache-Control': 'public, max-age=3600',
        'Accept-Ranges': 'bytes',
      });

      if (fileSize) {
        headers.set('Content-Length', fileSize);
      }

      // Convert Node.js Readable to Web ReadableStream
      const webStream = new ReadableStream({
        start(controller) {
          const nodeStream = videoStream.data as any;
          nodeStream.on('data', (chunk: any) => {
            controller.enqueue(new Uint8Array(chunk));
          });
          nodeStream.on('end', () => {
            controller.close();
          });
          nodeStream.on('error', (err: any) => {
            controller.error(err);
          });
        },
      });

      return new NextResponse(webStream, {
        headers,
      });
    }
  } catch (error) {
    console.error('Error serving video:', error);
    return new NextResponse('Failed to load video', { status: 500 });
  }
}