import styles from '../styles/main.module.css';
import StudentHome from './home/StudentHome';
import TeacherHome from './home/TeacherHome';
import Plogin from './Plogin.js';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;

export default function Home({ user, marks, attendance }) {
  const role = user?.role;
  return (
    <div className={styles.container}>
      {!user && <Plogin />}
      {user && role === 'Student' && (
        <StudentHome role={role} marks={marks} attendance={attendance} />
      )}
      {user && role === 'Teacher' && <TeacherHome role={role} />}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

  let user = null,
    marks = null,
    attendance = null;

  if (email) {
    const res = await fetch(`${url}/auth/user/?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    user = await res.json();

    const roll = user.roll;

    if (user.role === 'Student') {
      const response = await fetch(`${url}/collab/marks/?roll=${roll}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      marks = await response.json();

      const resp = await fetch(`${url}/attendance/student/?roll=${roll}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      attendance = await resp.json();
    }
  }
  // Pass data to the page via props
  return { props: { user, marks, attendance } };
}
