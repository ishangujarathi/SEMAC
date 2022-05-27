import React, { useState } from 'react';
import GdViewer from '../components/gd/GdViewer';
import GsViewer from '../components/gs/GsViewer';
import HaViewer from '../components/ha/HaViewer';
import EdaiViewer from '../components/edai/EdaiViewer';
import styles from '../../styles/marks-updater.module.css';

const MarksUpdater = (props) => {
  const { groupNumber, roll } = props;

  const [state, setState] = useState({
    clicked: false,
    gd: false,
    gs: false,
    ha: false,
    edai: false,
  });

  const clickHandler = async (e) => {
    e.preventDefault();

    setState({ ...state, [e.target.name]: true, clicked: true });
  };

  const { clicked, gd, gs, ha, edai } = state;
  return (
    <>
      {clicked === false && (
        <section className={styles.cont}>
          <button name="gd" onClick={clickHandler}>
            GD
          </button>
          <button name="gs" onClick={clickHandler}>
            GS
          </button>
          <button name="ha" onClick={clickHandler}>
            HA
          </button>
          <button name="edai" onClick={clickHandler}>
            EDAI
          </button>
        </section>
      )}
      {clicked === true && gd === true && <GdViewer groupNumber={groupNumber} roll={roll} />}
      {clicked === true && gs === true && <GsViewer groupNumber={groupNumber} />}
      {clicked === true && ha === true && <HaViewer groupNumber={groupNumber} />}
      {clicked === true && edai === true && <EdaiViewer groupNumber={groupNumber} />}
    </>
  );
};

export default MarksUpdater;
