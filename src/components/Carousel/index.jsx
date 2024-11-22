// Fonction qui crée le composant Carousel
import React, { useState } from "react";
import "./carousel.scss";

function Carousel({ pictures }) {
  const [currenIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currenIndex < pictures.length - 1) {
      setCurrentIndex(currenIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const prevImage = () => {
    if (currenIndex > 0) {
      setCurrentIndex(currenIndex - 1);
    } else {
      setCurrentIndex(pictures.length - 1);
    }
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button className="carousel__prev" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="carousel__slide">
            <img
              src={pictures[currenIndex]}
              alt={`Slide ${currenIndex + 1}`}
              className="carousel__img"
            />
            <div className="carousel__number">
              {currenIndex + 1}/{pictures.length}
            </div>
          </div>
          <button className="carousel__next" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}

      {pictures.length === 1 && (
        <div className="carousel__slide">
          <img
            src={pictures[currenIndex]}
            alt={`Slide ${currenIndex + 1}`}
            className="carousel__img"
          />
        </div>
      )}
    </div>
  );
}

export default Carousel;
