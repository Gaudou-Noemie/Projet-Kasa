// Création de la fonction qui affiche les informations du logement
import Collapse from "../Collapse";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel";
import Title from "../Title";
import "../Title/title.scss";
import datas from "../../Data/Data";
import "./fullcard.scss";
import "../Collapse/collapse.scss";
import Tags from "../Tags";
import Host from "../Host";

function FullCard() {
  const { id } = useParams();
  const logement = datas.find((data) => data.id === id);
  const titre = datas.find((title) => title.id === id);
  const localisation = datas.find((location) => location.id === id);
  const hashtag = datas.find((tags) => tags.id === id);
  const proprietaire = logement.host.name;
  const photo = logement.host.picture;

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <div className="fullcard">
        <div className="fullcard__titre">
          <Title title={titre.title} location={localisation.location} />
          <Tags tags={hashtag.tags} />
        </div>
        <Host name={proprietaire} picture={photo} />
      </div>
      <div className="collapse__detail">
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
