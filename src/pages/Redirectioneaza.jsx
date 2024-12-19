import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Redirectioneaza.css";
import ChatBot from "../components/ChatBot";
import RedirectioneazaPF from "../components/RedirectioneazaPF";
import RedirectioneazaPJ from "../components/RedirectioneazaPJ";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import p1 from "../images/charityimg.webp";

const Redirectioneaza = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#up") {
      const element = document.getElementById("up");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div>
      <Navigation />
      <main>
        <div
          id="up"
          className="upper-side"
          style={{ backgroundImage: `url(${p1})` }}
        >
          <h2 className="misiune-viziune">Redirectionează</h2>
        </div>
        <div className="donation-form-container" id="donation-form-container">
          {/* Afișăm butoanele doar dacă nu s-a selectat nicio componentă */}
          {!selectedComponent && (
            <>
              <button
                onClick={() => setSelectedComponent("PF")}
                className="butoane-select"
              >
                Redirecționează 3.5% din impozitul pe venit <br /> (Persoane
                Fizice)
              </button>
              <button
                onClick={() => setSelectedComponent("PJ")}
                className="butoane-select"
              >
                Redirecționează 20% din impozitul pe profit <br /> (Persoane
                Juridice)
              </button>
            </>
          )}

          {/* Afișarea componentei corespunzătoare */}
          {selectedComponent === "PF" && <RedirectioneazaPF />}
          {selectedComponent === "PJ" && <RedirectioneazaPJ />}
        </div>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Redirectioneaza;
