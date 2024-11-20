// Création de la fonction qui affiche les informations du logement
import Collapse from "../Collapse";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel";
import datas from "../../Data/Data";
import "./fullcard.scss";

function FullCard() {
  const { id } = useParams();
  const logement = datas.find((data) => data.id === id);
  const titre = datas.find((title) => title.id === id);
  const localisation = datas.find((location) => location.id === id);

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <h2>{titre.title}</h2>
      <h3>{localisation.location}</h3>

      <div className="collapse">
        <Collapse className="collapse__desc" title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse className="collapse__equi" title="Equipements">
          <ul>
            {logement.equipments.map((equipments, index) => (
              <li key={index}>{equipments}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default FullCard;
