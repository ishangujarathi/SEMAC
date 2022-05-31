import { updateCvv } from '../../../prisma/marks';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'PUT': {
        const cvv = await updateCvv(req.body);
        return res.status(200).json({ message: 'CVV Marks Updated Successfully', cvv });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
