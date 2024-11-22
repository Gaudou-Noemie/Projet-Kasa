// Fonction qui crée le composant Footer

import Footerlogo from "../../assets/logo-footer.png";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={Footerlogo}
        alt="Pied de page avec logo"
        className="footer__img"
      />
      <p className="footer__p">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
