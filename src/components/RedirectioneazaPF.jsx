import React from "react";
import "../styles/Redirectioneaza.css";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function RedirectioneazaPF() {
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
          <h1>Redirecționează 3.5% din impozitul pe venit și schimbă vieți!</h1>
          <p>
            Cu gesturi mici, putem face lucruri mari. Alege să sprijini
            persoanele aflate în nevoie redirecționând o parte din impozitul pe
            venit, fără costuri suplimentare pentru tine! Astfel, ne poți ajuta
            să continuăm misiunea noastră de a oferi ajutor acolo unde este
            nevoie cel mai mult.
          </p>

          <form className="donation-form" onSubmit={handleSubmit}>
            {/* Date Personale */}
            <h2>Date personale</h2>
            <div className="form-grid-3">
              <input type="text" placeholder="Nume *" required />
              <input type="text" placeholder="Prenume *" required />
              <input
                type="text"
                placeholder="Inițiala prenumelui tatălui *"
                required
              />
              <input type="text" placeholder="CNP *" required />
              <input type="text" placeholder="Telefon" />
              <input type="email" placeholder="Email" />
            </div>

            {/* Adresa de domiciliu */}
            <h2>Adresa de domiciliu</h2>
            <div className="form-grid-3">
              <input type="text" placeholder="Stradă *" required />
              <input type="text" placeholder="Numărul *" required />
              <input type="text" placeholder="Bloc" />
              <input type="text" placeholder="Scara" />
              <input type="text" placeholder="Etaj" />
              <input type="text" placeholder="Apartament" />
              <input type="text" placeholder="Localitate *" required />
              <input type="text" placeholder="Județ/Sector *" required />
              <input type="text" placeholder="Cod poștal *" required />
            </div>

            {/* Donație pentru o perioadă */}
            <div className="donation-period">
              <label>Donez pentru o perioadă de:</label>
              <div className="checkboxes-inline">
                <label>
                  <input type="checkbox" /> 1 an
                </label>

                <label>
                  <input type="checkbox" /> 2 ani
                </label>
              </div>
            </div>

            {/* Semnătura */}
            <h2>Semnătura</h2>
            <div className="signature-container">
            <SignatureCanvas
                ref={sigCanvas}
                penColor="green"
                canvasProps={{
                  width: 500,
                  height: 150,
                  className: "signature-canvas",
                }}
              />
              <button
                type="button"
                onClick={clearSignature}
                className="clear-button"
              >
                Șterge Semnătura
              </button>
            </div>

            {/* Politici */}
            <div className="checkboxes">
              <label>
                <input type="checkbox" required /> Sunt de acord cu politica de
                confidențialitate a SNCR *
              </label>
              <br />
              <br />
              <label>
                <input type="checkbox" required /> Sunt de acord cu colectarea
                datelor cu caracter personal și trimiterea acestora către ANAF *
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="submit-button">
              Trimite Formularul
            </button>
          </form>
        </div>
  );
}

export default RedirectioneazaPF;
