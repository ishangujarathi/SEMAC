import React, { Component } from 'react';
import styles from '../../styles/collab-components.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export class Edip extends Component {
  state = {
    file: {},
    filename: '',
    groupNumber: this.props.groupNumber,
    reportLink: '',
  };

  handleChange = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value });

  handleImageChange = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file: { name, file }, filename: name });
  };

  ediSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state.groupNumber);
    const formdata = new FormData();

    formdata.append('groupNumber', this.state.groupNumber);
    formdata.append('reportLink', this.state.reportLink);
    formdata.append('filename', this.state.filename);
    formdata.append('file', this.state.file.file);

    await axios
      .post('/api/collab/edai', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(`Error Connecting the server`);
      });
  };
  render() {
    return (
      <>
        <h1 className={styles.head}>UPLOAD YOUR CONTENT FOR EDAI</h1>
        <form onSubmit={this.ediSubmitHandler} className={styles.hastyle}>
          <label className={styles.label}>
            ENTER REPO LINK OF YOUR PROJECT:
            <input type="text" name="reportLink" onChange={this.handleChange} />
          </label>
          <label className={styles.label}>
            UPLOAD PROJECT REPORT:
            <input
              type="file"
              accept=".pdf"
              name="file"
              onChange={this.handleImageChange}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pdf');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.file}
            />
          </label>
          <input type="submit" value="SUBMIT" className={styles.hasubmit} />
        </form>
      </>
    );
  }
}

export default Edip;
