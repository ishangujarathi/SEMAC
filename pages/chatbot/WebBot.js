import styles from '../../styles/bot.module.css';
import config from '../../utility/chatbot/config';
import ActionProvider from '../../utility/chatbot/ActionProvider';
import MessageParser from '../../utility/chatbot/MessageParser';
import Chatbot from 'react-chatbot-kit';

const WebBot = () => {
  return (
    <section className={styles.cont}>
      <Chatbot
        className={styles}
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </section>
  );
};

export default WebBot;
