import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/student-group.module.css';

const StudentGroup = () => {
  const router = useRouter();

  const clickHandler = async (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      router.push('/MainCollab');
    }
  };

  return (
    <section className={styles.cont}>
      <form onSubmit={(e) => clickHandler(e)}>
        <h1>REGISTER YOUR GROUP</h1>
        <br />
        <div>
          <label>
            BRANCH: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" required />
          </label>
        </div>
        <div>
          <label>
            DIVISION: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" required />
          </label>
        </div>
        <div>
          <label>
            BATCH:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" required />
          </label>
        </div>
        <div>
          <label>
            ROLL NUMBERS: <input type="text" required />
          </label>
        </div>
        <input type="submit" value="SUBMIT" />
      </form>
    </section>
  );
};

export default StudentGroup;
