import React from 'react';
import TableRow from '../components/table/TableRow';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import { uuid } from 'uuidv4';
import styles from '../../styles/marks-viewer.module.css';

const MarksViewer = ({ marks, user }) => {
  const role = user.role;

  if (role && role === 'Student') {
    return (
      <section className={styles.cont}>
        <h1>DIVISION MARKSHEET</h1>
        <table>
          <tr>
            <td>Group Number</td>
            <td>Roll Number</td>
            <td>GD</td>
            <td>GS</td>
            <td>HA</td>
            <td>MSE</td>
            <td>ESE</td>
            <td>EDAI</td>
            <td>SDP</td>
            <td>CVV</td>
          </tr>
          {marks.map((element) => (
            <TableRow
              role={role}
              key={uuid()}
              gd={element.gdMarks}
              ha={element.haMarks}
              gs={element.gsMarks}
              edai={element.edaiMarks}
              sdp={element.sdpMarks}
              mse={element.mseMarks}
              ese={element.eseMarks}
              cvv={element.cvvMarks}
              groupNumber={element.groupNumber}
              r1={element.r1}
              r2={element.r2}
              r3={element.r3}
              r4={element.r4}
              r5={element.r5}
              r6={element.r6}
            />
          ))}
        </table>
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default MarksViewer;

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

  const res = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await res.json();

  const response = await fetch(`${url}/collab/marks/?getAll=true}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const marks = await response.json();

  // Pass data to the page via props
  return { props: { marks, user } };
}
