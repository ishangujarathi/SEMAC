import { updateSdp } from '../../../prisma/marks';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'PUT': {
        const Sdp = await updateSdp(req.body);
        return res.status(200).json({ message: 'Sdp Marks Updated Successfully', Sdp });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
