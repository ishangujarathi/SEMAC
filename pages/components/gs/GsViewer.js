import React, { useState, useEffect } from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';
const environment = process.env.NODE_ENV;

const GsViewer = (props) => {
  const { groupNumber } = props;
  const { download } = useDownloader();

  const [filename, setFilename] = useState('');

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

  const fileUrl = `https://res.cloudinary.com/df6hie48w/raw/upload/gs/grp-${groupNumber}-${filename.replace(
    /\s/g,
    '_'
  )}`;

  return (
    <section className={styles.cont}>
      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD GPPT</h1>
      <button onClick={() => download(fileUrl, filename)}>GPPT</button>
    </section>
  );
};

export default GsViewer;
