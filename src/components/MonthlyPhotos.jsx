import { useState } from 'react';
import '../styles/MonthlyPhotos.css';
import mp1 from "../images/mp-hoh1.png";
import mp2 from "../images/mp-hoh2.png";
import mp3 from "../images/mp-hoh3.png";
import mp4 from "../images/mp-hoh4.png";

function MonthlyPhotos() {
  const photos = [mp1, mp2, mp3, mp4, mp1, mp2, mp3, mp4, mp1, mp2, mp3];
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
        <button className="carousel-btn-left" onClick={handlePrev}><i className="bx bxs-chevron-left"></i></button>
        <div className="carousel-track" style={{ transform: `translateX(-${startIndex * 200}px)` }}>
          {photos.map((photo, index) => (
            <div key={index} className="carousel-photo">
              <img src={photo} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-btn-right" onClick={handleNext}><i className="bx bxs-chevron-right"></i></button>
      </div>
    </div>
  );
}

export default MonthlyPhotos;
