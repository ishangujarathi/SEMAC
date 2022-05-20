import React, { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';

const Collab = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  } else return <div>Collab</div>;
};

export default Collab;

export async function getServerSideProps() {
  const session = await getSession();
  return {
    props: {
      data: session ? 'List of premium' : 'List of free',
    },
  };
}
