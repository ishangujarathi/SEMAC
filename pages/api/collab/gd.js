import { createGd, getGd } from '../../../prisma/gd';
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
  // .get(async (req, res) => {
  //   if (req.query.groupNumber) {
  //     const gd = await getGd(req.query.groupNumber);
  //     return res.status(200).json(gd);
  //   } else {
  //     const message = 'Please enter group number';
  //     return res.json(message);
  //   }
  // })
  .post(async (req, res) => {
    console.log(`Group Number is: ${req.body}`);
    // const gd = await createGd(req.body);
    return res.status(200).json({ message: 'GD Files Uploaded Successfully' });
  });

export default handler;

export const config = {
  api: {
    bodyParser: true,
  },
};
