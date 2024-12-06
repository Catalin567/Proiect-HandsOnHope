import { useState, useRef } from "react";
import "../styles/MonthlyPhotos.css";
import logo from "../images/LOGO-HOH.png";
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

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="monthly-photos">
      <h2>Pozele lunii</h2>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div className="carousel-track">
          {photos.map((photo, index) => (
            <div className="post">
              <div className="post-header">
                <img src={logo} alt="Profile" className="profile-pic" />
                <span className="username">
                  <a href="https://www.instagram.com" className="insta">
                    handsonhope_
                  </a>
                </span>
              </div>
              <div className="post-image">
                <img src={photo} alt={`Slide ${index}`} />
              </div>
              <div className="post-actions">
                <div className="actions-left">
                  <i className="bx bx-heart"></i>
                  <i className="bx bx-message-rounded"></i>
                  <i className="bx bx-send"></i>
                </div>
                <i className="bx bx-bookmark"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonthlyPhotos;
