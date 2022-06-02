// /prisma/user.js
import prisma from './prisma';

// READ

export const getAllCourses = async (body) => {
  const { roll } = body;
  const courses = await prisma.courses.findMany({
    where: { roll },
  });
  const res = JSON.parse(JSON.stringify(courses));
  return res;
};

// CREATE
export const createCourse = async (body) => {
  const {
    course_code,
    course_name,
    load_type,
    instructor_name,
    conducted,
    branch,
    division,
    year,
    semester,
  } = body;
  const group = await prisma.courses.create({
    data: {
      course_code,
      course_name,
      load_type,
      instructor_name,
      conducted,
      branch,
      division,
      year,
      semester,
    },
  });

  return group;
};

export const createStudent = async (body) => {
  const { roll, branch, division, attendance } = body;
  const student = await prisma.courses.create({
    data: {
      roll,
      branch,
      division,
      attendance,
    },
  });

  return student;
};

// UPDATE

export const updateAttendance = async (body) => {
  const { roll } = body;
  const attendanceUpdated = await prisma.courses.update({
    where: { roll },
    data: {
      conducted,
      present,
    },
  });
  return attendanceUpdated;
};
