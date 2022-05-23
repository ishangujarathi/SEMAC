import React, { Component } from 'react';

export class Gd extends Component {
  render() {
    return (
      <>
        <h1>UPLOAD YOUR CONTENT FOR GD</h1>
        <form onSubmit={(e) => gdSubmitHandler(e)}>
          <label>
            ROLL NO: {r1}&nbsp;&nbsp;&nbsp;
            <input type="file" name="" id="" />
          </label>
          <label>
            ROLL NO: {r2}&nbsp;&nbsp;&nbsp;
            <input type="file" name="" id="" />
          </label>
          <label>
            ROLL NO: {r3}&nbsp;&nbsp;&nbsp;
            <input type="file" name="" id="" />
          </label>
          <label>
            ROLL NO: {r4}&nbsp;&nbsp;&nbsp;
            <input type="file" name="" id="" />
          </label>
          <label>
            ROLL NO: {r5}&nbsp;&nbsp;&nbsp;
            <input type="file" name="" id="" />
          </label>
          <label>
            ROLL NO: {r6}&nbsp;&nbsp;&nbsp;
            <input type="file" name="" id="" />
          </label>
        </form>
      </>
    );
  }
}

export default Gd;
