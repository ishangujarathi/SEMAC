import { updateMse } from '../../../prisma/marks';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'PUT': {
        const Mse = await updateMse(req.body);
        return res.status(200).json({ message: 'Mse Marks Updated Successfully', Mse });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
