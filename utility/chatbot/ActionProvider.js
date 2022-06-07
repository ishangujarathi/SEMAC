// import { getProgrammingJoke } from 'random-joke-getter';

const intro =
  "I'm a Computer Science student at UCLA. I'm a software engineer focused on fullstack development. What do you want to know about me?";
const experience =
  "I have worked as Software Engineer intern in Done. and TechFin.AI. I'm going to be a SWE intern at Paramount this summer.";
const projects =
  "I'm love spotting problems from people around me and building solutions that make their lives easier. My recent projects are BruinEats, OnCampus, and VMAWalk.";
const skills =
  "I'm a MERN stack lover. I'm also skilled in Vue, Django, and Firebase. I'm learning about Typescript, GraphQL, and Gatsby.";
const blogs = 'Check out my blogs on Dev Community and Medium!';
const faq1 ='The website is an one-stop solution to cater all the needs of students. It has multiple functionalities and all the college regarding assesments and details.';
const faq2 = 'You will be accessible to many mandatory features and options and would also get accesible to many other features.'
const faq3 = 'You will be accessible to various features like attendance tracker, performance analyses, your group will be able to view marks and many more'
const faq4 = 'You will be able to view your attenadance for particular week, month and year.'
const faq5 = 'Once the teacher allots marks for your group for all the type of assesments, you then will be able to view your marks under the performance section.'
const faq6 = 'Yes, -2 is basically 2 floors below the Ground Floor. There you can practise for any of the upcoming competitions'
const faq7 = 'There is one main canteen where you will get many good quality food options and along with it Our college also has New Poona Bakery within the campus, where a variety of delicious and healthy food items are available.'
const faq8 = 'Our college has many clubs of which you can be a part of and learn various things. The technical clubs of the college are CSI,MLSC,Technocrats,GedIT,IEEE'
const faq9 = 'Along with technical, our college also has many non-technical clubs like Diva, Zephyr, Ekasutram' 

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      'AI chat in development...'
    );
    this.updateChatbotState(greetingMessage);
  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: 'personalOptions',
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    const jokeData = await (
      await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    ).json();
    const message = this.createChatBotMessage(
      `Let me tell you a joke: ${jokeData.joke}`,
      {
        widget: 'jokeOptions',
      }
    );
    this.updateChatbotState(message);
  }

  async handleBadMoodAgain() {
    const jokeData = await (
      await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    ).json();
    const message = this.createChatBotMessage(
      `Here's another one: ${jokeData.joke}`,
      {
        widget: 'jokeOptions',
      }
    );
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `Glad you're happy! Let me do a quick self intro: ${intro}`,
      { widget: 'personalOptions' }
    );
    this.updateChatbotState(message);
  }

  handleExperience() {
    const message = this.createChatBotMessage(experience, {
      widget: 'experienceOptions',
    });
    this.updateChatbotState(message);
  }

  handleProjects() {
    const message = this.createChatBotMessage(projects, {
      widget: 'projectsOptions',
    });
    this.updateChatbotState(message);
  }

  handleFAQ1() {
    const message = this.createChatBotMessage(FAQ1, {
      widget: 'faqOptions1',
    });
    this.updateChatbotState(message);
  }

  handleFAQ2() {
    const message = this.createChatBotMessage(FAQ2, {
      widget: 'faqOptions2',
    });
    this.updateChatbotState(message);
  }

  handleFAQ3() {
    const message = this.createChatBotMessage(FAQ3, {
      widget: 'faqOptions3',
    });
    this.updateChatbotState(message);
  }
  handleFAQ4() {
    const message = this.createChatBotMessage(FAQ4, {
      widget: 'faqOptions4',
    });
    this.updateChatbotState(message);
  }
  handleFAQ5() {
    const message = this.createChatBotMessage(FAQ5, {
      widget: 'faqOptions5',
    });
    this.updateChatbotState(message);
  }
  handleFAQ6() {
    const message = this.createChatBotMessage(FAQ6, {
      widget: 'faqOptions6',
    });
    this.updateChatbotState(message);
  }
  handleFAQ7() {
    const message = this.createChatBotMessage(FAQ7, {
      widget: 'faqOptions7',
    });
    this.updateChatbotState(message);
  }
  handleFAQ8() {
    const message = this.createChatBotMessage(FAQ8, {
      widget: 'faqOptions8',
    });
    this.updateChatbotState(message);
  }
  handleFAQ9() {
    const message = this.createChatBotMessage(FAQ9, {
      widget: 'faqOptions9',
    });
    this.updateChatbotState(message);
  }
  handleSkills() {
    const message = this.createChatBotMessage(skills, {
      widget: 'skillsOptions',
    });
    this.updateChatbotState(message);
  }

  handleBlogs() {
    const message = this.createChatBotMessage(blogs, {
      widget: 'blogsOptions',
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
