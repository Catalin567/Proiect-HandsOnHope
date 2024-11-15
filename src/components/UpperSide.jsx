import React, { useState, useEffect } from "react";
import "../styles/UpperSide.css";
import "../styles/Navigation.css";
import poza1 from "../images/mp-hoh6.jpg";
import poza2 from "../images/mp-hoh13.jpg";
import poza3 from "../images/mp-hoh9.jpg";

function UpperSide() {
  const images = [poza1, poza2, poza3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`upper-side ${fade ? "fade-in" : "fade-out"}`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="uc-text">CAZURI URGENTE</div>
      <div className="button-container">
        <button className="btn-donate">DONEAZĂ</button>
        <button className="btn-volunteer">DEVINO VOLUNTAR</button>
      </div>
    </div>
  );
}

export default UpperSide;
