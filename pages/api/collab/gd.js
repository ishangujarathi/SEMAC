import { createGd, getGd } from '../../../prisma/gd';
import { updateGd } from '../../../prisma/marks';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.groupNumber) {
          const gd = await getGd(req.query.groupNumber);
          return res.status(200).json(gd);
        } else {
          const message = 'Please enter group number';
          return res.json(message);
        }
      }
      case 'POST': {
        const gd = await createGd(req.body);
        return res.status(200).json({ message: 'GD Files Uploaded Successfully', gd });
      }
      case 'PUT': {
        await updateGd(req.body)
          .then((response) => {
            return res.status(200).json(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
