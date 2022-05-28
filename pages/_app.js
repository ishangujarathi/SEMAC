import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import Header from './components/common/Header';
import LeftNavbar from './components/common/LeftNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <LeftNavbar />
      <Component {...pageProps} />
      {/* <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      /> */}
    </SessionProvider>
  );
}

export default MyApp;
