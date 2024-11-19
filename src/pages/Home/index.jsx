import React from "react";
import HomeImg from "../../assets/img-accueil.png";
import Banner from "../../components/Banner";

function Home() {
  return (
    <Banner
      image={HomeImg}
      brightness={true}
      text="Chez vous, partout et ailleurs"
    />
  );
}
export default Home;
