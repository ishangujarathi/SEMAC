import React, { Component } from 'react';
import styles from '../../../styles/collab-components.module.css';
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

  edaiSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('upload_preset', 'semac007');
    formdata.append('filename_override', `grp-${this.state.groupNumber}-${this.state.filename}`);
    formdata.append('folder', 'edai');
    formdata.append('file', this.state.file.file);

    await fetch(`https://api.cloudinary.com/v1_1/df6hie48w/raw/upload`, {
      method: 'POST',
      body: formdata,
    })
      .then((r) => r.json())
      .catch((error) => {
        console.log(error);
      });
  };

  ediSubmitHandler = async (e) => {
    e.preventDefault();

    const body = {
      groupNumber: this.state.groupNumber,
      reportLink: this.state.reportLink,
      filename: this.state.filename,
    };

    await axios
      .post('/api/collab/edai', body, {
        headers: {
          'Content-Type': 'application/json',
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
            />{' '}
            <input
              className={styles.upload}
              style={{ marginLeft: '-4vw' }}
              type="button"
              value="UPLOAD"
              onClick={this.edaiSubmit}
            />
          </label>
          <input type="submit" value="SUBMIT" className={styles.hasubmit} />
        </form>
      </>
    );
  }
}

export default Edip;
