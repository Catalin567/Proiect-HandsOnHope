import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Redirectioneaza.css";
import ChatBot from "../components/ChatBot";
import RedirectioneazaPF from "../components/RedirectioneazaPF";
import RedirectioneazaPJ from "../components/RedirectioneazaPJ";

const Redirectioneaza = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div>
      <Navigation />
      <main>
        <img src="pictures/charityimg.webp" alt="" className="main-img" />
        <div className="donation-form-container" id="donation-form-container">
          {/* Afișăm butoanele doar dacă nu s-a selectat nicio componentă */}
          {!selectedComponent && (
            <>
              <button onClick={() => setSelectedComponent("PF")} className="butoane-select">
                Redirecționează 3.5% din impozitul pe venit <br/> (Persoane Fizice)
              </button>
              <button onClick={() => setSelectedComponent("PJ")} className="butoane-select">
                Redirecționează 20% din impozitul pe profit <br/> (Persoane Juridice)
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
