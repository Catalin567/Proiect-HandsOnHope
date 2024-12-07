import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import p1 from "../images/mp-hoh9.jpg";
import "../styles/Principii.css";
import p2 from "../images/principiul1.png";
import p3 from "../images/principiul2.png";
import p4 from "../images/principiul3.png";
import p5 from "../images/principiul4.png";
import p6 from "../images/principiul5.png";
import p7 from "../images/principiul6.png";
import p8 from "../images/principiul7.png";
import p9 from "../images/principiul8.png";
import ChatBot from "../components/ChatBot";

function Principii() {
  const principles = [
    {
      img: p2,
      title: "1. Solidaritate și Compasiune",
      text: "Suntem alături de cei aflați în nevoie, oferind sprijin necondiționat și respectând demnitatea fiecărei persoane afectate de dezastre. Ne dorim să creăm o comunitate de oameni care cred în puterea sprijinului reciproc și în importanța empatiei.",
    },
    {
      img: p3,
      title: "2. Transparență și Integritate",
      text: "Ne angajăm să fim transparenți în toate activitățile noastre, de la gestionarea resurselor financiare până la procesele noastre de distribuire a ajutoarelor. Fiecare donație și acțiune este administrată cu grijă și respect.",
    },
    {
      img: p4,
      title: "3. Responsabilitate Socială",
      text: "Ne asumăm responsabilitatea de a susține și proteja comunitățile vulnerabile. Respectăm și promovăm valorile umane fundamentale și dreptul fiecărei persoane la o viață demnă și sigură.",
    },
    {
      img: p5,
      title: "4. Neutralitate și Independență",
      text: "Ne menținem independența față de interesele politice, religioase sau comerciale, concentrându-ne exclusiv pe misiunea noastră de a sprijini victimele calamităților.",
    },
    {
      img: p6,
      title: "5. Eficiență și Profesionalism",
      text: "Asigurăm o utilizare eficientă a tuturor resurselor noastre și promovăm profesionalismul în toate aspectele activității noastre.",
    },
    {
      img: p7,
      title: "6. Sustenabilitate și Recuperare pe Termen Lung",
      text: "Ne dorim să contribuim la redresarea și reziliența comunităților afectate, sprijinindu-le în reconstrucția pe termen lung.",
    },
    {
      img: p8,
      title: "7. Promovarea Voluntariatului și a Implicării Civice",
      text: "Credem în puterea fiecărui individ de a face o diferență. Încurajăm oamenii să se implice activ, fie prin donații, fie prin voluntariat.",
    },
    {
      img: p9,
      title: "8. Inovație în Ajutorarea Comunităților",
      text: "Investim în soluții moderne și eficiente pentru a oferi sprijin adaptat nevoilor actuale. Folosim tehnologia și soluții inovative pentru a răspunde rapid și eficient la nevoile comunităților aflate în criză.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % principles.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + principles.length) % principles.length
    );
  };

  const { img, title, text } = principles[currentIndex];

  return (
    <>
      <div>
        <Navigation />
        <div className="upper-side" style={{ backgroundImage: `url(${p1})` }}>
          <h2>PRINCIPIILE ORGANIZAȚIEI NOASTRE</h2>
        </div>
        <div className="po-1">
          <div>
            <p>
              La Hands On Hope, credem că pentru a crea un impact real și de
              durată în comunități, nu este suficient doar să oferim ajutor —
              trebuie să acționăm cu integritate, compasiune și profesionalism.
            </p>
            <p>
              Aceste principii au fost dezvoltate pentru a răspunde nevoilor tot
              mai mari din comunitățile vulnerabile, dar și pentru a inspira
              încredere în rândul donatorilor și voluntarilor noștri.
            </p>
            <p>
              {" "}
              Prin respectarea acestor valori,{" "}
              <span className="highlight"> Hands On Hope</span> își propune să
              fie mai mult decât o simplă organizație de caritate — să fie un
              partener de încredere, dedicat susținerii oamenilor și
              comunităților în momentele lor cele mai dificile.
            </p>
          </div>
          <div className="principii">
            <h2>PRINCIPII</h2>
            <ul>
              {principles.map((principle, index) => (
                <li key={index}>{principle.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="po-3">
          <div className="principiu">
            <img src={img} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
          <div className="po-3-buttons">
            <button className="po-3-previews-btn" onClick={handlePrev}>
              <i className="bx bxs-chevron-left"></i>
            </button>
            <button className="po-3-next-btn" onClick={handleNext}>
              <i className="bx bxs-chevron-right"></i>
            </button>
          </div>
        </div>
        <ChatBot />
        <Footer />
      </div>
    </>
  );
}

export default Principii;
