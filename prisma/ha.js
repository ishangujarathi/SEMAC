// /prisma/user.js
import prisma from './prisma';

// READ

export const getHa = async (groupNumber) => {
  const ha = await prisma.ha.findUnique({
    where: { groupNumber },
  });
  const res = JSON.parse(JSON.stringify(ha));
  return res;
};

// CREATE
export const createHa = async (body) => {
  const ha = await prisma.ha.create({
    data: {
      groupNumber: body.groupNumber,
      filename: body?.filename,
      blogLink: body?.blogLink,
    },
  });

  return ha;
};

// UPDATE
export const updateHa = async (body) => {
  const ha = await prisma.ha.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      marks: body.marks,
    },
  });

  return ha;
};
