import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../pages/components/chatbot/molecules/Options';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Nice',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'I am sad',
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const getFaqOptions = (actionProvider) => {
  return [
    {
      text: 'Why should I visit this website?',
      handler: () => actionProvider.handleFAQ1(),
      id: 1,
    },
    {
      text: 'Whats in it for me?',
      handler: () => actionProvider.handleFAQ2(),
      id: 2,
    },
    {
      text: 'Tell me features that I can benefit from..',
      handler: () => actionProvider.handleFAQ3(),
      id: 3,
    },
    {
      text: 'What is attendance tracker?',
      handler: () => actionProvider.handleFAQ4(),
      id: 4,
    },
    {
      text: 'How can I view my marksheet?',
      handler: () => actionProvider.handleFAQ5(),
      id: 5,
    },
    {
      text: 'Do you know about -2?',
      handler: () => actionProvider.handleFAQ6(),
      id: 6,
    },
    {
      text: 'Tell me about canteens in college',
      handler: () => actionProvider.handleFAQ7(),
      id: 7,
    },
    {
      text: 'Which are some technical clubs?',
      handler: () => actionProvider.handleFAQ8(),
      id: 8,
    },
    {
      text: 'Which are some non-technical clubs?',
      handler: () => actionProvider.handleFAQ9(),
      id: 9,
    },
  ];
};

const getJokeOptions = (actionProvider) => {
  return [
    {
      text: "LOL that's funny",
      handler: () => actionProvider.handleGoodMoodFinally(),
      id: 1,
    },
    {
      text: 'Tell me another one',
      handler: () => actionProvider.handleBadMoodAgain(),
      id: 2,
    },
  ];
};

const config = {
  botName: 'Vishwa Bot',
  initialMessages: [
    createChatBotMessage("Hi, I'm VishwaBot. Nice to meet you! I How are you doing today?", {
      widget: 'moodOptions',
    }),
  ],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#147efb',
  //   },
  //   chatButton: {
  //     backgroundColor: '#147efb',
  //   },
  // },
  widgets: [
    {
      widgetName: 'moodOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'faqOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getFaqOptions} />
      ),
    },
  ],
};

export default config;
