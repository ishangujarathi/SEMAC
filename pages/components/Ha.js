import React, { Component } from 'react';
import styles from '../../styles/collab-components.module.css';
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

  haSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state.groupNumber);
    const formdata = new FormData();

    formdata.append('groupNumber', this.state.groupNumber);
    formdata.append('blogLink', this.state.blogLink);
    formdata.append('filename', this.state.filename);
    formdata.append('file', this.state.file.file);

    await axios
      .post('/api/collab/ha', formdata, {
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
