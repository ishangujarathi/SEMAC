import axios from 'axios';
import React, { Component } from 'react';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import { toast } from 'react-toastify';
import styles from '../../styles/timetable-updater.module.css';

export class TimetableUpdater extends Component {
  constructor(props) {
    super(props);
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

  ttSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('upload_preset', 'semac007');
    formdata.append('filename_override', `${this.state.filename}`);
    formdata.append('folder', 'timetable');
    formdata.append('file', this.state.timetable.file);

    await fetch(`https://api.cloudinary.com/v1_1/df6hie48w/raw/upload`, {
      method: 'POST',
      body: formdata,
    })
      .then((r) => r.json())
      .catch((error) => {
        console.log(error);
      });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const body = { division: this.state.division, filename: this.state.filename };

    await axios
      .post('/api/timetable/timetable', body, {
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
    const role = this.props.user.role;

    if (role && role === 'Teacher') {
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
            <input
              className={styles.upload}
              style={{ marginLeft: '-4vw' }}
              type="button"
              value="UPLOAD"
              onClick={this.ttSubmit}
            />
            <input type="submit" value="SUBMIT" />
          </form>
        </section>
      );
    }
    return <a href="/api/auth/signin">SIGN IN</a>;
  }
}

export default TimetableUpdater;

export async function getServerSideProps({ req }) {
  // Fetch data from external API

  const session = await getSession({ req });
  const email = session?.user.email;

  const url =
    environment === 'production' ? 'https://semac.vercel.app/api' : 'http://localhost:3000/api';

  const resp = await fetch(`${url}/auth/user/?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const user = await resp.json();

  // Pass data to the page via props
  return { props: { user } };
}
