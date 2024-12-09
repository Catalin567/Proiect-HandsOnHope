import React from "react";
import "../styles/Redirectioneaza.css";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function RedirectioneazaPJ() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne comportamentul default al formularului
    alert("Formularul a fost înregistrat cu succes!");
  };
  const sigCanvas = useRef(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
  };
  return (
    <div className="container-to-animate">
          <h1>Redirecționează 20% din impozitul pe profit și schimbă vieți!</h1>
          <p>
            Cu gesturi mici, putem face lucruri mari. Alege să sprijini
            persoanele aflate în nevoie redirecționând o parte din impozitul pe
            profit, fără costuri suplimentare pentru tine! Astfel, ne poți ajuta
            să continuăm misiunea noastră de a oferi ajutor acolo unde este
            nevoie cel mai mult.
          </p>

          <form className="donation-form" onSubmit={handleSubmit}>
            <h2>Date Companie/Societate</h2>
            <div className="form-grid">
              <input type="text" placeholder="Denumire *" required />
              <input
                type="text"
                placeholder="Adresa (Sediul social) *"
                required
              />
              <input
                type="text"
                placeholder="CUI (Cod Unic de Identificare) *"
                required
              />
              <input
                type="text"
                placeholder="Număr Registrul Comerțului *"
                required
              />
              <input type="text" placeholder="Cont bancar *" required />
              <input type="text" placeholder="Banca *" required />
              <input type="text" placeholder="Reprezentant *" required />
              <input type="text" placeholder="Funcție *" required />
              <input type="text" placeholder="Telefon *" required />
              <input type="email" placeholder="Email *" required />
            </div>

            <input
              type="text"
              placeholder="Suma de redirecționat (în lei) *"
              required
              className="full-width"
            />

            <h2>Adresa de corespondență</h2>
            <div className="form-grid-3">
              <input type="text" placeholder="Stradă *" required />
              <input type="text" placeholder="Număr *" required />
              <input type="text" placeholder="Bloc" />
              <input type="text" placeholder="Scara" />
              <input type="text" placeholder="Etaj" />
              <input type="text" placeholder="Apartament" />
              <input type="text" placeholder="Localitate *" required />
              <input type="text" placeholder="Județ/Sector *" required />
              <input type="text" placeholder="Cod poștal *" required />
            </div>

            <div className="checkboxes">
              <label>
                <input type="checkbox" required /> Sunt de acord cu politica de
                confidențialitate a HOM *
              </label>
              <br />
              <label>
                <input type="checkbox" required /> Sunt de acord cu colectarea
                datelor din acest formular *
              </label>
            </div>

            <button type="submit" className="submit-button">
              Trimite Formularul
            </button>
          </form>
        </div>
  );
}

export default RedirectioneazaPJ;