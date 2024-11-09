import { useState } from "react";
import "../styles/MonthlyPhotos.css";
import mp1 from "../images/mp-hoh1.png";
import mp2 from "../images/mp-hoh2.png";
import mp3 from "../images/mp-hoh3.png";
import mp4 from "../images/mp-hoh4.png";
import mp5 from "../images/mp-hoh5.jpg";
import mp6 from "../images/mp-hoh6.jpg";
import mp7 from "../images/mp-hoh7.jpg";
import mp8 from "../images/mp-hoh8.jpg";
import mp9 from "../images/mp-hoh9.jpg";
import mp10 from "../images/mp-hoh10.jpg";
import mp11 from "../images/mp-hoh11.jpg";
import mp12 from "../images/mp-hoh12.jpg";

function MonthlyPhotos() {
  const photos = [
    mp1,
    mp2,
    mp3,
    mp4,
    mp5,
    mp6,
    mp7,
    mp8,
    mp9,
    mp10,
    mp11,
    mp12,
  ];
  const itemsPerPage = 8;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= photos.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? photos.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <div className="monthly-photos">
      <h2>Pozele lunii</h2>
      <div className="carousel">
        <button className="carousel-btn-left" onClick={handlePrev}>
          <i className="bx bxs-chevron-left"></i>
        </button>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${startIndex * 200}px)` }}
        >
          {photos.map((photo, index) => (
            <div key={index} className="carousel-photo">
              <img src={photo} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-btn-right" onClick={handleNext}>
          <i className="bx bxs-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default MonthlyPhotos;
