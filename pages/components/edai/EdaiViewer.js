import React, { useState, useEffect } from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';
const environment = process.env.NODE_ENV;

const EdaiViewer = (props) => {
  const { groupNumber } = props;
  const { download } = useDownloader();
  const [click, setClick] = useState(false);
  const [repo, setRepo] = useState('');

  const repoHandler = async (e) => {
    e.preventDefault();
    setClick(true);
  };

  const [filename, setFilename] = useState('');

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
      console.log(res);
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

  console.log(repo);

  return (
    <section className={styles.cont}>
      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO DOWNLOAD EDAI REPORT</h1>
      <button onClick={() => download(fileUrl, filename)}>EDAI REPORT</button>

      <h1>PLEASE CLICK ON FOLLOWING BUTTON TO REVEAL EDAI REPO LINK</h1>
      {click === false && <button onClick={repoHandler}>CLICK TO REVEAL LINK</button>}
      {click === true && <a href={repo} target="_blank">{repo}</a>}
    </section>
  );
};

export default EdaiViewer;
