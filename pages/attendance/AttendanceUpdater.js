import React, { useState } from 'react';
import styles from '../../styles/attendance-updater.module.css';
import axios from 'axios';

const AttendanceUpdater = () => {
  const [clicked, setClicked] = useState(false);
  const [student, setStudent] = useState(false);
  const [course, setCourse] = useState(false);
  const [attendance, setAttendance] = useState(false);

  const [students, setStudents] = useState({
    roll: '',
    branch: '',
    division: '',
    course_code_1: '',
    course_code_2: '',
    course_code_3: '',
    course_code_4: '',
    attendance_1: '',
    attendance_2: '',
    attendance_3: '',
    attendance_4: '',
  });

  const [courses, setCourses] = useState({
    course_code: '',
    course_name: '',
    load_type: '',
    instructor_name: '',
    conducted: '',
    branch: '',
    division: '',
    year: '',
    semester: '',
  });

  const [attendances, setAttendances] = useState({
    roll: '',
    course_code_1: '',
    course_code_2: '',
    course_code_3: '',
    course_code_4: '',
    attendance_1: '',
    attendance_2: '',
    attendance_3: '',
    attendance_4: '',
  });

  const studentTextHandler = async (e) => {
    e.preventDefault();
    setStudents({ [e.target.name]: e.target.value });
  };

  const studentSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      roll,
      branch,
      division,
      course_code_1,
      course_code_2,
      course_code_3,
      course_code_4,
      attendance_1,
      attendance_2,
      attendance_3,
      attendance_4,
    } = students;

    const attendance = [
      { course_code_1, attendance_1 },
      { course_code_2, attendance_2 },
      { course_code_3, attendance_3 },
      { course_code_4, attendance_4 },
    ];

    await axios
      .post(
        '/api/attendance/student',
        { roll, branch, division, attendance },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const courseTextHandler = async (e) => {
    e.preventDefault();
    setCourses({ [e.target.name]: e.target.value });
  };

  const courseSubmitHandler = async (e) => {
    e.preventDefault();

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
    } = courses;

    const body = {
      course_code,
      course_name,
      load_type,
      instructor_name,
      conducted,
      branch,
      division,
      year,
      semester,
    };

    await axios
      .post('/api/attendance/course', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const attendanceTextHandler = async (e) => {
    e.preventDefault();
    setAttendances({ [e.target.name]: e.target.value });
  };

  const attendanceSubmitHandler = async (e) => {
    e.preventDefault();

    const {
      roll,
      course_code_1,
      course_code_2,
      course_code_3,
      course_code_4,
      attendance_1,
      attendance_2,
      attendance_3,
      attendance_4,
    } = attendances;

    await axios
      .put(
        '/api/attendance/student',
        {
          roll,
          course_code_1,
          course_code_2,
          course_code_3,
          course_code_4,
          attendance_1,
          attendance_2,
          attendance_3,
          attendance_4,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={styles.cont}>
      {!clicked && (
        <>
          <h1>PLEASE SELECT A TASK TO MANAGE ATTENDANCE</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              setClicked(true);
              setStudent(true);
            }}
          >
            STUDENT CREATOR
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setClicked(true);
              setCourse(true);
            }}
          >
            COURSE CREATOR
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setClicked(true);
              setAttendance(true);
            }}
          >
            ATTENDANCE UPDATER
          </button>
        </>
      )}
      {clicked && student && (
        <>
          <h1>STUDENT CREATOR</h1>
          <form onSubmit={studentSubmitHandler}>
            <label className={styles.topLabel}>
              BRANCH:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" required onChange={studentTextHandler} name="branch" />
            </label>
            <label className={styles.topLabel}>
              DIVISION:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" required onChange={studentTextHandler} branch="division" />
            </label>
            <label className={styles.topLabel}>
              ROLL NO:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" required onChange={studentTextHandler} branch="roll" />
            </label>
            <label>
              ATTENDANCE 1:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="course_code_1"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="attendance_1"
              />
            </label>
            <label>
              ATTENDANCE 2:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="course_code_2"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="attendance_2"
              />
            </label>{' '}
            <label>
              ATTENDANCE 3:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="course_code_3"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="attendance_3"
              />
            </label>{' '}
            <label>
              ATTENDANCE 4:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="course_code_4"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                required
                onChange={studentTextHandler}
                name="attendance_4"
              />
            </label>
            <input type="submit" value="SUBMIT" />
          </form>
        </>
      )}
      {clicked && course && (
        <>
          <h1>COURSE CREATOR</h1>
          <form onSubmit={courseSubmitHandler} style={{ minWidth: '35vw' }}>
            <label>
              COURSE CODE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="course_code"
              />
            </label>
            <label>
              COURSE NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="course_name"
              />
            </label>
            <label>
              LOAD
              TYPE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="load_type"
              />
            </label>
            <label>
              INSTRUCTOR NAME:&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="instructor_name"
              />
            </label>
            <label>
              CONDUCTED:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="conducted"
              />
            </label>
            <label>
              BRANCH:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="branch"
              />
            </label>
            <label>
              DIVISION:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="division"
              />
            </label>
            <label>
              YEAR:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="year"
              />
            </label>
            <label>
              SEMESTER:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                style={{ maxWidth: '13vw' }}
                required
                onChange={courseTextHandler}
                name="semester"
              />
            </label>
            <input type="submit" value="SUBMIT" />
          </form>
        </>
      )}
      {clicked && attendance && (
        <>
          <h1>ATTENDANCE UPDATER</h1>
          <form onSubmit={attendanceSubmitHandler}>
            <label className={styles.topLabel}>
              ROLL NO:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" required onChange={attendanceTextHandler} name="roll" />
            </label>
            <label>
              ATTENDANCE 1:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="course_code_1"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="attendance_1"
              />
            </label>
            <label>
              ATTENDANCE 2:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="course_code_2"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="attendance_2"
              />
            </label>{' '}
            <label>
              ATTENDANCE 3:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="course_code_3"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="attendance_3"
              />
            </label>{' '}
            <label>
              ATTENDANCE 4:&nbsp;&nbsp;
              <input
                type="text"
                placeholder="course_code"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="course_code_4"
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="attendance"
                style={{ maxWidth: '7.5vw' }}
                onChange={attendanceTextHandler}
                name="attendance_4"
              />
            </label>
            <input type="submit" value="SUBMIT" />
          </form>
        </>
      )}
    </section>
  );
};

export default AttendanceUpdater;
