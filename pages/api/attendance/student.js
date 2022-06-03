import {
  updateAttendance,
  createStudent,
  getAllStudents,
  getStudent,
} from '../../../prisma/attendance';

async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        let students;
        if (req.query.get === 'all') {
          students = await getAllStudents();
        } else {
          students = await getStudent(req.query.roll);
        }
        return res.status(200).json({ students });
      }
      case 'POST': {
        const student = await createStudent(req.body);
        return res.status(200).json({ message: 'Student Added Successfully', student });
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
