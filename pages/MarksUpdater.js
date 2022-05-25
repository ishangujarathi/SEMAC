import React from 'react';
import styles from '../styles/marks-updater.module.css';

const MarksUpdater = (props) => {
  const { groupNumber } = props;
  return (
    <section className={styles.cont}>
      <button>GD</button>
      <button>GS</button>
      <button>HA</button>
      <button>EDAI</button>
    </section>
  );
};

export default MarksUpdater;
