import { createHa, getHa } from '../../../prisma/ha';
import nc from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/ha',
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
      const Ha = await getHa(req.query.groupNumber);
      return res.status(200).json(Ha);
    } else {
      const message = 'Please enter division';
      return res.json(message);
    }
  })
  .post(upload.single('file'), async (req, res) => {
    const Ha = await createHa(req.body);
    return res.status(200).json({ message: 'HA File Uploaded Successfully', Ha });
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
