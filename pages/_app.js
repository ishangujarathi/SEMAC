import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Header from './components/Header';
import LeftNavbar from './components/LeftNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <LeftNavbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
