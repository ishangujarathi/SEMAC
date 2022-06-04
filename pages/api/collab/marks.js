import { createMarks, getAllMarks } from '../../../prisma/marks';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if ((req.query.getAll = true)) {
          const marks = await getAllMarks();
          return res.status(200).json(marks);
        } else if (req.query.roll) {
          const marks = await getMarks(req.query.roll);
          return res.status(200).json(marks);
        }
      }
      case 'POST': {
        const marks = await createMarks(req.body);
        return res.status(200).json({ message: 'Marks Created Successfully', marks });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
