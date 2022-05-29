import React from 'react';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import styles from '../../styles/timetable.module.css';

const Timetable = ({ user }) => {
  const role = user.role;

  if (role && role === 'Student') {
    return (
      <section className={styles.cont}>
        <svg className={styles.svg} viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">
              WELCOME TO TIMETABLE
            </text>
          </symbol>

          <g className={'g-ants'}>
            <use xlinkHref="#s-text" className={styles.text_copy}></use>
            <use xlinkHref="#s-text" className={styles.text_copy}></use>
            <use xlinkHref="#s-text" className={styles.text_copy}></use>
            <use xlinkHref="#s-text" className={styles.text_copy}></use>
            <use xlinkHref="#s-text" className={styles.text_copy}></use>
          </g>
        </svg>
        <ul>
          <li>
            <a href="/timetable/TimetableViewer">TIMETABLE VIEWER</a>
          </li>
        </ul>
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default Timetable;

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

  const resp = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await resp.json();

  // Pass data to the page via props
  return { props: { user } };
}
