import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import react from "../assets/svg/skills/react.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import c from "../assets/svg/skills/c.svg";
import cplusplus from "../assets/svg/skills/cplusplus.svg";
import java from "../assets/svg/skills/java.svg";
import git from "../assets/svg/skills/git.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import nodejs from "../assets/svg/skills/nodejs.svg";
import algorithm from "../assets/svg/skills/algorithm.png";
import datastructure from "../assets/svg/skills/datastructure.png";
import problemsolving from "../assets/svg/skills/problem-solving.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "nodejs":
      return nodejs;
    case "problemsolving":
      return problemsolving;
    case "datastructure":
      return datastructure;
    case "algorithm":
      return algorithm;
    case "java":
      return java;
    case "git":
      return git;
    case "materialui":
      return materialui;
    default:
      break;
  }
};
