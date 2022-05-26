import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import styles from '../styles/timetable-updater.module.css';

export class TimetableUpdater extends Component {
  constructor() {
    super();
  }

  state = {
    timetable: {},
    division: '',
  };

  handleChange = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value });

  handleImageChange = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ timetable: { name, file } });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('file', this.state.timetable.file);
    formdata.append('division', this.state.division);

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
            id="paymentProof"
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
