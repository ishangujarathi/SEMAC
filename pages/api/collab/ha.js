import { createHa, getHa } from '../../../prisma/ha';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.groupNumber) {
          const Ha = await getHa(req.query.groupNumber);
          return res.status(200).json(Ha);
        } else {
          const message = 'Please enter group number';
          return res.json(message);
        }
      }
      case 'POST': {
        const Ha = await createHa(req.body);
        return res.status(200).json({ message: 'HA File Uploaded Successfully', Ha });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
