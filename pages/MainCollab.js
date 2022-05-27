import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from '../styles/main-collab.module.css';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import Gd from './components/Gd';
import Gs from './components/Gs';
import Ha from './components/Ha';
import Edip from './components/Edip';

export const MainCollab = ({ group }) => {
  const { data: session, status } = useSession();

  const [r1, r2, r3, r4, r5, r6] = group.roll;
  const groupNumber = group.groupNumber;

  const [state, setState] = useState({
    gd: false,
    gs: false,
    ha: false,
    edai: false,
  });

  const { gd, gs, ha, edai } = state;

  if (status === 'authenticated') {
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
            <Gd groupNumber={groupNumber} r1={r1} r2={r2} r3={r3} r4={r4} r5={r5} r6={r6} />
          )}
          {gs === true && <Gs groupNumber={groupNumber} />}
          {ha === true && <Ha groupNumber={groupNumber} />}
          {edai === true && <Edip groupNumber={groupNumber} />}
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

  // Pass data to the page via props
  return { props: { group } };
}
