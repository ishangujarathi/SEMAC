// /prisma/user.js
import prisma from './prisma';

// READ

export const getStatus = async (email) => {
  const group = await prisma.group.findUnique({
    where: { email },
  });
  const status = group.status;
  return status;
};

// CREATE
export const createGroup = async (email, branch, division, batch, roll) => {
  const group = await prisma.group.create({
    data: {
      roll,
    },
  });

  return group;
};

export const patchStatus = async (email, status) => {
  const statusRes = await prisma.group.update({
    where: { email: email },
    data: {
      status: status,
    },
  });
  return statusRes;
};
