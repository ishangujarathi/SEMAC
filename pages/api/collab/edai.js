import { createEdai, getEdai } from '../../../prisma/edai';
import { getSession } from 'next-auth/react';

async function handle(req, res) {
  const session = await getSession({ req });
  const user = await getUser(session.user.email);
  if (session) {
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
          return res.status(200).json({ message: 'HA File Uploaded Successfully', Edai });
        }
        default:
          break;
      }
    } catch (error) {
      return res.status(500).json({ ...error, message: error.message });
    }
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}

export default handle;
