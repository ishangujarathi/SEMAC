// /prisma/user.js
import prisma from './prisma';

// READ

export const getEdai = async (groupNumber) => {
  const edai = await prisma.edai.findUnique({
    where: { groupNumber },
  });
  const res = JSON.parse(JSON.stringify(edai));
  return res;
};

// CREATE
export const createEdai = async (body) => {
  const edai = await prisma.edai.create({
    data: {
      groupNumber: body.groupNumber,
      filename: body.filename,
      reportLink: body.reportLink,
    },
  });

  return edai;
};
