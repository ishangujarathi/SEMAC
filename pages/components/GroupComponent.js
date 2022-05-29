import React, { useState } from 'react';
import styles from '../../styles/group.module.css';

const GroupComponent = (props) => {
  const { group_number, branch, division, setClick, click, setGroup, setRoll, roll, role } = props;

  const clickHandler = async (e, groupNumber) => {
    e.preventDefault();
    setClick(true);
    setGroup(groupNumber);
    setRoll(roll);
  };

  if (role && role === 'Teacher') {
    return (
      <>
        {click === false && (
          <section className={styles.cont}>
            {' '}
            <button onClick={(e) => clickHandler(e, group_number)}>
              <h1>GROUP NUMBER: {group_number.slice(0, 2)}</h1>
              <h1>BRANCH: {branch}</h1>
              <h1>DIVISION: {division}</h1>
            </button>
          </section>
        )}
      </>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default GroupComponent;
