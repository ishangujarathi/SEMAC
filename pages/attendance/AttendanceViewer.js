import React from 'react';
import AttendanceRow from '../components/table/AttendanceRow';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import { v4 } from 'uuid';
import styles from '../../styles/attendance-viewer.module.css';

const AttendanceViewer = ({ attendance, user }) => {
  const role = user.role;
  const division = attendance.students.division;
  const roll = attendance.students.roll;
  const branch = attendance.students.branch;
  const attendances = attendance.students.attendance;

  if (role && role === 'Student') {
    return (
      <section className={styles.cont}>
        <h1>DIVISION ATTENDANCE</h1>
        <table>
          <thead>
            <tr>
              <th>Sr. NO</th>
              <th>COURSE CODE</th>
              <th>COURSE NAME</th>
              <th>LOAD TYPE</th>
              <th>INSTRUCTOR NAME</th>
              <th>PRESENT/CONDUCTED</th>
              <th>ATTENDANCE</th>
            </tr>
          </thead>
          <AttendanceRow
            role={role}
            key={v4()}
            roll={roll}
            branch={branch}
            division={division}
            attendance={attendances}
          />
        </table>
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default AttendanceViewer;

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

  const res = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await res.json();

  const response = await fetch(`${url}/attendance/student/?roll=${user.roll}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const attendance = await response.json();

  // Pass data to the page via props
  return { props: { attendance, user } };
}
