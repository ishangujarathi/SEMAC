import React, { Component } from 'react';
import styles from '../../../styles/collab-components.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export class Ha extends Component {
  state = {
    file: {},
    filename: '',
    groupNumber: this.props.groupNumber,
    blogLink: '',
  };

  handleChange = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value });

  handleImageChange = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file: { name, file }, filename: name });
  };

  haSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('upload_preset', 'semac007');
    formdata.append('filename_override', `grp-${this.state.groupNumber}-${this.state.filename}`);
    formdata.append('folder', 'ha');
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

  haSubmitHandler = async (e) => {
    e.preventDefault();

    const body = {
      groupNumber: this.state.groupNumber,
      blogLink: this.state.blogLink,
      filename: this.state.filename,
    };

    await axios
      .post('/api/collab/ha', body, {
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
        <h1 className={styles.head}>UPLOAD YOUR CONTENT FOR HA</h1>
        <form onSubmit={this.haSubmitHandler} className={styles.hastyle}>
          <label className={styles.label}>
            PLEASE SUBMIT YOUR HA Report (SURVEY/CASE-STUDY/DESIGN)
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
            <input
              className={styles.upload}
              style={{ marginLeft: '-5vw' }}
              type="button"
              value="UPLOAD"
              onClick={this.haSubmit}
            />
          </label>
          <br />
          <p>OR</p>
          <br />
          <label className={styles.label}>
            PLEASE ENTER YOUR BLOG LINK
            <input type="text" name="blogLink" onChange={this.handleChange} />
          </label>
          <input type="submit" value="SUBMIT" className={styles.hasubmit} />
        </form>
      </>
    );
  }
}

export default Ha;
