// Fonction qui crée un composant Rating
import StarActive from "../../assets/star-active.png";
import StarInactive from "../../assets/star-inactive.png";
import "./rating.scss";

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];
  const starActive = (
    <img
      src={StarActive}
      alt="Étoile de couleur Orange"
      className="rating__img"
    />
  );
  const starInactive = (
    <img
      src={StarInactive}
      alt="Étoile de couleur Grise"
      className="rating__img"
    />
  );

  return (
    <div className="starDiv">
      {range.map((starElement) =>
        rating >= starElement ? (
          <span key={starElement.toString()}>{starActive}</span>
        ) : (
          <span key={starElement.toString()}>{starInactive}</span>
        )
      )}
    </div>
  );
}

export default Rating;
