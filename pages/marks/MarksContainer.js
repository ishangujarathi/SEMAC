import React, { useState } from 'react';
import styles from '../../styles/marks-cont.module.css';
import GroupComponent from '../components/GroupComponent';
import MarksUpdater from './MarksUpdater';
const environment = process.env.NODE_ENV;

const MarksContainer = ({ groups }) => {
  const [click, setClick] = useState(false);
  const [group, setGroup] = useState('');
  const [roll, setRoll] = useState(['']);
  return (
    <section className={styles.cont}>
      {group === '' &&
        groups.map((element) => (
          <GroupComponent
            handleClick={(e) => clickHandler(e, element.groupNumber)}
            key={JSON.stringify(element.email)}
            group_number={element.groupNumber}
            branch={element.branch}
            division={element.division}
            setClick={setClick}
            click={click}
            setGroup={setGroup}
            setRoll={setRoll}
            roll={element.roll}
          />
        ))}
      {group !== '' && <MarksUpdater groupNumber={group} roll={roll} />}
    </section>
  );
};

export default MarksContainer;

export async function getServerSideProps() {
  // Fetch data from external API

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

  const res = await fetch(`${url}/group/group?get=all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const groups = await res.json();

  // Pass data to the page via props
  return { props: { groups } };
}
