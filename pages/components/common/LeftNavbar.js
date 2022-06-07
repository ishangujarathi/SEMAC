import React from 'react';
import styles from '../../../styles/main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faCog,
  faHeart,
  faSignInAlt,
  faRocket,
  faSignOutAlt,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { signIn, signOut, useSession } from 'next-auth/react';

function LeftNavbar() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.navcontainer}>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: '2vw', fontSize: '1.5vw', cursor: 'pointer' }}
            />{' '}
            <a href="/">Dashboard</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: '2vw', fontSize: '1.5vw', cursor: 'pointer' }}
            />{' '}
            <a href="/chatbot/Chatbot">CHATBOT</a>
          </li>
          {status === 'unauthenticated' && (
            <li>
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ width: '2vw', fontSize: '1.5vw', cursor: 'pointer' }}
              />{' '}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
                href="/api/auth/signin"
              >
                LOGIN
              </a>
            </li>
          )}
          {status === 'authenticated' && (
            <li>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ width: '2vw', fontSize: '1.5vw', cursor: 'pointer' }}
              />{' '}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                href="/api/auth/signout"
              >
                LOGOUT
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
