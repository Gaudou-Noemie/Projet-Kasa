import React from "react";
import AboutImg from "../../assets/img-about.png";

function About() {
  return (
    <div>
      <h1>A propos</h1>
      <img src={AboutImg} alt="Vue de la montagne." />
      <p> Ceci est la page a Propos</p>
    </div>
  );
}

export default About;
