import { getAllCourses, createCourse, getCourse } from '../../../prisma/attendance';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        let courses;
        if (req.query.get === 'all') {
          courses = await getAllCourses();
        } else {
          courses = await getCourse(req.query.course_code);
        }
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
