import React, { useState } from 'react';
import styles from '../../styles/main-collab.module.css';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import Gd from '../components/gd/Gd';
import Gs from '../components/gs/Gs';
import Ha from '../components/ha/Ha';
import Edip from '../components/edai/Edip';

export const MainCollab = ({ group, user }) => {

  const [r1, r2, r3, r4, r5, r6] = group.roll;
  const groupNumber = group.groupNumber;

  const [state, setState] = useState({
    gd: false,
    gs: false,
    ha: false,
    edai: false,
  });

  const { gd, gs, ha, edai } = state;

  const role = user.role;

  if (role && role === 'Student') {
    return (
      <section className={styles.cont}>
        <nav>
          <ul>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setState({ gd: true });
                }}
              >
                GD
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setState({ gs: true });
                }}
              >
                GS
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setState({ ha: true });
                }}
              >
                HA
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setState({ edai: true });
                }}
              >
                EDAI
              </button>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>
          {gd === false && gs === false && ha === false && edai === false && (
            <h1>Please select an assessment</h1>
          )}
          {gd === true && (
            <Gd
              groupNumber={groupNumber}
              r1={r1}
              r2={r2}
              r3={r3}
              r4={r4}
              r5={r5}
              r6={r6}
              role={role}
            />
          )}
          {gs === true && <Gs groupNumber={groupNumber} role={role} />}
          {ha === true && <Ha groupNumber={groupNumber} role={role} />}
          {edai === true && <Edip groupNumber={groupNumber} role={role} />}
        </main>
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default MainCollab;

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

  const resp = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await resp.json();

  // Pass data to the page via props
  return { props: { group, user } };
}
