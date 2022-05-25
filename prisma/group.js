// /prisma/user.js
import prisma from './prisma';

// READ

export const getAllGroups = async () => {
  const group = await prisma.group.findMany();
  const res = JSON.parse(JSON.stringify(group));
  return res;
};

export const getStatus = async (email) => {
  const group = await prisma.group.findUnique({
    where: { email: email },
  });
  const res = JSON.parse(JSON.stringify(group));
  return res;
};

// CREATE
export const createGroup = async (email, branch, division, batch, roll) => {
  const group = await prisma.group.create({
    data: {
      email,
      branch,
      division,
      batch,
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
