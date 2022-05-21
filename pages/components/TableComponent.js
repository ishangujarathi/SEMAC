import React from 'react';

const TableComponent = (props) => {
  const { roll, name, gd, gs, ha, sdp, edai, ese, mse, cvv } = props;
  return (
    <>
      <tr>
        <td>{roll}</td>
        <td>{name}</td>
        <td>{gd}</td>
        <td>{gs}</td>
        <td>{ha}</td>
        <td>{sdp}</td>
        <td>{edai}</td>
        <td>{ese}</td>
        <td>{mse}</td>
        <td>{cvv}</td>
      </tr>
    </>
  );
};

export default TableComponent;
