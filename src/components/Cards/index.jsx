// Fonction qui crée le composant Cards

import datas from "../../Data/Data";
import "./cards.scss";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/accommodation/${id}`);
  };
  return (
    <div className="cards">
      {datas.map((card) => (
        <article
          className="card"
          key={card.id}
          id="{card.id}"
          onClick={() => handleClick(card.id)}
        >
          <img
            src={card.cover}
            alt={`Vue sur l'interieur de ${card.title}`}
            className="card__img"
          />
          <h3 className="card__title">{card.title}</h3>
        </article>
      ))}
    </div>
  );
}

export default Cards;
