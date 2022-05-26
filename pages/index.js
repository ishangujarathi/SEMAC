import styles from '../styles/main.module.css';
import Content from './Content';
import TeacherContent from './TeacherContent';
import Plogin from './Plogin.js';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;

export default function Home({ user }) {
  const role = user?.role;
  return (
    <div className={styles.container}>
      {!user && <Plogin />}
      {user && role === 'Student' && <Content />}
      {user && role === 'Teacher' && <TeacherContent />}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

  const res = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await res.json();

  // Pass data to the page via props
  return { props: { user } };
}
