import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Header from './components/common/Header';
import LeftNavbar from './components/common/LeftNavbar';

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
