import { createGs, getGs, updateGs } from '../../../prisma/gs';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.groupNumber) {
          const gs = await getGs(req.query.groupNumber);
          return res.status(200).json(gs);
        } else {
          const message = 'Please enter group number';
          return res.json(message);
        }
      }
      case 'POST': {
        const gs = await createGs(req.body);
        return res.status(200).json({ message: 'GS File Uploaded Successfully', gs });
      }
      case 'PUT': {
        const gs = await updateGs(req.body);
        return res.status(200).json({ message: 'GS Marks Updated', gs });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
