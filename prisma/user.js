// /prisma/user.js
import prisma from './prisma';

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getUser = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};

// CREATE
export const createUser = async (email, name, birthYear) => {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      birthYear,
    },
  });
  return user;
};

// UPDATE
export const updateUser = async (email, updateData) => {
  const user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteUser = async (email) => {
  const user = await prisma.user.delete({
    where: {
      email,
    },
  });
  return user;
};
