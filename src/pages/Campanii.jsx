import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Campanii.css";
import ChatBot from "../components/ChatBot";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import poza1 from "../images/poza-hoh.webp";

const Campanii = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#up") {
      const element = document.getElementById("up");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Navigation />
      <main>
        <div
          id="up"
          className="upper-side"
          style={{ backgroundImage: `url(${poza1})` }}
        >
          <h2 className="misiune-viziune">CAMPANII</h2>
        </div>
        <br />
        <p className="p1-campanii">
          <br /> Campaniile noastre sunt mai mult decât simple evenimente, sunt
          momente de solidaritate în care ne unim eforturile pentru a aduce
          ajutor <br /> real și speranță în comunități. Fiecare campanie
          organizată are scopul de a aduna resurse, de a atrage atenția asupra
          problemelor din jurul <br /> nostru și de a inspira cât mai mulți
          oameni să ni se alăture în misiunea de a face bine. Cu sprijinul
          donatorilor, al partenerilor și al <br /> voluntarilor noștri, facem
          posibilă o schimbare pozitivă, una care ajunge acolo unde e cea mai
          mare nevoie. <br />
          <br /> Iată câteva dintre campaniile și evenimentele pe care le
          organizăm pentru a sprijini comunitățile aflate în dificultate:
        </p>
        <div className="cards-container">
          <div className="card">
            <h3 className="card-title">Seara Voluntarilor</h3>
            <img
              src="pictures/campanii1.png"
              alt="Seara Voluntarilor"
              className="card-image"
            />

            <p className="card-description">
              Un eveniment special dedicat voluntarilor noștri extraordinari,
              seara voluntarilor este ocazia de a-i celebra pe cei care fac
              totul posibil. În această seară, aducem împreună voluntarii din
              toată țara, recunoaștem meritele fiecăruia și împărtășim povești
              de succes și lecții valoroase. Este o seară de socializare,
              inspirație și bucurie, unde fiecare voluntar este apreciat pentru
              contribuția sa.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">
              Campania „Mâinile Unite pentru Speranță”
            </h3>
            <img
              src="pictures/campanii2.png"
              alt="Seara Voluntarilor 2"
              className="card-image"
            />

            <p className="card-description">
              O campanie amplă de strângere de fonduri și resurse materiale,
              desfășurată în mod regulat pentru a sprijini persoanele afectate
              de dezastre naturale, situații de criză și dificultăți sociale.
              Prin donații de alimente, haine și fonduri, reușim să ajungem
              rapid la cei care au cea mai mare nevoie de ajutor.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">
              Ziua Porților Deschise la Hands on Hope
            </h3>
            <img
              src="pictures/campanii3.png"
              alt="Seara Voluntarilor 3"
              className="card-image"
            />

            <p className="card-description">
              În fiecare an, deschidem porțile centrelor noastre pentru o zi în
              care comunitatea poate veni să descopere cum funcționează
              organizația noastră, cum se desfășoară activitățile de ajutorare
              și care sunt proiectele în curs. Este o ocazie minunată de a
              atrage noi voluntari și de a demonstra impactul pe care îl avem
              împreună
            </p>
          </div>
          <div className="card">
            <div className="card-title">Maratonul Speranței</div>
            <img
              src="pictures/campanii4.png"
              alt="Seara Voluntarilor 4"
              className="card-image"
            />
            <p className="card-description">
              Organizăm un maraton anual pentru a strânge fonduri destinate
              programelor de ajutor și susținere pentru persoanele în
              dificultate. Participanții se alătură alergării pentru a sprijini
              o cauză nobilă, iar fondurile strânse sunt utilizate pentru
              proiectele noastre de asistență și intervenție de urgență.
            </p>
          </div>

          <div className="card">
            <div className="card-title">
              Târg de Crăciun pentru Sprijin Social
            </div>
            <img
              src="pictures/campanii5.png"
              alt="Seara Voluntarilor 5"
              className="card-image"
            />
            <p className="card-description">
              Un târg de Crăciun dedicat strângerii de fonduri și resurse pentru
              cei care au nevoie de ajutor în sezonul rece. Vizitatorii pot
              achiziționa produse artizanale realizate de voluntarii și
              beneficiarii noștri, iar veniturile sunt direcționate spre
              proiectele de sprijin ale organizației.{" "}
            </p>
          </div>
        </div>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Campanii;
