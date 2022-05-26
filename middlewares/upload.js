import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import crypto from 'node:crypto';
import path from 'node:path';

// Timetable Uploader
const storageTt = new GridFsStorage({
  url: process.env.DATABASE_URL,
  file: (request, files) =>
    new Promise((resolve, reject) => {
      crypto.randomBytes(16, (error, buf) => {
        if (error) {
          return reject(error);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename,
          bucketName: 'timetable',
        };
        resolve(fileInfo);
        return null;
      });
    }),
});

export const timetableUpload = multer({ storage: storageTt });
