import { createTt, getTt } from '../../../prisma/tt';
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
    if (req.query.division) {
      const tt = await getTt(req.query.division);
      return res.status(200).json(tt);
    } else {
      const message = 'Please enter division';
      return res.json(message);
    }
  })
  .post(async (req, res) => {
    const tt = await createTt(req.body.division, req.body.filename);
    return res.status(200).json({ message: 'Timetable Updated Successfully', tt });
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
