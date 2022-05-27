import { createGs, getGs } from '../../../prisma/gs';
import nc from 'next-connect';
import multer from 'multer';

let group;

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/gs',
    filename: (req, file, cb) => cb(null, 'grp-' + req.body.groupNumber + '-' + file.originalname),
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
      const gs = await getGs(req.query.groupNumber);
      return res.status(200).json(gs);
    } else {
      const message = 'Please enter group number';
      return res.json(message);
    }
  })
  .post(upload.single('file'), async (req, res) => {
    const gs = await createGs(req.body);
    return res.status(200).json({ message: 'GS File Uploaded Successfully', gs });
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
