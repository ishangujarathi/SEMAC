import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import styles from '../styles/student-group.module.css';
import axios from 'axios';

const StudentGroup = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
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

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const resetForm = () => {
    setFormData({
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
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { branch, division, batch, r1, r2, r3, r4, r5, r6 } = formData;

    const email = JSON.parse(JSON.stringify(session.user.email));

    const body = { email, branch, division, batch, r1, r2, r3, r4, r5, r6 };

    const res = await fetch('/api/Group/group', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });

    console.log(res);

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
                value={formData.branch}
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
                value={formData.division}
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
                value={formData.batch}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
            </label>
          </div>
          <div>
            <label>
              ROLL NUMBERS: &nbsp;
              <div className={styles.roll_cont}>
                <input
                  name="r1"
                  value={formData.r1}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r2"
                  value={formData.r2}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r3"
                  value={formData.r3}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r4"
                  value={formData.r4}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r5"
                  value={formData.r5}
                  onChange={(e) => onChange(e)}
                  className={styles.roll}
                  type="text"
                  required
                />
                <input
                  name="r6"
                  value={formData.r6}
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
