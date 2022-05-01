import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Content from './components/Content';
import Header from './components/Header';
import LeftNavbar from './components/LeftNavbar';
import pro from '../public/pro.ico';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create dashboard</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href={pro} />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header />
        <Content />
      </div>
    </div>
  );
}
