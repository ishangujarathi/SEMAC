import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import styles from '../styles/student-group.module.css';
import axios from 'axios';

const StudentGroup = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  let email;

  const [formContent, setFormContent] = useState({
    branch: '',
    division: '',
    batch: '',
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0,
    r6: 0,
  });

  email = session?.user.email;

  const { batch, branch, division, r1, r2, r3, r4, r5, r6 } = formContent;

  const onChange = (e) => setFormContent({ ...formContent, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = { email, batch, branch, division, r1, r2, r4, r3, r5, r6 };

    await fetch('/api/Group/group', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (typeof window !== 'undefined') {
      router.push('/MainCollab');
    }
  };

  if (status === 'authenticated') {
    return (
      <section className={styles.cont}>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1>REGISTER YOUR GROUP</h1>
          <br />
          <div>
            <label>
              BRANCH: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                name="branch"
                value={formContent.branch}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
            </label>
          </div>
          <div>
            <label>
              DIVISION: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                name="division"
                value={formContent.division}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
            </label>
          </div>
          <div>
            <label>
              BATCH:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                name="batch"
                value={formContent.batch}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
            </label>
          </div>
          <div>
            <label className={styles.roll_label}>
              ROLL NUMBERS: &nbsp;&nbsp;
              <div className={styles.roll_cont}>
                <input
                  name="r1"
                  value={formContent.r1}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r2"
                  value={formContent.r2}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r3"
                  value={formContent.r3}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r4"
                  value={formContent.r4}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r5"
                  value={formContent.r5}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r6"
                  value={formContent.r6}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
              </div>
            </label>
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default StudentGroup;
