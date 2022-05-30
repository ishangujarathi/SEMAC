import React, { useState, useEffect } from 'react';
import styles from '../../styles/marks-cont.module.css';
import GroupComponent from '../components/GroupComponent';
import MarksUpdater from './MarksUpdater';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;

const MarksContainer = ({ groups, user }) => {
  const [click, setClick] = useState(false);
  const [group, setGroup] = useState('');
  const [roll, setRoll] = useState(['']);
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(user?.role);
  }, []);

  if (role && role === 'Teacher') {
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
              role={role}
            />
          ))}
        {group !== '' && <MarksUpdater role={role} groupNumber={group} roll={roll} />}
      </section>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default MarksContainer;

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

  const res = await fetch(`${url}/group/group?get=all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const groups = await res.json();
  
  console.log(groups)

  const resp = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await resp.json();

  // Pass data to the page via props
  return { props: { groups, user } };
}
