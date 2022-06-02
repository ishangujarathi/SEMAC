import React, { useState } from 'react';
import styles from '../../styles/attendance-updater.module.css';

const AttendanceUpdater = () => {
  const [clicked, setClicked] = useState(false);
  const [student, setStudent] = useState(false);
  const [course, setCourse] = useState(false);
  const [attendance, setAttendance] = useState(false);

  const studentSubmitHandler = async (e) => {
    e.preventDefault();

  };

  return (
    <section className={styles.cont}>
      {!clicked &&
        <>
          <h1>PLEASE SELECT A TASK TO MANAGE ATTENDANCE</h1>
          <button onClick={(e) => {
            e.preventDefault();
            setClicked(true);
            setStudent(true);
          }}>STUDENT CREATOR</button>
          <button onClick={(e) => {
            e.preventDefault();
            setClicked(true);
            setCourse(true);
          }}>COURSE CREATOR</button>
          <button onClick={(e) => {
            e.preventDefault();
            setClicked(true);
            setAttendance(true);
          }}>ATTENDANCE UPDATER</button>
        </>
      }
      {clicked && student && (<>
        <h1>STUDENT CREATOR</h1>
        <form onSubmit={studentSubmitHandler}>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
        </form>
      </>)}
    </section>
  );
};

export default AttendanceUpdater;
