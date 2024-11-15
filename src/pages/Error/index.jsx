import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../../assets/404.png";

function Error() {
  return (
    <div>
      <img src={ErrorImg} alt="Affiche le nombre 404 en gros et orange " />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
}

export default Error;
