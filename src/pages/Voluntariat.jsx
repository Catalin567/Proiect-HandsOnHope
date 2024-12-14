import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import "../styles/Voluntariat.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Voluntariat = () => {
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
    varsta: "",
    ocupatie: "",
    adresa: "",
    disponibilitate: "",
    experienta: "",
    ore: "",
    motiv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/voluntariat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Formularul a fost înregistrat cu succes!");
        setFormData({
          nume: "",
          prenume: "",
          varsta: "",
          ocupatie: "",
          adresa: "",
          disponibilitate: "",
          experienta: "",
          ore: "",
          motiv: "",
        });
      } else {
        alert("A apărut o eroare. Vă rugăm să încercați din nou.");
      }
    } catch (error) {
      console.error("Eroare la trimiterea formularului:", error);
      alert("Eroare la conectarea cu serverul.");
    }
  };

  return (
    <main>
      <Navigation />
      <div className="volunteering-layout" id="up">
        <div className="text-section">
          <p>
            <span className="highlight">Voluntariatul</span> este una dintre
            cele mai puternice forme de implicare și solidaritate. Prin munca și
            dăruirea voluntarilor noștri, reușim să aducem sprijin rapid și
            eficient în comunitățile din România care au nevoie de ajutor.
            Fiecare gest contează, iar voluntarii noștri sunt cei care dau viață
            inițiativelor și proiectelor noastre de ajutor social.
          </p>

          <div className="info-box">
            <h2>De ce să devii voluntar?</h2>
            <p className="under-text">
              Există multe motive pentru a te alătura echipei noastre de <br />{" "}
              voluntari, printre care:
            </p>
            <ul>
              <li>
                <strong>
                  Contribui activ la schimbarea în comunitatea ta:
                </strong>{" "}
                prin acțiunile tale, poți face o diferență reală în viața
                oamenilor.
              </li>
              <li>
                <strong>Îți alegi cazurile cele mai apropiate de tine:</strong>{" "}
                platforma noastră îți permite să vezi cazurile care au nevoie de
                ajutor și să selectezi pe cele care sunt cel mai aproape de
                tine, astfel încât să poți interveni rapid și eficient.
              </li>
              <li>
                <strong>Îți dezvolți abilități noi:</strong> voluntariatul îți
                oferă oportunitatea de a învăța lucruri noi, de a lucra în
                echipă și de a-ți îmbunătăți abilitățile de comunicare și
                organizare.
              </li>
              <li>
                <strong>Îți construiești o rețea de contacte:</strong> alături
                de alți voluntari și de profesioniști din domeniu, îți extinzi
                rețeaua și legi prietenii pe viață.
              </li>
              <li>
                <strong>Experimentezi satisfacția de a ajuta:</strong> nimic nu
                se compară cu sentimentul de a ști că ai avut un impact pozitiv
                în viața cuiva.
              </li>
            </ul>
          </div>
        </div>

        <div className="image-section">
          <div className="main-image">
            <img
              src="pictures/Voluntariat1.png"
              alt="Volunteers working with food packages"
            />
          </div>
          <div className="secondary-images">
            <img
              src="pictures/Voluntariat2.png"
              alt="Volunteer directing traffic"
            />
            <img
              src="pictures/Voluntariat3.png"
              alt="Volunteer jacket with text"
            />
          </div>
          <div className="values">
            <h2>Valorile voluntariatului la Hands on Hope</h2>
            <p>
              La Hands on Hope, credem că puterea de a schimba vieți stă în
              mâinile fiecăruia dintre noi. Prin implicare și dăruire, aducem
              speranță acolo unde este nevoie.
            </p>
          </div>
        </div>
        <div className="left-images">
          <img
            src="pictures/Voluntariat4.png"
            alt="Solidaritate action"
            className="large-image"
          />
          <img
            src="pictures/Voluntariat5.png"
            alt="Empatie action"
            className="large-image"
          />
        </div>

        {/* Right Section */}
        <div className="right-content">
          <div className="content-box">
            <p>
              <strong>Solidaritate -</strong> Cu mâinile noastre întinse spre
              ceilalți, ne unim forțele pentru a aduce sprijin comunităților
              aflate în dificultate. Suntem alături unii de ceilalți,
              transformând speranța în ajutor concret și oferind o rază de
              lumină acolo unde întunericul a pus stăpânire.
            </p>
          </div>
          <div className="content-box">
            <p>
              <strong>Empatie -</strong> Credem că adevărata schimbare începe cu
              mâinile puse la inimă. Prin empatie, ne punem în locul celor care
              au nevoie de ajutor și oferim sprijinul cu blândețe și respect,
              ascultând și înțelegând fiecare poveste de viață.
            </p>
          </div>
          <div className="content-box">
            <p>
              <strong>Dedicare -</strong> Voluntarii noștri lucrează cu dăruire
              pentru a aduce schimbări pozitive și a crea un impact real în
              viața celor aflați în dificultate. Fiecare acțiune este o
              promisiune de speranță și un pas spre o lume mai bună.
            </p>
          </div>
          <div className="content-box">
            <p>
              <strong>Responsabilitate -</strong>Suntem ghidați de
              responsabilitate și angajament. La Hands on Hope, fiecare gest
              este bine planificat, asigurând că ajutorul oferit este sustenabil
              și de durată, astfel încât să readucem speranța în mod real și pe
              termen lung.
            </p>
          </div>
        </div>
      </div>
      <div className="help-sections">
        <div className="help-options">
          <h2 className="titles">
            <i> Alte modalități prin care poți fi alături de noi:</i>
          </h2>
          <ul>
            <li>Distribuie campaniile noastre pe rețelele sociale.</li>
            <li>
              Folosește hashtag-ul <strong>#HandsOnHope</strong> pentru a crea o
              comunitate virtuală de sprijin.
            </li>
            <li>
              Invită prieteni și colegi să participe la evenimentele Hands on
              Hope.
            </li>
          </ul>
        </div>

        {/* Partner or Sponsor Section */}
        <div className="partner-sponsor">
          <br />
          <h2>
            <i> Alătură-te ca Partener sau Sponsor</i>
          </h2>
          <p>
            Dacă reprezinți o companie sau o organizație care dorește să se
            implice în susținerea Hands on Hope, te invităm să devii partenerul
            nostru. Avem nevoie de:
          </p>
          <ul>
            <li>
              Parteneri pentru susținerea logistică și materială a campaniilor.
            </li>
            <li>
              Sponsori pentru evenimente majore, precum Maratonul Speranței sau
              Ziua Porților Deschise.
            </li>
            <li>
              Parteneri din domeniul juridic, educațional și medical pentru a
              extinde sprijinul oferit beneficiarilor noștri.
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="call-to-action">
          <hr />
          <h2>Fii parte din schimbare!</h2>
          <p>
            Căutăm oameni dedicați și empatici, dispuși să ofere din timpul lor
            și să contribuie la <br /> crearea unei societăți mai bune, mai
            unite și mai rezistente. Alătură-te echipei noastre! <br />{" "}
            Completează formularul de mai jos și fii parte din rețeaua noastră
            de voluntari dedicați:
          </p>
          <hr />
        </div>
      </div>

      <div className="form-container">
        <form className="volunteer-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nume</label>
              <input
                type="text"
                name="nume"
                value={formData.nume}
                onChange={handleChange}
                placeholder="Introdu numele"
              />
            </div>
            <div className="form-group">
              <label>Prenume</label>
              <input
                type="text"
                name="prenume"
                value={formData.prenume}
                onChange={handleChange}
                placeholder="Introdu prenumele"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Vârsta</label>
              <input
                type="number"
                name="varsta"
                value={formData.varsta}
                onChange={handleChange}
                min={1}
                max={99}
                placeholder="Introdu vârsta"
              />
            </div>
            <div className="form-group">
              <label>Ocupație</label>
              <input
                type="text"
                name="ocupatie"
                value={formData.ocupatie}
                onChange={handleChange}
                placeholder="Introdu ocupația"
              />
            </div>
            <div className="form-group">
              <label>Adresa</label>
              <input
                type="text"
                name="adresa"
                value={formData.adresa}
                onChange={handleChange}
                placeholder="Introdu adresa"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Când poți participa la activități?</label>
              <select
                name="disponibilitate"
                value={formData.disponibilitate}
                onChange={handleChange}
              >
                <option value="">Alege opțiunea</option>
                <option>De luni până vineri, dimineața</option>
                <option>De luni până vineri, seara</option>
                <option>În weekend</option>
                <option>Ocazional</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group small">
              <label>Ai experiență anterioară ca voluntar?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="experienta"
                    value="Da"
                    checked={formData.experienta === "Da"}
                    onChange={handleChange}
                  />{" "}
                  DA
                </label>
                <label>
                  <input
                    type="radio"
                    name="experienta"
                    value="Nu"
                    checked={formData.experienta === "Nu"}
                    onChange={handleChange}
                  />{" "}
                  NU
                </label>
              </div>
            </div>
            <div className="form-group small">
              <label>Ore disponibile pe zi</label>
              <input
                type="number"
                name="ore"
                value={formData.ore}
                onChange={handleChange}
                placeholder="Introdu orele"
                min="1"
                max={8}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Ce te-a determinat să te înscrii ca voluntar?</label>
              <textarea
                name="motiv"
                value={formData.motiv}
                onChange={handleChange}
                placeholder="Scrie aici..."
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="form-row">
            <button type="submit" className="submit-button">
              TRIMITE
            </button>
          </div>
        </form>
      </div>
      <ChatBot />
      <Footer />
    </main>
  );
};

export default Voluntariat;
