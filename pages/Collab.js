import React, { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';
import styles from '../styles/collab.module.css';

const Collab = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  } else
    return (
      <section className={styles.cont}>
        <a className={styles.btn} href="/StudentGroup">
          Create Student Group
        </a>
      </section>
    );
};

export default Collab;
