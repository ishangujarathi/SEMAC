import { createGs, getGs } from '../../../prisma/gs';
import nc from 'next-connect';

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
  .post(async (req, res) => {
    const gs = await createGs(req.body);
    return res.status(200).json({ message: 'GS File Uploaded Successfully', gs });
  });

export default handler;
