import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import styles from '../styles/main-collab.module.css';
import axios from 'axios';
import Gd from './components/Gd';
import Gs from './components/Gs';
import Ha from './components/Ha';
import Edip from './components/Edip';

export const MainCollab = () => {
  const { data: session, status } = useSession();

  const [state, setState] = useState({
    statuss: '',
    gd: false,
    gs: false,
    ha: false,
    edai: false,
  });

  const [roll, setRoll] = useState({
    rolll: [],
    r1: '0',
    r2: '0',
    r3: '0',
    r4: '0',
    r5: '0',
    r6: '0',
  });

  useEffect(() => {
    (async () => {
      const email = session?.user.email;
      await axios.get(`/api/Group/group/?email=${email}`).then((res) => {
        const [r11, r22, r33, r44, r55, r66] = res.data.roll;
        setRoll({
          r1: r11,
          r2: r22,
          r3: r33,
          r4: r44,
          r5: r55,
          r6: r66,
        });
      });
    })();
  }, []);

  const { r1, r2, r3, r4, r5, r6 } = roll;
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
                  setState({ mse: true });
                }}
              >
                MSE
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setState({ ese: true });
                }}
              >
                ESE
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setState({ sdp: true });
                }}
              >
                SDP
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
          {gd === true && <Gd r1={r1} r2={r2} r3={r3} r4={r4} r5={r5} r6={r6} />}
          {gs === true && <Gs />}
          {ha === true && <Ha />}
          {edai === true && <Edip />}
        </main>
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default MainCollab;
