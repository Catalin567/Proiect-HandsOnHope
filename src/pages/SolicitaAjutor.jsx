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
    <div>
      <Navigation />

      <div
        className="help-header"
        style={{ backgroundImage: `url(${helpHeaderImage})` }}
      
      >
        <h2>SOLICITĂ AJUTORUL</h2>
      </div>

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
        <section className="help-form-section">
        <h3 className="help-form-title">Formular pentru ajutor</h3>

        <form onSubmit={handleSubmit} className="help-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nume">Nume</label>
              <input
                type="text"
                id="nume"
                name="nume"
                value={formData.nume}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenume">Prenume</label>
              <input
                type="text"
                id="prenume"
                name="prenume"
                value={formData.prenume}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="localitate">Localitate</label>
              <input
                type="text"
                id="localitate"
                name="localitate"
                value={formData.localitate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="adresa">Adresă</label>
              <input
                type="text"
                id="adresa"
                name="adresa"
                value={formData.adresa}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefon">Telefon</label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numarMembriFamilie">
                Număr de membri ai familiei
              </label>
              <input
                type="number"
                id="numarMembriFamilie"
                name="numarMembriFamilie"
                value={formData.numarMembriFamilie}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tipCalamitate">Tip calamitate</label>
              <select
                id="tipCalamitate"
                name="tipCalamitate"
                value={formData.tipCalamitate}
                onChange={handleChange}
                required
              >
                <option value="">Alege opțiunea</option>
                <option value="mobilitate">Inundație</option>
                <option value="incendiu">Cutremur</option>
                <option value="inundatie">Incendiu</option>
                <option value="cutremur">Alunecări de teren</option>
                <option value="mobilitate">Ajutor social</option>
                <option value="medical">Alta</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tipAjutor">Tip ajutor solicitat</label>
              <select
                id="tipAjutor"
                name="tipAjutor"
                value={formData.tipAjutor}
                onChange={handleChange}
                required
              >
                <option value="">Alege opțiunea</option>
                <option value="financiar">Ajutor financiar</option>
                <option value="alimentar">Ajutor juridic</option>
                <option value="mobilitate">Alimente și apă</option>
                <option value="medical">Medicamente și produse alimentare</option>
                <option value="mobilitate">Locuință temporară</option>
                <option value="medical">Alta</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nevoiSpeciale">Nevoi speciale</label>
              <select
                id="nevoiSpeciale"
                name="nevoiSpeciale"
                value={formData.nevoiSpeciale}
                onChange={handleChange}
              >
                <option value="">Alege opțiunea</option>
                <option value="mobilitate">Persoane vârstnice</option>
                <option value="medical">Copii sub 5 ani</option>
                <option value="mobilitate">Persoane cu dizabilități</option>
                <option value="medical">Nevoi medicale</option>
                <option value="mobilitate"> Altele</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="prioritateaCererii">Prioritatea cererii</label>
              <select
                id="prioritateaCererii"
                name="prioritateaCererii"
                value={formData.prioritateaCererii}
                onChange={handleChange}
                required
              >
                <option value="">Alege opțiunea</option>
                <option value="urgent">Urgent</option>
                <option value="mediu">Ridicată</option>
                <option value="scazut">Normală</option>
              </select>
            </div>
          </div>

         
        </form>
        </section>
        <button type="submit" className="form-submit-button">
            Trimite
          </button>
      </section>
      <Footer />
    </div>
  );
};

export default SolicitaAjutor;
