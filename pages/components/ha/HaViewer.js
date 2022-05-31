import React, { useState, useEffect } from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';
const environment = process.env.NODE_ENV;
import axios from 'axios';

const HaViewer = (props) => {
  const { groupNumber } = props;
  const { download } = useDownloader();

  const [blog, setBlog] = useState('');
  const [click, setClick] = useState(false);

  const blogHandler = async (e) => {
    e.preventDefault();
    setClick(true);
  };

  const [mark, setMark] = useState('');

  const markHandler = async (e) => {
    e.preventDefault();
    setMark(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const body = { groupNumber: groupNumber, marks: mark };

    await axios
      .put(`/api/collab/ha`, body, {
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

  const [filename, setFilename] = useState('');

  useEffect(() => {
    const url =
      environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

    const fetchData = async () => {
      const response = await fetch(`${url}/collab/ha/?groupNumber=${groupNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      setFilename(res.filename);
      setBlog(res.blogLink);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const fileUrl = `https://res.cloudinary.com/df6hie48w/raw/upload/fl_attachment/ha/grp-${groupNumber}-${filename.replace(
    /\s/g,
    '_'
  )}`;

  return (
    <section className={styles.cont}>
      {blog === '' && (
        <>
          <h1>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD HA REPORT</h1>
          <a href={fileUrl}> REPORT</a>
        </>
      )}
      {blog !== '' && (
        <>
          {' '}
          <h1>PLEASE CLICK ON FOLLOWING BUTTON TO REVEAL HA BLOG LINK</h1>
          {click === false && <button onClick={blogHandler}>CLICK TO REVEAL LINK</button>}
          {click === true && <a href={blog}>{blog}</a>}
        </>
      )}
      <form onSubmit={submitHandler}>
        <input type="text" name="mark" onChange={markHandler} />
        <input type="submit" value="UPDATE MARKS" />
      </form>
    </section>
  );
};

export default HaViewer;
