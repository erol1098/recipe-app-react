import React from "react";
import StyledAboutMe from "./About.styled";
import avatar from "../../assets/avatar.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const About = () => {
  return (
    <StyledAboutMe>
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <h2>Hey, I'm Erol</h2>
      <h3>I'm Front-End Developer</h3>
      <div>
        <a
          href="https://www.linkedin.com/in/erol-mahmuto%C4%9Flu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={48} />
        </a>
        <a href="https://github.com/erol1098" target="_blank" rel="noreferrer">
          <FaGithub size={48} />
        </a>
        <a href="mailto:erol1098@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail size={48} />
        </a>
      </div>
    </StyledAboutMe>
  );
};

export default About;
