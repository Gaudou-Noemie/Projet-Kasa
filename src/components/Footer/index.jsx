import Footerlogo from "../../assets/footer-logo.png";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img
        src={Footerlogo}
        alt="Pied de page avec logo"
        className="footer__img"
      />
    </div>
  );
}

export default Footer;
