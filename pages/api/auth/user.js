// pages/api/user

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../../../prisma/user';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.email) {
          // Get a single user if id is provided is the query
          // api/users?id=1
          const user = await getUser(req.query.email);
          return res.status(200).json(user);
        } else {
          // Otherwise, fetch all users
          const users = await getAllUsers();
          return res.json(users);
        }
      }
      case 'POST': {
        // Create a new user
        const { email, name, birthYear } = req.body;
        const user = await createUser(email, name, birthYear);
        return res.json(user);
      }
      case 'PUT': {
        // Update an existing user
        const { id, ...updateData } = req.body;
        const user = await updateUser(id, updateData);
        return res.json(user);
      }
      case 'DELETE': {
        // Delete an existing user
        const { email } = req.body;
        const user = await deleteUser(email);
        return res.json(user);
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
