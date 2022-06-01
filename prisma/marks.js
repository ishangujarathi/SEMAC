// /prisma/user.js
import prisma from './prisma';

// READ

export const getAllMarks = async () => {
  const mark = await prisma.marks.findMany();
  // const marks = JSON.parse(JSON.stringify(mark));
  return mark;
};

//CREATE

export const createMarks = async (body) => {
  const [r1, r2, r3, r4, r5, r6] = body.roll;
  const marks = await prisma.marks.create({
    data: {
      groupNumber: body.groupNumber,
      haMarks: '0',
      gsMarks: '0',
      gdMarks: '0',
      edaiMarks: '0',
      sdpMarks: '0',
      cvvMarks: '0',
      mseMarks: '0',
      eseMarks: '0',
      r1: r1,
      r2: r2,
      r3: r3,
      r4: r4,
      r5: r5,
      r6: r6,
    },
  });

  return marks;
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
