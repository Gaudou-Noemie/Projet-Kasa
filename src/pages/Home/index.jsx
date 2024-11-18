import React from "react";
import HomeImg from "../../assets/img-accueil.png";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <img
        src={HomeImg}
        alt="Vue sur la mer avec une partie de la plage."
        className="home__img"
      />
      <div className="home__text">Chez vous, partout et ailleurs</div>
    </div>
  );
}
export default Home;
