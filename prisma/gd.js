// /prisma/user.js
import prisma from './prisma';

// READ

export const getGd = async (groupNumber) => {
  const gd = await prisma.gd.findUnique({
    where: { groupNumber },
  });
  const filename = JSON.parse(JSON.stringify(gd));
  return filename;
};

// CREATE
export const createGd = async (body) => {
  const gd = await prisma.gd.create({
    data: {
      groupNumber: body.groupNumber,
      files: [
        { roll: body.r1, filename: body.filename1 },
        { roll: body.r2, filename: body.filename2 },
        { roll: body.r3, filename: body.filename3 },
        { roll: body.r4, filename: body.filename4 },
        { roll: body.r5, filename: body.filename5 },
        { roll: body.r6, filename: body.filename6 },
      ],
    },
  });

  return gd;
};
