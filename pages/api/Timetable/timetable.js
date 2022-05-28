import { createTt, getTt } from '../../../prisma/tt';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.division) {
          const tt = await getTt(req.query.division);
          return res.status(200).json(tt);
        } else {
          const message = 'Please enter division';
          return res.json(message);
        }
      }
      case 'POST': {
        const tt = await createTt(req.body.division, req.body.filename);
        return res.status(200).json({ message: 'Timetable Updated Successfully', tt });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
