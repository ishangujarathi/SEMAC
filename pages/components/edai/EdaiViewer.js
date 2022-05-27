import React, { useState } from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';

const GdViewer = (props) => {
  const { groupNumber } = props;
  const { download } = useDownloader();
  const [click, setClick] = useState(false);

  const blogHandler = async (e) => {
    e.preventDefault();
    setClick(true);
  };

  return (
    <section className={styles.cont}>
      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD EDAI REPORT</h1>
      <button onClick={() => download(fileUrl, filename)}>HA REPORT</button>

      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO REVEAL EDAI REPO LINK</h1>
      {click === false && <button onClick={blogHandler}>CLICK TO REVEAL LINK</button>}
      {click === true && <a href="">REPO LINK</a>}
    </section>
  );
};

export default GdViewer;
