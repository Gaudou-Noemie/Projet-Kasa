// La page Home avec la fonction Home qui retourne la fonction Banner et Cards
import React from "react";
import HomeImg from "../../assets/img-accueil.png";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";

function Home() {
  return (
    <main>
      <Banner
        image={HomeImg}
        brightness={true}
        text="Chez vous, partout et ailleurs"
      />
      <Cards />
    </main>
  );
}
export default Home;
