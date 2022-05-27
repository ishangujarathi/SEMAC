import React from 'react';

const cont = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2vw',
  background: '#e8d5b5',
  borderTopLeftRadius: '3vw',
  position: 'relative',
  left: '12%',
  height: '100vh',
};

const head = {
  fontSize: '4vw',
  marginLeft: '-10%',
  marginTop: '-20%',
  color: '#0B0051',
};

const Plogin = () => {
  return (
    <section style={cont}>
      <h1 style={head}>PLEASE LOGIN TO USE THE WEBAPP</h1>
    </section>
  );
};

export default Plogin;
