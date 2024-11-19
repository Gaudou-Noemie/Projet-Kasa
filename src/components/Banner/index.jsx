import React from "react";
import "./banner.scss";

function Banner({ image, text, brightness }) {
  if (brightness) {
    brightness = "brightness(60%)";
  } else {
    brightness = "none";
  }

  return (
    <div className="banner">
      <img
        src={image}
        alt="Vue sur la mer avec une partie de la plage."
        className="banner__img"
        style={{ filter: brightness }}
      />
      {text && <div className="banner__text">{text}</div>}
    </div>
  );
}
export default Banner;
