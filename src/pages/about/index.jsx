import React from "react";
import AboutImg from "../../assets/img-about.png";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <img src={AboutImg} alt="Vue de la montagne." className="about__img" />
    </div>
  );
}

export default About;
