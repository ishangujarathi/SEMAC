import { createGd, getGd } from '../../../prisma/gd';
import nc from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/gd',
    filename: (req, file, cb) =>
      cb(null, 'grp-' + req.body.groupNumber + '-' + 'roll-' + file.originalname),
  }),
});

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
})
  .get(async (req, res) => {
    if (req.query.groupNumber) {
      const gd = await getGd(req.query.groupNumber);
      return res.status(200).json(gd);
    } else {
      const message = 'Please enter group number';
      return res.json(message);
    }
  })
  .post(
    upload.fields([
      { name: 'file1', maxCount: 1 },
      { name: 'file2', maxCount: 1 },
      { name: 'file3', maxCount: 1 },
      { name: 'file4', maxCount: 1 },
      { name: 'file5', maxCount: 1 },
      { name: 'file6', maxCount: 1 },
    ]),
    async (req, res) => {
      const gd = await createGd(req.body);
      return res.status(200).json({ message: 'GD Files Uploaded Successfully', gd });
    }
  );

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
