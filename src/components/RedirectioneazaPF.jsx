import React from "react";
import "../styles/Redirectioneaza.css";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function RedirectioneazaPF() {
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    nume: formData.get('nume'),
    prenume: formData.get('prenume'),
    initialaPrenumeTata: formData.get('initiala_prenume_tata'),
    cnp: formData.get('cnp'),
    telefon: formData.get('telefon'),
    email: formData.get('email'),
    strada: formData.get('strada'),
    numar: formData.get('numar'),
    bloc: formData.get('bloc'),
    scara: formData.get('scara'),
    etaj: formData.get('etaj'),
    apartament: formData.get('apartament'),
    localitate: formData.get('localitate'),
    judetSector: formData.get('judet_sector'),
    codPostal: formData.get('cod_postal'),
    perioadaDonatie: formData.get('perioada_donatie'),
    semnatura: sigCanvas.current.toDataURL(),
    acordPolitica: formData.get('acord_politica') === 'on',
    acordAnaf: formData.get('acord_anaf') === 'on',
  };

  console.log('Date trimise:', data);

  try {
    const response = await fetch('http://localhost:5000/redirectioneaza', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error('Eroare la trimiterea formularului:', error);
  }
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
            <input type="text" name="nume" placeholder="Nume *" required />
            <input type="text" name="prenume" placeholder="Prenume *" required />
            <input type="text" name="initiala_prenume_tata" placeholder="Inițiala prenumelui tatălui *" required />
            <input type="text" name="cnp" placeholder="CNP *" required />
            <input type="text" name="telefon" placeholder="Telefon" />
            <input type="email" name="email" placeholder="Email" />
            </div>

            {/* Adresa de domiciliu */}
            <h2>Adresa de domiciliu</h2>
            <div className="form-grid-3">
            <input type="text" name="strada" placeholder="Stradă *" required />
            <input type="text" name="numar" placeholder="Numărul *" required />
            <input type="text" name="bloc" placeholder="Bloc" />
            <input type="text" name="scara" placeholder="Scara" />
            <input type="text" name="etaj" placeholder="Etaj" />
            <input type="text" name="apartament" placeholder="Apartament" />
            <input type="text" name="localitate" placeholder="Localitate *" required />
            <input type="text" name="judet_sector" placeholder="Județ/Sector *" required />
            <input type="text" name="cod_postal" placeholder="Cod poștal *" required />
            </div>

            {/* Donație pentru o perioadă */}
            <div className="donation-period">
              <label>Donez pentru o perioadă de:</label>
              <div className="checkboxes-inline">
              <label>
                  <input type="checkbox" name="perioada_donatie" value="1" /> 1 an
                </label>

                <label>
                  <input type="checkbox" name="perioada_donatie" value="2" /> 2 ani
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
                <input type="checkbox"name="acord_politica" value="on" required /> Sunt de acord cu politica de
                confidențialitate a SNCR *
              </label>
              <br />
              <br />
              <label>
                <input type="checkbox"name="acord_anaf" value="on" required /> Sunt de acord cu colectarea
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
