import React, { Component } from 'react';

export class Gd extends Component {
  state = {
    file1: {},
    file2: {},
    file3: {},
    file4: {},
    file5: {},
    file6: {},
    r1: this.props.r1,
    r2: this.props.r2,
    r3: this.props.r3,
    r4: this.props.r4,
    r5: this.props.r5,
    r6: this.props.r6,
  };

  // Event Handlers

  handleImageChange = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ timetable: { name, file }, filename: name });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('file', this.state.timetable.file);
    formdata.append('division', this.state.division);
    formdata.append('filename', this.state.filename);

    axios
      .post('/api/Timetable/timetable', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        toast.success(response.data.message);
        console.log(`Response is: ${response.data.message}`);
      })
      .catch((error) => {
        toast.error(`Error Connecting the server`);
        console.log(error);
      });
  };

  // Styles Section

  mystyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContents: 'center',
    position: 'relative',
    left: '5.2%',
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

  submit = {
    width: '30%',
    padding: '0.2vw',
    fontSize: '1.7vw',
    borderRadius: '1vw',
    border: 'none',
    backgroundColor: 'aqua',
    position: 'relative',
    left: '-9%',
    top: '3%',
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
          <input type="submit" value="SUBMIT" style={this.submit} />
        </form>
      </>
    );
  }
}

export default Gd;
