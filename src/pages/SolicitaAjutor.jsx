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

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.nume) {
      formErrors.nume = "Numele este obligatoriu.";
      isValid = false;
    }
    if (!formData.prenume) {
      formErrors.prenume = "Prenumele este obligatoriu.";
      isValid = false;
    }
    if (!formData.localitate) {
      formErrors.localitate = "Localitatea este obligatorie.";
      isValid = false;
    }
    if (!formData.adresa) {
      formErrors.adresa = "Adresa este obligatorie.";
      isValid = false;
    }
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.telefon) {
      formErrors.telefon = "Telefonul este obligatoriu.";
      isValid = false;
    } else if (!phoneRegex.test(formData.telefon)) {
      formErrors.telefon = "Telefonul trebuie să fie un număr valid de telefon.";
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email-ul este obligatoriu.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Adresa de email nu este validă.";
      isValid = false;
    }
    if (!formData.numarMembriFamilie) {
      formErrors.numarMembriFamilie = "Numărul de membri ai familiei este obligatoriu.";
      isValid = false;
    }
    if (!formData.tipCalamitate) {
      formErrors.tipCalamitate = "Tipul de calamitate este obligatoriu.";
      isValid = false;
    }
    if (!formData.tipAjutor) {
      formErrors.tipAjutor = "Tipul de ajutor solicitat este obligatoriu.";
      isValid = false;
    }
    if (!formData.nevoiSpeciale) {
      formErrors.nevoiSpeciale = "Nevoi speciale este obligatorie.";
      isValid = false;
    }
    if (!formData.prioritateaCererii) {
      formErrors.prioritateaCererii = "Prioritatea cererii este obligatorie.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formularele sunt valide:", formData);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({
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
        setFormSubmitted(false);
      }, 3000);
    } else {
      console.log("Formularul nu a fost validat.");
    }
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
                className={errors.nume ? 'input-error' : ''}
                
              />
            {errors.nume && <div className="error">{errors.nume}</div>}

            </div>
            <div className="form-group">
              <label htmlFor="prenume">Prenume</label>
              <input
                type="text"
                id="prenume"
                name="prenume"
                value={formData.prenume}
                onChange={handleChange}
                className={errors.prenume ? 'input-error' : ''}

              />
              {errors.prenume && <div className="error">{errors.prenume}</div>}

            </div>
            <div className="form-group">
              <label htmlFor="localitate">Localitate</label>
              <input
                type="text"
                id="localitate"
                name="localitate"
                value={formData.localitate}
                onChange={handleChange}
                className={errors.localitate ? 'input-error' : ''}

              />
              {errors.localitate && <div className="error">{errors.localitate}</div>}

            </div>
            <div className="form-group">
              <label htmlFor="adresa">Adresă</label>
              <input
                type="text"
                id="adresa"
                name="adresa"
                value={formData.adresa}
                onChange={handleChange}
                className={errors.adresa ? 'input-error' : ''}

              />
              {errors.adresa && <div className="error">{errors.adresa}</div>}

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
                className={errors.telefon ? 'input-error' : ''}

              />
              {errors.telefon && <div className="error">{errors.telefon}</div>}

            </div>
            <div className="form-group">
              <label htmlFor="email">Email (optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}

              />
              {errors.email && <div className="error">{errors.email}</div>}

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
                className={errors.numarMembriFamilie ? 'input-error' : ''}

              />
              {errors.numarMembriFamilie && <div className="error">{errors.numarMembriFamilie}</div>}

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
                className={errors.tipCalamitate ? 'input-error' : ''}

              >
                <option value="">Alege opțiunea</option>
                <option value="mobilitate">Inundație</option>
                <option value="incendiu">Cutremur</option>
                <option value="inundatie">Incendiu</option>
                <option value="cutremur">Alunecări de teren</option>
                <option value="mobilitate">Ajutor social</option>
                <option value="medical">Alta</option>
              </select>
              {errors.tipCalamitate && <div className="error">{errors.tipCalamitate}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="tipAjutor">Tip ajutor solicitat</label>
              <select
                id="tipAjutor"
                name="tipAjutor"
                value={formData.tipAjutor}
                onChange={handleChange}
                className={errors.tipAjutor ? 'input-error' : ''}

              >
                <option value="">Alege opțiunea</option>
                <option value="financiar">Ajutor financiar</option>
                <option value="alimentar">Ajutor juridic</option>
                <option value="mobilitate">Alimente și apă</option>
                <option value="medical">Medicamente și produse alimentare</option>
                <option value="mobilitate">Locuință temporară</option>
                <option value="medical">Alta</option>
              </select>
              {errors.tipAjutor && <div className="error">{errors.tipAjutor}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="nevoiSpeciale">Nevoi speciale</label>
              <select
                id="nevoiSpeciale"
                name="nevoiSpeciale"
                value={formData.nevoiSpeciale}
                onChange={handleChange}
                className={errors.nevoiSpeciale ? 'input-error' : ''}

              >
                <option value="">Alege opțiunea</option>
                <option value="mobilitate">Persoane vârstnice</option>
                <option value="medical">Copii sub 5 ani</option>
                <option value="mobilitate">Persoane cu dizabilități</option>
                <option value="medical">Nevoi medicale</option>
                <option value="mobilitate"> Altele</option>
              </select>
              {errors.nevoiSpeciale && <div className="error">{errors.nevoiSpeciale}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="prioritateaCererii">Prioritatea cererii</label>
              <select
                id="prioritateaCererii"
                name="prioritateaCererii"
                value={formData.prioritateaCererii}
                onChange={handleChange}
                className={errors.prioritateaCererii ? 'input-error' : ''}

              >
                <option value="">Alege opțiunea</option>
                <option value="urgent">Urgent</option>
                <option value="mediu">Ridicată</option>
                <option value="scazut">Normală</option>
              </select>
              {errors.prioritateaCererii && <div className="error">{errors.prioritateaCererii}</div>}
            </div>
          </div>

          
        </form>
        </section>
        <button onClick={handleSubmit} type="submit" className="form-submit-button">
            Trimite
          </button>
          {formSubmitted && <div className="success">Formularul a fost trimis cu succes!</div>}

      </section>
      <Footer />
    </div>
  );
};

export default SolicitaAjutor;
