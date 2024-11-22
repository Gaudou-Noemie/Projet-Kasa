// La page A Propos avec la fonction About qui retourne la fonction Banner et Collapse

import React from "react";
import AboutImg from "../../assets/img-about.png";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import aboutList from "../../Data/About";
import "./about.scss";

function About() {
  return (
    <div>
      <Banner image={AboutImg} />
      <div className="aboutDiv">
        {aboutList.map((about, index) => (
          <Collapse key={index} title={about.title}>
            <p>{about.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default About;
