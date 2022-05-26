import React from 'react';
import styles from '../styles/main.module.css';

const TeeacherContent = () => {
  return (
    <div className={(styles.contentcontainer, styles.tbg)}>
      <section>
        <div className={styles.contentwrapper}>
          <div className={styles.tabs}>
            <div className={styles.categories}>
              <a href="/TimetableUpdater">
                <h2 className={styles.ttabs}>TIMETABLE UPDATER</h2>
              </a>
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.categories}>
              <a href="/AttendanceUpdater">
                <h2 className={styles.ttabs}>ATTENDACE UPDATER</h2>
              </a>
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.categories}>
              <a href="/MarksContainer">
                <h2 className={styles.ttabs}>MARKS UPDATER</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeeacherContent;
