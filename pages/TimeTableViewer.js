import React from 'react';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import styles from '../styles/timetable-viewer.module.css';

const TimetableViewer = ({ tt }) => {
  const filename = tt.image;

  const pic = `/timetables/${filename}`;

  return (
    <section className={styles.cont}>
      <h1>DIVISION TIMETABLE</h1>
      <img src={pic} alt="timetable" />
    </section>
  );
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
  const user = await res.json();

  const response = await fetch(`${url}/timetable/timetable/?division=${user.division}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const tt = await response.json();

  // Pass data to the page via props
  return { props: { tt } };
}
