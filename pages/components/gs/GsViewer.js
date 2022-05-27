import React from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';

const GdViewer = (props) => {
  const { groupNumber } = props;
  const { download } = useDownloader();

  return (
    <section className={styles.cont}>
      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD GPPT</h1>
      <button onClick={() => download(fileUrl, filename)}>GPPT</button>
    </section>
  );
};

export default GdViewer;
