import React, { Component } from 'react';
import styles from '../../../styles/collab-components.module.css';
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

  gsSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('upload_preset', 'semac007');
    formdata.append('filename_override', `grp-${this.state.groupNumber}-${this.state.filename}`);
    formdata.append('folder', 'gs');
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

  gsSubmitHandler = async (e) => {
    e.preventDefault();

    const body = { groupNumber: this.state.groupNumber, filename: this.state.filename };

    await axios
      .post('/api/collab/gs', body, {
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
        <h1 className={styles.head}>UPLOAD YOUR CONTENT FOR GS</h1>
        <form onSubmit={this.gsSubmitHandler} className={(styles.mystyle, { width: '42vw' })}>
          <label className={styles.label} style={{ fontSize: '1.5vw' }}>
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
            <input
              className={styles.upload}
              style={{ marginLeft: '-5vw' }}
              type="button"
              value="UPLOAD"
              onClick={this.gsSubmit}
            />
          </label>
          <input type="submit" value="SUBMIT" className={styles.gsubmit} />
        </form>
      </>
    );
  }
}

export default Gs;
