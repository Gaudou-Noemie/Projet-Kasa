// Création de la fonction qui affiche les informations du logement

import { useParams } from "react-router-dom";
import Carousel from "../Carousel";
import datas from "../../Data/Data";

function FullCard() {
  const { id } = useParams();
  const logement = datas.find((data) => data.id === id);

  return <Carousel pictures={logement.pictures} />;
}

export default FullCard;
