import { createTt, getTt } from '../../../prisma/tt';
import nc from 'next-connect';
import { timetableUpload } from '../../../middlewares/upload';
import Grid from 'gridfs-stream';
import mongoose from 'mongoose';
import middleware from '../../../middlewares/multipart';
const conn = mongoose.createConnection(process.env.DATABASE_URL);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('timetable');
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
  .use(middleware)
  .get(async (req, res) => {
    if (req.query.division) {
      const tt = await getTt(req.query.division);
      return res.status(200).json(tt);
    } else {
      const message = 'Please enter division';
      return res.json(message);
    }
  })
  .post(timetableUpload.single('files'), async (req, res) => {
    // const data = 'Hi';

    // console.log(req.body);

    // if (!data) {
    //   throw new Error('Image is not present!');
    // }

    const tt = await createTt(req.body, req.file.filename);
    return res.status(200).json(tt);
    // return res.status(200).send({ message: 'done', data });
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
