import styles from '../../styles/bot.module.css';
import config from '../../utility/chatbot/config';
import ActionProvider from '../../utility/chatbot/ActionProvider';
import MessageParser from '../../utility/chatbot/MessageParser';
import Chatbot from 'react-chatbot-kit';
import { Box } from '@mui/system';

const MobileBot = () => {
  return (
    <section className={styles.cont}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          minHeight: '100vh',
          height: '100vh',
        }}
      >
        {/* <MobileHeader /> */}
        <Chatbot
          className={styles}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </Box>
    </section>
  );
};

export default MobileBot;
