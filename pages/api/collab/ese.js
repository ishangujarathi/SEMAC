import { updateEse } from '../../../prisma/marks';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'PUT': {
        const Ese = await updateEse(req.body);
        return res.status(200).json({ message: 'Ese Marks Updated Successfully', Ese });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
