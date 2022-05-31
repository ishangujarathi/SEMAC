// /prisma/user.js
import prisma from './prisma';

// READ

export const getGs = async (groupNumber) => {
  const gs = await prisma.gs.findUnique({
    where: { groupNumber },
  });
  const filename = JSON.parse(JSON.stringify(gs));
  return filename;
};

// CREATE
export const createGs = async (body) => {
  const gs = await prisma.gs.create({
    data: {
      groupNumber: body.groupNumber,
      filename: body.filename,
    },
  });

  return gs;
};
