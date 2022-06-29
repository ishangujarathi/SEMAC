import React from 'react';
import styles from '../../styles/collab.module.css';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;

const Collab = ({ group, user }) => {
  const router = useRouter();

  const status = group?.status;

  const redirect = () => {
    if (typeof window !== 'undefined') {
      router.push('/collab/MainCollab');
    }
  };

  const role = user.role;

  if (role && role === 'Student') {
    return (
      <section className={styles.cont}>
        {(status === null || status === '' || status === undefined) && (
          <a className={styles.btn} href="/collab/StudentGroup">
            Create Student Group
          </a>
        )}
        {status === 'Approved' && redirect()}
        <h1>{status === 'Pending' && 'Group Approval Status is Pending'}</h1>
        {status === 'Rejected' && <h1>Group Plea is Rejected</h1>}
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default Collab;

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

  const resp = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await resp.json();

  const res = await fetch(`${url}/group/group/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const group = await res.json();

  // Pass data to the page via props
  return { props: { group, user } };
}
