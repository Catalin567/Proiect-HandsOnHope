import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Contact.css";
import headerImage from "../images/people.jpg";
import ChatBot from "../components/ChatBot";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#up") {
      const element = document.getElementById("up");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    subiect: "",
    mesaj: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nume.trim()) newErrors.nume = "Numele este obligatoriu.";

    if (!formData.prenume.trim()) {
      newErrors.prenume = "Prenumele este obligatoriu.";
    }

    if (!formData.subiect.trim()) {
      newErrors.subiect = "Subiectul este obligatoriu.";
    }

    if (!formData.mesaj.trim()) newErrors.mesaj = "Mesajul este obligatoriu.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Formularul a fost trimis cu succes!");
          setFormData({
            nume: "",
            prenume: "",
            subiect: "",
            mesaj: "",
          });
        } else {
          alert("A apărut o eroare: " + data.error);
        }
      } catch (error) {
        console.error("Eroare la trimiterea formularului:", error);
        alert("A apărut o eroare la trimiterea formularului.");
      }
    }
  };

  return (
    <div id="up">
      <Navigation />
      <div
        className="contact-header"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h2>CONTACTEAZĂ-NE</h2>
      </div>

      <section className="contact-section">
        <div className="contact-header-text">
          <p>
            Suntem aici să vă răspundem la orice întrebare și să oferim sprijin
            celor care au nevoie de ajutor. Dacă doriți să aflați mai multe
            despre activitățile noastre, să vă alăturați echipei de voluntari
            sau să ne susțineți cauza, ne puteți contacta folosind informațiile
            de mai jos.
          </p>
        </div>
        <div className="contact-info">
          <h2>Date de Contact</h2>
          <ul>
            <li>
              <a href="#">
                <i className="bx bx-envelope" /> Email general:
                info@handsonhope.org
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-envelope" /> Suport pentru donatori:
                donations@handsonhope.org
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-envelope" /> Voluntariat și colaborări:
                volunteer@handsonhope.org
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-map" /> Adresă: Str. Solidarității Nr. 10,
                Iași, România
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-phone" /> Telefon: +40 XXX XXX XXX
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-form">
        <h2>Formular contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="nume">Nume</label>
            <input
              type="text"
              name="nume"
              id="nume"
              value={formData.nume}
              onChange={handleChange}
              className="contact-small-input"
            />
            {formSubmitted && errors.nume && (
              <span className="contact-error">{errors.nume}</span>
            )}
          </div>

          <div className="contact-form-group">
            <label htmlFor="prenume">Prenume</label>
            <input
              type="text"
              name="prenume"
              id="prenume"
              value={formData.prenume}
              onChange={handleChange}
              className="contact-small-input"
            />
            {formSubmitted && errors.prenume && (
              <span className="contact-error">{errors.prenume}</span>
            )}
          </div>

          <div className="contact-form-group">
            <label htmlFor="subiect">Subiect</label>
            <input
              type="text"
              name="subiect"
              id="subiect"
              value={formData.subiect}
              onChange={handleChange}
            />
            {formSubmitted && errors.subiect && (
              <span className="contact-error">{errors.subiect}</span>
            )}
          </div>

          <div className="contact-form-group">
            <label htmlFor="mesaj">Mesaj</label>
            <textarea
              name="mesaj"
              id="mesaj"
              value={formData.mesaj}
              onChange={handleChange}
            ></textarea>
            {formSubmitted && errors.mesaj && (
              <span className="contact-error">{errors.mesaj}</span>
            )}
          </div>

          <button type="submit">TRIMITE</button>
        </form>
      </section>

      <section className="additional-links">
        <a href="#">Întrebări Frecvente</a>
        <p>
          Pentru răspunsuri rapide, consultați secțiunea Întrebări Frecvente
          (FAQ), unde puteți găsi informații despre donații, proceduri de
          ajutorare și oportunități de voluntariat.
        </p>
        <a href="#">Alătură-te Echipei Noastre</a>
        <p>
          Dacă dorești să contribui la misiunea noastră și să ajuți comunitățile
          afectate de dezastre, te invităm să te înscrii în echipa noastră de
          voluntari.
        </p>
        <a href="#">Colaborări și Parteneriate</a>
        <p>
          Pentru organizațiile și companiile care doresc să colaboreze cu Hands
          on Hope, suntem deschiși la parteneriate.
        </p>
      </section>

      <section className="map">
        <iframe
          src="https://maps.google.com/?q=Universitatea+Alexandru+Ioan+Cuza,+Iași&output=embed"
          title="Location"
        ></iframe>
      </section>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Contact;
