// Création du composant Header
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.scss";

function Header() {
  return (
    <header className="header container">
      <img src={Logo} alt="Logo de la société Kasa" />
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link active-link" : "header__link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link active-link" : "header__link"
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
