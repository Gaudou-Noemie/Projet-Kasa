import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.scss";

function Header() {
  return (
    <div id="header">
      <img src={Logo} alt="Logo de la société Kasa" />
      <nav className="header__link">
        <NavLink className="header__link" to="/" activeClassName="active-link">
          Accueil
        </NavLink>
        <NavLink
          className="header__link"
          to="/about"
          activeClassName="active-link"
        >
          A propos
        </NavLink>
      </nav>
    </div>
  );
}
export default Header;
