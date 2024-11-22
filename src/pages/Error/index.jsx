// La page Error avec la fonction Error qui retourne une image, un text d'erreur et un lien pour retourner a la page Home
import React from "react";
import { NavLink } from "react-router-dom";
import ErrorImg from "../../assets/404.png";
import ErrorMobile from "../../assets/404-mobile.png";
import "./error.scss";

function Error() {
  return (
    <div className="error">
      <img
        src={ErrorImg}
        alt="Affiche le nombre 404 en gros et orange "
        className="error__img"
      />
      <img
        src={ErrorMobile}
        alt="Affiche le nombre 404 en gros et orange"
        className="error__mobile"
      />

      <p className="error__p">
        Oups! La page que
        <br className="error__leap" /> vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error__link">
        Retourner à la page d'accueil
      </NavLink>
    </div>
  );
}

export default Error;
