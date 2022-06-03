import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TableRow = (props) => {
  const { role, roll, branch, division, attendance } = props;

  const course_code_1 = attendance[0].course_code;
  const course_code_2 = attendance[1].course_code;
  const course_code_3 = attendance[2].course_code;
  const course_code_4 = attendance[3].course_code;

  const [courseOne, setCourseOne] = useState({});
  const [courseTwo, setCourseTwo] = useState({});
  const [courseThree, setCourseThree] = useState({});
  const [courseFour, setCourseFour] = useState({});

  useEffect(() => {
    const func_1 = async () => {
      await axios
        .get(`/api/attendance/course?course_code=${course_code_1}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setCourseOne(res.data.courses);
        });
    };

    const func_2 = async () => {
      await axios
        .get(`/api/attendance/course?course_code=${course_code_2}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setCourseTwo(res.data.courses);
        });
    };

    const func_3 = async () => {
      await axios
        .get(`/api/attendance/course?course_code=${course_code_3}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setCourseThree(res.data.courses);
        });
    };

    const func_4 = async () => {
      await axios
        .get(`/api/attendance/course?course_code=${course_code_4}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setCourseFour(res.data.courses);
        });
    };

    func_1();
    func_2();
    func_3();
    func_4();
  }, []);

  if (role && role === 'Student') {
    return (
      <tbody>
        <tr>
          <td>{1}</td>
          <td>{course_code_1}</td>
          <td>{courseOne.course_name}</td>
          <td>{courseOne.load_type}</td>
          <td>{courseOne.instructor_name}</td>
          <td>{12}</td>
          <td>{20}</td>
        </tr>
        <tr>
          <td>{1}</td>
          <td>{course_code_2}</td>
          <td>{courseTwo.course_name}</td>
          <td>{courseTwo.load_type}</td>
          <td>{courseTwo.instructor_name}</td>
          <td>{12}</td>
          <td>{20}</td>
        </tr>{' '}
        <tr>
          <td>{1}</td>
          <td>{course_code_3}</td>
          <td>{courseThree.course_name}</td>
          <td>{courseThree.load_type}</td>
          <td>{courseThree.instructor_name}</td>
          <td>{12}</td>
          <td>{20}</td>
        </tr>{' '}
        <tr>
          <td>{1}</td>
          <td>{course_code_4}</td>
          <td>{courseFour.course_name}</td>
          <td>{courseFour.load_type}</td>
          <td>{courseFour.instructor_name}</td>
          <td>{12}</td>
          <td>{20}</td>
        </tr>{' '}
      </tbody>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default TableRow;
