// /prisma/user.js
import prisma from './prisma';

// READ

export const getTt = async (division) => {
  const tt = await prisma.timetable.findUnique({
    where: { division },
  });
  const filename = JSON.parse(JSON.stringify(tt));
  return filename;
};

// CREATE
export const createTt = async (division, filename) => {
  console.log(filename);
  const tt = await prisma.timetable.create({
    data: {
      division,
      image: filename,
    },
  });

  return tt;
};
