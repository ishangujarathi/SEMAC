import { getAllCourses, createCourse } from '../../../prisma/attendance';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const courses = await getAllCourses(req.body);
        return res.status(200).json({ courses });
      }
      case 'POST': {
        const course = await createCourse(req.body);
        return res.status(200).json({ message: 'Course Added Successfully', course });
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}

export default handle;
