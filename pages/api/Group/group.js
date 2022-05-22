// pages/api/user

import { getStatus, createGroup, patchStatus } from '../../../prisma/group';

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const status = await getStatus(req.query.email);
        return res.status(200).json(status);
      }
      case 'POST': {
        // Create a new user
        const { email, branch, division, batch, r1, r2, r3, r4, r5, r6 } = req.body;
        const roll = [r1, r2, r3, r4, r5, r6];
        const group = await createGroup(email, branch, division, batch, roll);
        return res.status(200).json({
          message: 'Group Created Successfully',
          group,
        });
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
