import React, { useState } from 'react';
import styles from '../styles/main-collab.module.css';

export const MainCollab = () => {
  const [state, setState] = useState({
    gd: false,
    gs: false,
    ha: false,
    mse: false,
    ese: false,
    sdp: false,
    edai: false,
  });
  const [roll, setRoll] = useState({
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0,
    r6: 0,
  });

  const { r1, r2, r3, r4, r5, r6 } = roll;
  const { gd, gs, ha, mse, ese, sdp, edai } = state;

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
      <main className={styles.cont}>
        {gd === false &&
          gs === false &&
          ha === false &&
          mse === false &&
          ese === false &&
          sdp === false &&
          edai === false && <h1>Please select an assessment</h1>}
        {gd === true && (
          <>
            <h1>UPLOAD YOUR CONTENT FOR GD</h1>
            <label>
              ROLL NO: {r1}
              <input type="file" name="" id="" />
            </label>
            <label>
              ROLL NO: {r2}
              <input type="file" name="" id="" />
            </label>
            <label>
              ROLL NO: {r3}
              <input type="file" name="" id="" />
            </label>
            <label>
              ROLL NO: {r4}
              <input type="file" name="" id="" />
            </label>
            <label>
              ROLL NO: {r5}
              <input type="file" name="" id="" />
            </label>
            <label>
              ROLL NO: {r6}
              <input type="file" name="" id="" />
            </label>
          </>
        )}
        {gs === true && (
          <>
            <label>
              PLEASE SUBMIT YOUR GROUP PPT
              <input type="file" name="" id="" />
            </label>
          </>
        )}
        {ha === true && (
          <>
            <label>
              PLEASE SUBMIT YOUR HA Report (SURVEY/CASE-STUDY/DESIGN)
              <input type="file" name="" id="" />
            </label>
            <label>
              PLEASE ENTER YOUR BLOG LINK
              <input type="text" />
            </label>
          </>
        )}
        {mse === true && <></>}
        {ese === true && <></>}
        {sdp === true && (
          <>
            <label>
              ENTER REPO LINK OF YOUR PROJECT:
              <input type="text" />
            </label>
            <label>
              UPLOAD PROJECT REPORT:
              <input type="file" name="" id="" />
            </label>
          </>
        )}
        {edai === true && (
          <>
            <label>
              ENTER REPO LINK OF YOUR PROJECT:
              <input type="text" />
            </label>
            <label>
              UPLOAD PROJECT REPORT:
              <input type="file" name="" id="" />
            </label>
          </>
        )}
      </main>
    </section>
  );
};

export default MainCollab;
