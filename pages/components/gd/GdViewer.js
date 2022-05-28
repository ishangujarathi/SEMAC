import React, { useState, useEffect } from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';
const environment = process.env.NODE_ENV;

const GdViewer = ({ groupNumber, roll }) => {
  const [r1, r2, r3, r4, r5, r6] = roll;

  const [files, setFiles] = useState({
    filename1: '',
    filename2: '',
    filename3: '',
    filename4: '',
    filename5: '',
    filename6: '',
  });

  useEffect(() => {
    const url =
      environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

    const fetchData = async () => {
      const response = await fetch(`${url}/collab/gd/?groupNumber=${groupNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      setFiles({
        filename1: res.files[0].filename,
        filename2: res.files[1].filename,
        filename3: res.files[2].filename,
        filename4: res.files[3].filename,
        filename5: res.files[4].filename,
        filename6: res.files[5].filename,
      });
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const { filename1, filename2, filename3, filename4, filename5, filename6 } = files;

  const fileUrl1 = `https://res.cloudinary.com/df6hie48w/raw/upload/gd/${filename1}`,
    fileUrl2 = `.https://res.cloudinary.com/df6hie48w/raw/upload/gd/${filename2}`,
    fileUrl3 = `https://res.cloudinary.com/df6hie48w/raw/upload/gd/${filename3}`,
    fileUrl4 = `https://res.cloudinary.com/df6hie48w/raw/upload/gd/${filename4}`,
    fileUrl5 = `https://res.cloudinary.com/df6hie48w/raw/upload/gd/${filename5}`,
    fileUrl6 = `https://res.cloudinary.com/df6hie48w/raw/upload/gd/${filename6}`;

  const { download } = useDownloader();

  return (
    <section className={styles.cont}>
      <h1>PLEASE CLICK ON ANY OF THE BUTTONS TO DOWNLOAD GD CONTENTS BY STUDENTS</h1>
      <button onClick={() => download(fileUrl1, filename1)}>Roll No: {r1}</button>
      <button onClick={() => download(fileUrl2, filename2)}>Roll No: {r2}</button>
      <button onClick={() => download(fileUrl3, filename3)}>Roll No: {r3}</button>
      <button onClick={() => download(fileUrl4, filename4)}>Roll No: {r4}</button>
      <button onClick={() => download(fileUrl5, filename5)}>Roll No: {r5}</button>
      <button onClick={() => download(fileUrl6, filename6)}>Roll No: {r6}</button>
    </section>
  );
};

export default GdViewer;
