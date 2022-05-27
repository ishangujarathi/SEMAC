import React, { Component } from 'react';
import styles from '../../styles/collab-components.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export class Gs extends Component {
  state = {
    file: {},
    filename: '',
    groupNumber: this.props.groupNumber,
  };

  // Event Handlers

  handleImageChange = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file: { name, file }, filename: name });
  };

  gsSubmitHandler = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('groupNumber', this.state.groupNumber);
    formdata.append('filename', this.state.filename);
    formdata.append('file', this.state.file.file);

    await axios
      .post('/api/collab/gs', formdata, {
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
        <h1 className={styles.head}>UPLOAD YOUR CONTENT FOR GS</h1>
        <form onSubmit={this.gsSubmitHandler} className={styles.mystyle}>
          <label className={styles.label}>
            PLEASE SUBMIT YOUR GROUP PPT
            <input
              type="file"
              accept=".pptx"
              required
              name="file"
              onChange={this.handleImageChange}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pptx');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.file}
            />
          </label>
          <input type="submit" value="SUBMIT" className={styles.submit} />
        </form>
      </>
    );
  }
}

export default Gs;
