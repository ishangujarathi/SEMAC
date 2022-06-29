const intro =
  'I am happy to see you in good mood, there are a few FAQs which most people get when they visit me!';
const faq1 =
  'The website is an one-stop solution to cater all the needs of students. It has multiple functionalities and all the college regarding assesments and details.';
const faq2 =
  'You will be accessible to many mandatory features and options and would also get accesible to many other features.';
const faq3 =
  'You will be accessible to various features like attendance tracker, performance analyses, your group will be able to view marks and many more';
const faq4 = 'You will be able to view your attenadance for particular week, month and year.';
const faq5 =
  'Once the teacher allots marks for your group for all the type of assesments, you then will be able to view your marks under the performance section.';
const faq6 =
  'Yes, -2 is basically 2 floors below the Ground Floor. There you can practise for any of the upcoming competitions';
const faq7 =
  'There is one main canteen where you will get many good quality food options and along with it Our college also has New Poona Bakery within the campus, where a variety of delicious and healthy food items are available.';
const faq8 =
  'Our college has many clubs of which you can be a part of and learn various things. The technical clubs of the college are CSI,MLSC,Technocrats,GedIT,IEEE';
const faq9 =
  'Along with technical, our college also has many non-technical clubs like Diva, Zephyr, Ekasutram';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('AI chat in development...');
    this.updateChatbotState(greetingMessage);
  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    const jokeData = await (await fetch('https://v2.jokeapi.dev/joke/Any?type=single')).json();
    const message = this.createChatBotMessage(`Let me tell you a joke: ${jokeData.joke}`, {
      widget: 'jokeOptions',
    });
    this.updateChatbotState(message);
  }

  async handleBadMoodAgain() {
    const jokeData = await (await fetch('https://v2.jokeapi.dev/joke/Any?type=single')).json();
    const message = this.createChatBotMessage(`Here's another one: ${jokeData.joke}`, {
      widget: 'jokeOptions',
    });
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `${intro}`,
      { widget: 'faqOptions' }
    );
    this.updateChatbotState(message);
  }

  handleFAQ1() {
    const message = this.createChatBotMessage(faq1, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  handleFAQ2() {
    const message = this.createChatBotMessage(faq2, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  handleFAQ3() {
    const message = this.createChatBotMessage(faq3, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ4() {
    const message = this.createChatBotMessage(faq4, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ5() {
    const message = this.createChatBotMessage(faq5, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ6() {
    const message = this.createChatBotMessage(faq6, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ7() {
    const message = this.createChatBotMessage(faq7, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ8() {
    const message = this.createChatBotMessage(faq8, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ9() {
    const message = this.createChatBotMessage(faq9, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
