// Fonction qui crée un composant FullCard
import Collapse from "../Collapse";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../Carousel";
import Title from "../Title";
import "../Title/title.scss";
import datas from "../../Data/Data";
import "./fullcard.scss";
import "../Collapse/collapse.scss";
import Tags from "../Tags";
import Host from "../Host";
import Rating from "../Rating";

function FullCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = datas.find((item) => item.id === id);

  useEffect(() => {
    if (!card) {
      navigate("/error");
    }
  }, [card, navigate]);

  if (card) {
    const logement = datas.find((data) => data.id === id);
    const titre = datas.find((title) => title.id === id);
    const localisation = datas.find((location) => location.id === id);
    const hashtag = datas.find((tags) => tags.id === id);
    const proprietaire = logement.host.name;
    const photo = logement.host.picture;
    const rating = logement.rating;

    return (
      <div>
        <Carousel pictures={logement.pictures} />
        <div className="fullcard">
          <div className="fullcard__titre">
            <Title title={titre.title} location={localisation.location} />
            <Tags tags={hashtag.tags} />
          </div>
          <div className="fullcard__info">
            <Host name={proprietaire} picture={photo} />
            <Rating rating={rating} />
          </div>
        </div>
        <div className="collapse__detail">
          <Collapse className="collapse__desc" title="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse className="collapse__equi" title="Équipements">
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
  return null;
}

export default FullCard;
