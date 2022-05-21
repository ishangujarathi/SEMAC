import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import LeftNavbar from './components/LeftNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <LeftNavbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
