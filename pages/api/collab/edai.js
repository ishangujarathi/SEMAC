import { createEdai, getEdai } from '../../../prisma/edai';
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
      const Edai = await getEdai(req.query.groupNumber);
      return res.status(200).json(Edai);
    } else {
      const message = 'Please enter division';
      return res.json(message);
    }
  })
  .post(async (req, res) => {
    const Edai = await createEdai(req.body);
    return res.status(200).json({ message: 'HA File Uploaded Successfully', Edai });
  });

export default handler;
