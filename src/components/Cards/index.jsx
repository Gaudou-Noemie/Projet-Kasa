// Création du composant Cards

import datas from "../../Data/Data";
import "./cards.scss";

function Cards() {
  return (
    <div className="cards">
      {datas.map((card) => (
        <article className="card" key={card.id} id="{card.id}">
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
