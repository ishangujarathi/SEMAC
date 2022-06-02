import { updateAttendance, createCourse, getAllCourses } from '../../../prisma/attendance';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const courses = await getAllCourses(req.body);
        return res.status(200).json({ courses });
      }
      case 'POST': {
        const courses = await createCourse(req.body);
        return res.status(200).json({ message: 'Courses Created Successfully', courses });
      }
      case 'PUT': {
        const update = await updateAttendance(req.body);
        return res.status(200).json({ message: 'Attendance Updated Successfully', update });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
