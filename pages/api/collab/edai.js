import { createEdai, getEdai } from '../../../prisma/edai';
import { updateEdai } from '../../../prisma/marks';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.groupNumber) {
          const Edai = await getEdai(req.query.groupNumber);
          return res.status(200).json(Edai);
        } else {
          const message = 'Please enter division';
          return res.json(message);
        }
      }
      case 'POST': {
        const Edai = await createEdai(req.body);
        return res.status(200).json({ message: 'EDAI File Uploaded Successfully', Edai });
      }
      case 'PUT': {
        const edi = await updateEdai(req.body);
        return res.status(200).json({ message: 'EDAI Marks Updated Successfully', edi });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
