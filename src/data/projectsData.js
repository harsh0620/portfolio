import five from "../assets/svg/projects/five.svg";
import devGarage from "../assets/png/devGarage.png";
import dailyLogger from "../assets/png/dailylogger.png";
import quizApp from "../assets/png/quizApp.png";
import election from "../assets/png/Election.png";

export const projectsData = [
  {
    id: 1,
    projectName: "DevGarage",
    projectDesc:
      "This project aims to combine productivity tools and one place",
    tags: ["EJS", "NodeJs", "Mongodb"],
    code: "https://github.com/harsh0620/dev_garage",
    demo: "https://gentle-citadel-10486.herokuapp.com/",
    image: devGarage,
  },
  {
    id: 2,
    projectName: "OpentDB Quiz",
    projectDesc:
      "This project is a railway tracking system that allows users to obtain relevant information about train timing.",
    tags: ["React", "CSS", "Materail UI"],
    code: "https://github.com/harsh0620/triviaquiz",
    demo: "https://opentdb-triviaquiz.herokuapp.com/",
    image: quizApp,
  },
  {
    id: 3,
    projectName: "Daily Logger",
    projectDesc: "Log your day by maintaining data of different constraints",
    tags: ["React", "CSS", "Material Ui", "Firebase"],
    code: "https://github.com/harsh0620/DailyLog",
    demo: "https://dailylog-a074e.web.app/",
    image: dailyLogger,
  },
  {
    id: 4,
    projectName: "Ethereum Election",
    projectDesc:
      "This project involves the development of an Election conducting application using Ethereum BlockChain",
    tags: ["Ethereum", "Solidity", "Truffle"],
    code: "https://github.com/harsh0620/Ethereum_Election",
    demo: "https://github.com/harsh0620/Ethereum_Election",
    image: election,
  },
  {
    id: 5,
    projectName: "E-Commerce App",
    projectDesc: "A Simple E-commerce application",
    tags: ["React Native", "Firebase"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: five,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
