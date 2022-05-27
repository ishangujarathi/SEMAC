import React, { useState, useEffect } from 'react';
import TableComponent from './components/TableComponent';

const Marks = () => {
  let marks;

  const [total, setTotal] = useState('');
  const [grade, setGrade] = useState('');
  // useEffect(() => {
  //   marks = fetch('/api/route-name', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(roll),
  //   });
  // }, []);

  return (
    <section className="cont">
      {' '}
      <div class="container">
        <h2>MARK SHEET</h2>
        <table>
          <thead>
            <tr>
              <th>GD</th>
              <th>GS</th>
              <th>HA</th>
              <th>SDP</th>
              <th>EDAI</th>
              <th>MSE</th>
              <th>ESE</th>
              <th>CVV</th>
              <th>ATTENDANCE</th>
              <th>CO-CURRICULAR</th>
            </tr>
          </thead>
          <tbody>
            <TableComponent />
          </tbody>
          <tfoot>
            <tr>
              <td colspan={3}>Maximum Marks: 1000</td>
              <td colspan={3}>Marks Obtained: {total}</td>
              <td colspan={2}>Grade: {grade}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Marks;
