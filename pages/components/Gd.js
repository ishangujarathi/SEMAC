import React, { Component } from 'react';

export class Gd extends Component {
  state = {
    r1: this.props.r1,
    r2: this.props.r2,
    r3: this.props.r3,
    r4: this.props.r4,
    r5: this.props.r5,
    r6: this.props.r6,
  };

  mystyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  file = {
    marginLeft: '10px',
  };

  label = {
    fontSize: '1.5rem',
  };

  head = {
    fontSize: '2rem',
    marginBottom: '-4rem',
  };

  render() {
    return (
      <>
        <h1 style={this.head}>UPLOAD YOUR CONTENT FOR GD</h1>
        <form onSubmit={(e) => gdSubmitHandler(e)} style={this.mystyle}>
          <label style={this.label}>
            ROLL NO: {this.state.r1}
            <input type="file" name="" id="" style={this.file} />
          </label>
          <label style={this.label}>
            ROLL NO: {this.state.r2}
            <input type="file" name="" id="" style={this.file} />
          </label>
          <label style={this.label}>
            ROLL NO: {this.state.r3}
            <input type="file" name="" id="" style={this.file} />
          </label>
          <label style={this.label}>
            ROLL NO: {this.state.r4}
            <input type="file" name="" id="" style={this.file} />
          </label>
          <label style={this.label}>
            ROLL NO: {this.state.r5}
            <input type="file" name="" id="" style={this.file} />
          </label>
          <label style={this.label}>
            ROLL NO: {this.state.r6}
            <input type="file" name="" id="" style={this.file} />
          </label>
        </form>
      </>
    );
  }
}

export default Gd;
