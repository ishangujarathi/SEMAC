import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../styles/viewer.module.css';
const environment = process.env.NODE_ENV;

const EdaiViewer = (props) => {
  const { groupNumber } = props;
  const [click, setClick] = useState(false);
  const [repo, setRepo] = useState('');

  const repoHandler = async (e) => {
    e.preventDefault();
    setClick(true);
  };

  const [mark, setMark] = useState('');

  const [filename, setFilename] = useState('');

  const markHandler = async (e) => {
    e.preventDefault();
    setMark(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const body = { groupNumber: groupNumber, edaiMarks: mark };

    await axios
      .put(`/api/collab/edai`, body, {
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
      const response = await fetch(`${url}/collab/edai/?groupNumber=${groupNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      setFilename(res.filename);
      setRepo(res.repoLink);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const fileUrl = `https://res.cloudinary.com/df6hie48w/raw/upload/edai/grp-${groupNumber}-${filename.replace(
    /\s/g,
    '_'
  )}`;

  return (
    <section className={styles.cont}>
      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD EDAI REPORT</h1>
      <a href={fileUrl}>EDAI REPORT</a>

      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO REVEAL EDAI REPO LINK</h1>
      {click === false && <button onClick={repoHandler}>CLICK TO REVEAL LINK</button>}
      {click === true && (
        <a href={repo} target="_blank">
          {repo}
        </a>
      )}
      <form onSubmit={submitHandler} style={{ marginTop: '-10vh' }}>
        <input type="text" name="mark" onChange={markHandler} />
        <input type="submit" value="UPDATE MARKS" />
      </form>
    </section>
  );
};

export default EdaiViewer;
