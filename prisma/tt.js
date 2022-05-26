// /prisma/user.js
import prisma from './prisma';

// READ

export const getTt = async (body) => {
  const division = body.division;
  const tt = await prisma.timetable.findUnique({
    where: division,
  });
  const res = JSON.parse(JSON.stringify(tt));
  return res;
};

// CREATE
export const createTt = async (body, filename) => {
  const division = body.division;
  console.log(filename);
  const tt = await prisma.timetable.create({
    data: {
      division,
      image: filename,
    },
  });

  return tt;
};
