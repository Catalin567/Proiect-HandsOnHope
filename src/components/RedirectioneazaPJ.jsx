import React from "react";
import "../styles/Redirectioneaza.css";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function RedirectioneazaPJ() {
  const sigCanvas = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Preluăm datele din formular
    const formData = new FormData(e.target);

    const data = {
      denumire: formData.get("denumire"),
      adresa_sediu_social: formData.get("adresa_sediu_social"),
      cui: formData.get("cui"),
      nr_reg_comert: formData.get("nr_reg_comert"),
      cont_bancar: formData.get("cont_bancar"),
      banca: formData.get("banca"),
      reprezentant: formData.get("reprezentant"),
      functie: formData.get("functie"),
      telefon: formData.get("telefon"),
      email: formData.get("email"),
      suma_redirectionata: formData.get("suma_redirectionata"),
      strada: formData.get("strada"),
      numar: formData.get("numar"),
      bloc: formData.get("bloc"),
      scara: formData.get("scara"),
      etaj: formData.get("etaj"),
      apartament: formData.get("apartament"),
      localitate: formData.get("localitate"),
      judet_sector: formData.get("judet_sector"),
      cod_postal: formData.get("cod_postal"),
      acord_politica: formData.get("acord_politica") === "on",
      acord_date: formData.get("acord_date") === "on",
    };

    try {
      const response = await fetch("http://localhost:5000/redirectioneaza-pj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        alert("A apărut o problemă la înregistrarea formularului.");
      }
    } catch (error) {
      console.error("Eroare la trimiterea formularului:", error);
      alert("Nu s-a putut trimite formularul.");
    }
  };

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
          <input type="text" name="denumire" placeholder="Denumire *" required />
          <input
            type="text"
            name="adresa_sediu_social"
            placeholder="Adresa (Sediul social) *"
            required
          />
          <input
            type="text"
            name="cui"
            placeholder="CUI (Cod Unic de Identificare) *"
            required
          />
          <input
            type="text"
            name="nr_reg_comert"
            placeholder="Număr Registrul Comerțului *"
            required
          />
          <input type="text" name="cont_bancar" placeholder="Cont bancar *" required />
          <input type="text" name="banca" placeholder="Banca *" required />
          <input type="text" name="reprezentant" placeholder="Reprezentant *" required />
          <input type="text" name="functie" placeholder="Funcție *" required />
          <input type="text" name="telefon" placeholder="Telefon *" required />
          <input type="email" name="email" placeholder="Email *" required />
        </div>

        <input
          type="text"
          name="suma_redirectionata"
          placeholder="Suma de redirecționat (în lei) *"
          required
          className="full-width"
        />

        <h2>Adresa de corespondență</h2>
        <div className="form-grid-3">
          <input type="text" name="strada" placeholder="Stradă *" required />
          <input type="text" name="numar" placeholder="Număr *" required />
          <input type="text" name="bloc" placeholder="Bloc" />
          <input type="text" name="scara" placeholder="Scara" />
          <input type="text" name="etaj" placeholder="Etaj" />
          <input type="text" name="apartament" placeholder="Apartament" />
          <input type="text" name="localitate" placeholder="Localitate *" required />
          <input type="text" name="judet_sector" placeholder="Județ/Sector *" required />
          <input type="text" name="cod_postal" placeholder="Cod poștal *" required />
        </div>

        <div className="checkboxes">
          <label>
            <input type="checkbox" name="acord_politica" required /> Sunt de acord cu politica
            de confidențialitate a HOM *
          </label>
          <br />
          <label>
            <input type="checkbox" name="acord_date" required /> Sunt de acord cu colectarea
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