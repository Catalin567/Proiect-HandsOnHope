import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/SolicitaAjutor.css";
import helpHeaderImage from "../images/help-people.png";

const SolicitaAjutor = () => {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    localitate: "",
    adresa: "",
    telefon: "",
    email: "",
    numarMembriFamilie: "",
    tipCalamitate: "",
    tipAjutor: "",
    nevoiSpeciale: "",
    prioritateaCererii: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="solicita-ajutor-container">
      <Navigation />

      <header
        className="help-header"
        style={{ backgroundImage: `url(${helpHeaderImage})` }}
      ></header>

      <section className="help-introduction">
        <p>
          Noi, echipa <strong style={{ color: "#008000" }}>HandsOnHope</strong>,
          suntem aici să te ajutăm, indiferent de dificultățile prin care treci.
          Fiecare dintre noi poate întâmpina momente în viață când are nevoie de
          sprijin, de o mână de ajutor pentru a depăși obstacolele. La
          HandsOnHope, credem că nicio provocare nu ar trebui să fie înfruntată
          de unul singur. Suntem aici să îți oferim suportul necesar pentru a
          trece peste aceste încercări, fie ele probleme financiare, medicale,
          sau orice altă nevoie de bază.
        </p>
      </section>

      <section className="help-section">
        <h3>Cum te putem ajuta?</h3>
        <ul>
          <li>
            <strong>Asistență financiară pentru nevoile urgente:</strong> Suntem
            aici să strângem fonduri pentru a te ajuta să acoperi cheltuielile
            importante precum facturi, chirie, sau produse necesare.
          </li>
          <li>
            <strong>Acces la resurse esențiale:</strong> Prin rețeaua noastră de
            parteneri și donatori, oferim alimente, produse de igienă,
            îmbrăcăminte și alte resurse vitale.
          </li>
          <li>
            <strong>Sprijin moral și comunitate:</strong> Uneori, doar să știi
            că cineva îți este alături contează enorm. Echipa noastră și toți
            cei implicați sunt aici pentru a te susține.
          </li>
        </ul>
      </section>

      <section className="how-it-works-section">
        <h3>Cum funcționează?</h3>
        <p>
          Totul este simplu și transparent. Ne povestești despre situația ta,
          completezi formularul de mai jos, noi o trimitem către primărie iar
          apoi vei primi un răspuns în cel mai scurt timp posibil.
        </p>
        <h4 className="highlight-text">Nu ești singur.</h4>
        <div className="form-button-container">
          <button className="form-button">FORMULAR</button>
        </div>

        <form onSubmit={handleSubmit} className="help-form">
          <div className="form-row">
            <input
              type="text"
              name="nume"
              placeholder="Nume"
              value={formData.nume}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="prenume"
              placeholder="Prenume"
              value={formData.prenume}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="localitate"
              placeholder="Localitate"
              value={formData.localitate}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="adresa"
              placeholder="Adresă"
              value={formData.adresa}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon"
              value={formData.telefon}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="number"
              name="numarMembriFamilie"
              placeholder="Număr de membri ai familiei"
              value={formData.numarMembriFamilie}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <select
              name="tipCalamitate"
              value={formData.tipCalamitate}
              onChange={handleChange}
              required
            >
              <option value="">Tip calamitate</option>
              <option value="incendiu">Incendiu</option>
              <option value="inundatie">Inundație</option>
              <option value="cutremur">Cutremur</option>
            </select>
            <select
              name="tipAjutor"
              value={formData.tipAjutor}
              onChange={handleChange}
              required
            >
              <option value="">Tip ajutor solicitat</option>
              <option value="financiar">Asistență financiară</option>
              <option value="alimentar">Ajutor alimentar</option>
            </select>
            <select
              name="nevoiSpeciale"
              value={formData.nevoiSpeciale}
              onChange={handleChange}
            >
              <option value="">Nevoi speciale</option>
              <option value="mobilitate">Mobilitate redusă</option>
              <option value="medical">Probleme medicale</option>
            </select>
            <select
              name="prioritateaCererii"
              value={formData.prioritateaCererii}
              onChange={handleChange}
              required
            >
              <option value="">Prioritatea cererii</option>
              <option value="urgent">Urgent</option>
              <option value="mediu">Mediu</option>
              <option value="scazut">Scăzut</option>
            </select>
          </div>

          <button type="submit" className="form-submit-button">
            Trimite
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default SolicitaAjutor;
