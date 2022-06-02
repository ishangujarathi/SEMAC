// /prisma/user.js
import prisma from './prisma';

// READ

export const getAllCourses = async () => {
  const courses = await prisma.courses.findMany();
  const res = JSON.parse(JSON.stringify(courses));
  return res;
};

export const getAllStudents = async () => {
  const students = await prisma.students.findMany();
  const res = JSON.parse(JSON.stringify(students));
  return res;
};

export const getStudent = async (body) => {
  const student = await prisma.students.findUnique({
    where: { roll: body.roll },
  });
  const res = JSON.parse(JSON.stringify(student));
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
  const student = await prisma.student.create({
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
  const { roll, attendance } = body;
  const attendanceUpdated = await prisma.students.update({
    where: { roll },
    data: {
      attendance,
    },
  });
  return attendanceUpdated;
};
