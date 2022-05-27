import React from 'react';
import styles from '../../../styles/main.module.css';
import { useSession } from 'next-auth/react';

function Header() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.headcontainer}>
      <div className={styles.title}>
        <h2>
          Hello, <span>User</span>
        </h2>
        <p>welcome to the Semac.</p>
      </div>
      {status === 'authenticated' && (
        <div className={styles.profile}>
          <img src={session?.user.image} alt="profile" className={styles.image} />
        </div>
      )}
    </div>
  );
}

export default Header;
