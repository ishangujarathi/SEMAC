import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Content from './Content';
import Header from './components/Header';
import LeftNavbar from './components/LeftNavbar';
import pro from '../public/pro.ico';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create dashboard</title>
        <meta name="description" content="Created by ..." />
        <link rel="icon" href={pro} />
      </Head>
      <div className={styles.container}>
        <SessionProvider>
          <Header />
          <Content />
        </SessionProvider>
      </div>
    </div>
  );
}
