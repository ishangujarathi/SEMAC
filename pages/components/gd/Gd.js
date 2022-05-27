import React, { Component } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import styles from '../../../styles/collab-components.module.css';

export class Gd extends Component {
  state = {
    file1: {},
    file2: {},
    file3: {},
    file4: {},
    file5: {},
    file6: {},
    filename1: '',
    filename2: '',
    filename3: '',
    filename4: '',
    filename5: '',
    filename6: '',
    r1: this.props.r1,
    r2: this.props.r2,
    r3: this.props.r3,
    r4: this.props.r4,
    r5: this.props.r5,
    r6: this.props.r6,
    groupNumber: this.props.groupNumber,
  };

  // Event Handlers

  handleImageChange1 = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file1: { name, file }, filename1: name });
  };

  handleImageChange2 = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file2: { name, file }, filename2: name });
  };

  handleImageChange3 = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file3: { name, file }, filename3: name });
  };

  handleImageChange4 = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file4: { name, file }, filename4: name });
  };

  handleImageChange5 = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file5: { name, file }, filename5: name });
  };

  handleImageChange6 = async (e) => {
    const file = e.target.files[0];
    const { name } = e.target.files[0];
    await this.setState({ file6: { name, file }, filename6: name });
  };

  gdSubmitHandler = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('r1', this.state.r1);
    formdata.append('r2', this.state.r2);
    formdata.append('r3', this.state.r3);
    formdata.append('r4', this.state.r4);
    formdata.append('r5', this.state.r5);
    formdata.append('r6', this.state.r6);
    formdata.append('groupNumber', this.state.groupNumber);
    formdata.append('filename1', this.state.filename1);
    formdata.append('filename2', this.state.filename2);
    formdata.append('filename3', this.state.filename3);
    formdata.append('filename4', this.state.filename4);
    formdata.append('filename5', this.state.filename5);
    formdata.append('filename6', this.state.filename6);
    formdata.append('file1', this.state.file1.file);
    formdata.append('file2', this.state.file2.file);
    formdata.append('file3', this.state.file3.file);
    formdata.append('file4', this.state.file4.file);
    formdata.append('file5', this.state.file5.file);
    formdata.append('file6', this.state.file6.file);

    if (
      this.state.filename1.includes(this.state.r1) &&
      this.state.filename2.includes(this.state.r2) &&
      this.state.filename3.includes(this.state.r3) &&
      this.state.filename4.includes(this.state.r4) &&
      this.state.filename5.includes(this.state.r5) &&
      this.state.filename6.includes(this.state.r6)
    ) {
      await axios
        .post('/api/collab/gd', formdata, {
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
    } else {
      toast.error('Please submit files containing your roll number');
    }
  };

  render() {
    return (
      <>
        <h1 className={styles.head}>UPLOAD YOUR CONTENT FOR GD</h1>
        <form onSubmit={this.gdSubmitHandler} className={styles.mystyle}>
          <label className={styles.label}>
            ROLL NO: {this.state.r1}
            <input
              type="file"
              accept=".pdf"
              required
              name="file1"
              onChange={this.handleImageChange1}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pdf');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.file}
            />
          </label>
          <label className={styles.label}>
            ROLL NO: {this.state.r2}
            <input
              type="file"
              accept=".pdf"
              required
              name="file2"
              onChange={this.handleImageChange2}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pdf');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.file}
            />
          </label>
          <label className={styles.label}>
            ROLL NO: {this.state.r3}
            <input
              type="file"
              accept=".pdf"
              required
              name="file3"
              onChange={this.handleImageChange3}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pdf');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.file}
            />
          </label>
          <label className={styles.label}>
            ROLL NO: {this.state.r4}
            <input
              type="file"
              accept=".pdf"
              required
              name="file4"
              onChange={this.handleImageChange4}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pdf');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.file}
            />
          </label>
          <label className={styles.label}>
            ROLL NO: {this.state.r5}
            <input
              type="file"
              accept=".pdf"
              required
              name="file5"
              onChange={this.handleImageChange5}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pdf');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              className={styles.file}
            />
          </label>
          <label className={styles.label}>
            ROLL NO: {this.state.r6}
            <input
              type="file"
              accept=".pdf"
              required
              name="file6"
              onChange={this.handleImageChange6}
              onInvalid={(e) => {
                e.target.setCustomValidity('Image formats allowed: .pdf');
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

export default Gd;
