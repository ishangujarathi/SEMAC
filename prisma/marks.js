// /prisma/user.js
import prisma from './prisma';

// READ

export const getMarks = async (groupNumber) => {
  const marks = await prisma.marks.findUnique({
    where: { groupNumber },
  });
  const filename = JSON.parse(JSON.stringify(marks));
  return filename;
};

//CREATE

export const createMarks = async () => {
  const marks = await prisma.marks.create({
    data: {
      haMarks: 0,
    },
  });
};

// UPDATE
export const updateHa = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      haMarks: body.haMarks,
    },
  });

  return marks;
};

export const updateGs = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      gsMarks: body.gsMarks,
    },
  });

  return marks;
};
export const updateGd = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      gdMarks: body.gdMarks,
    },
  });

  return marks;
};
export const updateEdai = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      edaiMarks: body.daiMarks,
    },
  });

  return marks;
};
export const updateSdp = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      sdpMarks: body.sdpMarks,
    },
  });

  return marks;
};
export const updateMse = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      mseMarks: body.mseMarks,
    },
  });

  return marks;
};
export const updateEse = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      eseMarks: body.eseMarks,
    },
  });

  return marks;
};
export const updateCvv = async (body) => {
  const marks = await prisma.marks.update({
    where: {
      groupNumber: body.groupNumber,
    },
    data: {
      cvvMarks: body.cvvMarks,
    },
  });

  return marks;
};
