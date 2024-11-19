// Création du composant collapse

import { useState } from "react";
import "./collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span
          className={`collapse__arrow ${isOpen ? "collapse__arrow--open" : ""}`}
        >
          <i className="fa-solid fa-chevron-up collapse__icon"></i>
        </span>
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}

export default Collapse;
