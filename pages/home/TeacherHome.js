import React from 'react';
import styles from '../../styles/main.module.css';

const TeeacherHome = ({ role }) => {
  if (role && role === 'Teacher') {
    return (
      <div className={(styles.contentcontainer, styles.tbg)}>
        <section>
          <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/timetable/TimetableUpdater">
                  <h2 className={styles.ttabs}>TIMETABLE UPDATER</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/attendance/AttendanceUpdater">
                  <h2 className={styles.ttabs}>ATTENDANCE MANAGER</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/marks/MarksContainer">
                  <h2 className={styles.ttabs}>MARKS UPDATER</h2>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default TeeacherHome;
