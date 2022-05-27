import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import styles from '../../styles/timetable-updater.module.css';

export class TimetableUpdater extends Component {
  constructor() {
    super();
  }

  state = {
    timetable: {},
    division: '',
    filename: '',
  };

  handleChange = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value });

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

    await axios
      .post('/api/timetable/timetable', formdata, {
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
      <section className={styles.cont}>
        <h1>PLEASE UPLOAD THE LATEST TIMETABLE (as jpg)</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            DIVISION: &nbsp;&nbsp;
            <input type="text" required name="division" onChange={this.handleChange} />
          </label>
          <input
            type="file"
            accept=".jpg"
            required
            name="file"
            onChange={this.handleImageChange}
            onInvalid={(e) => {
              e.target.setCustomValidity('Image formats allowed: .jpg');
            }}
            onInput={(e) => {
              e.target.setCustomValidity('');
            }}
          />
          <input type="submit" value="SUBMIT" />
        </form>
      </section>
    );
  }
}

export default TimetableUpdater;
