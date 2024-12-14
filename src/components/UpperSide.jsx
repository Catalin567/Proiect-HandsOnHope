import React, { useState, useEffect } from "react";
import "../styles/UpperSide.css";
import poza1 from "../images/hands.png";
import poza2 from "../images/mp-hoh13.jpg";
import poza3 from "../images/mp-hoh9.jpg";
import { Link } from "react-router-dom";

function UpperSide() {
  const images = [
    {
      src: poza1,
      title: "Ajută un copil în nevoie",
      description: "Fiecare secundă contează pentru a face diferența!",
    },
    {
      src: poza2,
      title: "Susține comunitatea",
      description: "O mică donație poate schimba o viață!",
    },
    {
      src: poza3,
      title: "Donează speranță",
      description: "Împreună putem crea un viitor mai bun!",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <section className="cazuri-urgente-container" id="up">
      <div
        className={`upper-side-cazuri-urgente ${fade ? "fade-in" : "fade-out"}`}
        style={{ backgroundImage: `url(${currentImage.src})` }}
      >
        <div className="cazuri-text">
          <h1>{currentImage.title}</h1>
          <p>{currentImage.description}</p>
          <div className="button-container">
            <button className="btn-donate">
              <Link to="/Doneaza#up">DONEAZĂ</Link>
            </button>
            <button className="btn-volunteer">
              <Link to="/Voluntariat">DEVINO VOLUNTAR</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpperSide;
