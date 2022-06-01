import React from 'react';

const TableRow = (props) => {
  const { role, gd, ha, gs, edai, sdp, mse, ese, cvv, groupNumber, r1, r2, r3, r4, r5, r6 } = props;

  if (role && role === 'Student') {
    return (
      <>
        <tr>
          <td>{groupNumber.slice(0, 2)}</td>
          <td>{r1}</td>
          <td>{gd}</td>
          <td>{gs}</td>
          <td>{ha}</td>
          <td>{mse}</td>
          <td>{ese}</td>
          <td>{edai}</td>
          <td>{sdp}</td>
          <td>{cvv}</td>
        </tr>
        <tr>
          <td>{groupNumber.slice(0, 2)}</td>
          <td>{r2}</td>
          <td>{gd}</td>
          <td>{gs}</td>
          <td>{ha}</td>
          <td>{mse}</td>
          <td>{ese}</td>
          <td>{edai}</td>
          <td>{sdp}</td>
          <td>{cvv}</td>
        </tr>{' '}
        <tr>
          <td>{groupNumber.slice(0, 2)}</td>
          <td>{r3}</td>
          <td>{gd}</td>
          <td>{gs}</td>
          <td>{ha}</td>
          <td>{mse}</td>
          <td>{ese}</td>
          <td>{edai}</td>
          <td>{sdp}</td>
          <td>{cvv}</td>
        </tr>{' '}
        <tr>
          <td>{groupNumber.slice(0, 2)}</td>
          <td>{r4}</td>
          <td>{gd}</td>
          <td>{gs}</td>
          <td>{ha}</td>
          <td>{mse}</td>
          <td>{ese}</td>
          <td>{edai}</td>
          <td>{sdp}</td>
          <td>{cvv}</td>
        </tr>{' '}
        <tr>
          <td>{groupNumber.slice(0, 2)}</td>
          <td>{r5}</td>
          <td>{gd}</td>
          <td>{gs}</td>
          <td>{ha}</td>
          <td>{mse}</td>
          <td>{ese}</td>
          <td>{edai}</td>
          <td>{sdp}</td>
          <td>{cvv}</td>
        </tr>{' '}
        <tr>
          <td>{groupNumber.slice(0, 2)}</td>
          <td>{r6}</td>
          <td>{gd}</td>
          <td>{gs}</td>
          <td>{ha}</td>
          <td>{mse}</td>
          <td>{ese}</td>
          <td>{edai}</td>
          <td>{sdp}</td>
          <td>{cvv}</td>
        </tr>
      </>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
};

export default TableRow;
