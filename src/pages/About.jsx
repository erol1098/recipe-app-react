import React from "react";
import StyledAboutMe from "../components/UI/About.styled";
import avatar from "../assets/avatar.png";
const About = () => {
  return (
    <StyledAboutMe>
      <div>
        <img src={avatar} alt="" />
      </div>
      <h2>Hey, I'm Batman</h2>
      <h3>I'm Front-End Developer</h3>
    </StyledAboutMe>
  );
};

export default About;
