// Création de la page A Propos

import React from "react";
import AboutImg from "../../assets/img-about.png";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import aboutList from "../../Data/About";

function About() {
  return (
    <div>
      <Banner image={AboutImg} />

      {aboutList.map((about, index) => (
        <Collapse key={index} title={about.title}>
          <p>{about.content}</p>
        </Collapse>
      ))}
    </div>
  );
}

export default About;
