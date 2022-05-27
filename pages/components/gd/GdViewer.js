import React from 'react';
import useDownloader from 'react-use-downloader';
import styles from '../../../styles/viewer.module.css';

const GdViewer = (props) => {
  const { groupNumber, roll } = props;
  const [r1, r2, r3, r4, r5, r6] = roll;

  const fileUrl1 = `../../../public/gd/${filename1}`,
    fileUrl2 = `../../../public/gd/${filename2}`,
    fileUrl3 = `../../../public/gd/${filename3}`,
    fileUrl4 = `../../../public/gd/${filename4}`,
    fileUrl5 = `../../../public/gd/${filename5}`,
    fileUrl6 = `../../../public/gd/${filename6}`;

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

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

  const res = await fetch(`${url}/group/group/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const group = await res.json();

  const response = await fetch(`${url}/collab/gd/?groupNumber=${groupNumber}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const gd = await response.json();

  // Pass data to the page via props
  return { props: { gd } };
}
