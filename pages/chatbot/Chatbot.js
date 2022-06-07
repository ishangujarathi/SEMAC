import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import WebBot from './WebBot';
import MobileBot from './MobileBot';

const Chatbot = () => {
  const { width } = useWindowSize();
  return <>{width > 640 ? <WebBot /> : <MobileBot />}</>;
};

export default Chatbot;
