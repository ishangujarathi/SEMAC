import React from 'react';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import styles from '../../styles/timetable-viewer.module.css';

const TimetableViewer = ({ tt, user }) => {
  const filename = tt.image;

  const pic = `https://res.cloudinary.com/df6hie48w/raw/upload/timetable/${filename}`;

  const role = user.role;

  if (role && role === 'Student') {
    return (
      <section className={styles.cont}>
        <h1>DIVISION TIMETABLE</h1>
        <img src={pic} alt="timetable" />
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default TimetableViewer;

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

  const res = await fetch(`${url}/group/group/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const group = await res.json();

  const response = await fetch(`${url}/timetable/timetable/?division=${group.division}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const tt = await response.json();

  const resp = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await resp.json();

  // Pass data to the page via props
  return { props: { tt, user } };
}
