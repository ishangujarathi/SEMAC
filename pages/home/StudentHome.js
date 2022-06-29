import React from 'react';
import styles from '../../styles/main.module.css';
import { Doughnut, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

//data for bar chart
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Sales/ month',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

function StudentHome({ role, marks, attendance }) {
  if (role && role === 'Student') {
    const { haMarks, gdMarks, gsMarks, edaiMarks, sdpMarks, eseMarks, cvvMarks, mseMarks } =
      marks[0];

    let course_code_1,
      course_code_2,
      course_code_3,
      course_code_4,
      present_1,
      present_2,
      present_3,
      present_4;

    if (attendance) {
      course_code_1 = attendance.students?.attendance[0].course_code;
      course_code_2 = attendance.students?.attendance[1].course_code;
      course_code_3 = attendance.students?.attendance[2].course_code;
      course_code_4 = attendance.students?.attendance[3].course_code;
      present_1 = attendance.students?.attendance[0].present;
      present_2 = attendance.students?.attendance[1].present;
      present_3 = attendance.students?.attendance[2].present;
      present_4 = attendance.students?.attendance[3].present;
    }

    //doughnut chart data set

    const data1 = {
      labels: ['ha', 'gd', 'gs', 'edai', 'sdp', 'ese', 'cvv', 'mse'],
      datasets: [
        {
          data: [haMarks, gdMarks, gsMarks, edaiMarks, sdpMarks, eseMarks, cvvMarks, mseMarks],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    const data2 = {
      labels: [course_code_1, course_code_2, course_code_3, course_code_4],
      datasets: [
        {
          label: 'Attendance Graph',
          data: [present_1, present_2, present_3, present_4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className={styles.contentcontainer}>
        <section>
          <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/timetable/Timetable">
                  <h2>TIMETABLE</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/attendance/AttendanceViewer">
                  <h2>Attendance</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/collab/Collab">
                  <h2>ACADEMICS</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/marks/MarksViewer">
                  <h2>MARKSHEET</h2>
                </a>
              </div>
            </div>
          </div>
          {/* chart started  */}
          <div className={styles.charts}>
            <div className={styles.circle}>
              <h2>Sales</h2>
              <Bar data={data2} />
            </div>
            <div className={styles.circle}>
              <h2>Customers Arrived</h2>
              <Doughnut data={data1} className={styles.nut} />
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
}

export default StudentHome;
