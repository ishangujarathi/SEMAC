import React from 'react';
import Image from 'next/image';
import tt from '../images/tt.jpg';

const TimeTableViewer = () => {
  return (
    <section>
      <h1>DIVISION TIMETABLE</h1>
      <Image src={tt} layout="responsive" width={1920} height={1080} />
    </section>
  );
};

export default TimeTableViewer;
