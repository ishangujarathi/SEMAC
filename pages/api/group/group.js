// pages/api/user

import { getAllGroups, getGroup, createGroup, patchStatus } from '../../../prisma/group';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        let group;
        if (req.query.get === 'all') {
          group = await getAllGroups();
        } else {
          group = await getGroup(req.query.email);
        }
        return res.status(200).json(group);
      }
      case 'POST': {
        // Create a new user
        let { email, branch, division, batch, r1, r2, r3, r4, r5, r6 } = req.body;
        r1 = JSON.stringify(r1);
        r2 = JSON.stringify(r2);
        r3 = JSON.stringify(r3);
        r4 = JSON.stringify(r4);
        r5 = JSON.stringify(r5);
        r6 = JSON.stringify(r6);
        const roll = [r1, r2, r3, r4, r5, r6];
        const group = await createGroup(email, branch, division, batch, roll);
        return res.send(group);
      }
      case 'PATCH': {
        // Update an existing user
        const { email, status } = req.body;
        const statusPatch = await patchStatus(email, status);
        return res.status(200).json({ message: 'Group Status Updated', statusPatch });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
