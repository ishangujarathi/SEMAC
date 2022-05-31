import React, { useState, useEffect } from 'react';
import styles from '../../../styles/viewer.module.css';
const environment = process.env.NODE_ENV;
import axios from 'axios';

const GsViewer = (props) => {
  const { groupNumber } = props;

  const [filename, setFilename] = useState('');

  const [mark, setMark] = useState('');

  const markHandler = async (e) => {
    e.preventDefault();
    setMark(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const body = { groupNumber: groupNumber, marks: mark };

    await axios
      .put(`/api/collab/gs`, body, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const url =
      environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

    const fetchData = async () => {
      const response = await fetch(`${url}/collab/gs/?groupNumber=${groupNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      setFilename(res.filename);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const fileUrl = `https://res.cloudinary.com/df6hie48w/raw/upload/fl_attachment/gs/grp-${groupNumber}-${filename.replace(
    /\s/g,
    '_'
  )}`;

  return (
    <section className={styles.cont}>
      <h1 style={{ marginBottom: '-8vh' }}>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD GPPT</h1>
      <form onSubmit={submitHandler}>
        <a href={fileUrl}>GPPT</a>
        <input type="text" name="mark" onChange={markHandler} />
        <input type="submit" value="UPDATE MARKS" />
      </form>
    </section>
  );
};

export default GsViewer;
