import React, { useState } from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';

const GdViewer = (props) => {
  const { groupNumber } = props;
  const { download } = useDownloader();

  const [blog, setBlog] = useState(false);
  const [click, setClick] = useState(false);

  const blogHandler = async (e) => {
    e.preventDefault();
    setClick(true);
  };

  return (
    <section className={styles.cont}>
      {blog === false && (
        <>
          <h1>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD HA REPORT</h1>
          <button onClick={() => download(fileUrl, filename)}>HA REPORT</button>
        </>
      )}
      {blog === true && (
        <>
          {' '}
          <h1>PLEASE CLICK ON FOLLOWING BUTTON TO REVEAL HA BLOG LINK</h1>
          {click === false && <button onClick={blogHandler}>CLICK TO REVEAL LINK</button>}
          {click === true && <a href="">BLOG LINK</a>}
        </>
      )}
    </section>
  );
};

export default GdViewer;
