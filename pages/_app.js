import { SessionProvider } from 'next-auth/react';
import Header from './components/common/Header';
import LeftNavbar from './components/common/LeftNavbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import '../styles/chatbox.css';

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default MyApp;
