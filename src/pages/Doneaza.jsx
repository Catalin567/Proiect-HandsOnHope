import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Doneaza.css";
import ChatBot from "../components/ChatBot";

const Doneaza = () => {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    sumaLiberă: '',
    tipDonație: '',
    numeCard: '',
    numarCard: '',
    dataExpirare: '',
    cvc: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/doneaza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Setează tipul de conținut la JSON
        },
        body: JSON.stringify(formData),  // Trimite datele ca JSON
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Donația ta a fost procesată cu succes!');
      } else {
        alert(data.error || 'A apărut o eroare la procesarea donației!');  // Afișează eroarea din server, dacă există
      }
    } catch (error) {
      console.error('Eroare la trimiterea formularului:', error);
      alert('A apărut o eroare!');
    }
  };
  
  

  const steps = [
    {
      number: 1,
      title: "Completează formularul de donație",
      description:
        "Fie că ești persoană fizică sau juridică, te invităm să completezi formularul nostru. Aici vei găsi câmpuri dedicate fiecărei categorii, pentru a te ajuta să finalizezi donația rapid și simplu.",
    },
    {
      number: 2,
      title: "Alege suma și tipul donației",
      description:
        "Poți selecta suma pe care dorești să o donezi și, dacă vrei, ai posibilitatea de a face o donație unică sau recurentă.",
    },
    {
      number: 3,
      title: "Informații pentru persoane juridice",
      description:
        "Dacă reprezinți o companie sau un ONG, vei găsi secțiuni speciale în formular pentru a completa informațiile necesare, inclusiv detalii fiscale, pentru a-ți asigura transparența donației.",
    },
    {
      number: 4,
      title: "Finalizare și confirmare",
      description:
        "După ce ai completat formularul și ai trimis donația, vei primi un email de confirmare din partea noastră, cu toate detaliile tranzacției. Acest mesaj va servi și ca o dovadă a sprijinului tău.",
    },
  ];

  return (
    <div>
      <Navigation />
      <main>
        <img src="pictures/donate.jpg" alt="" className="img-donate" />
        <div className="donation-container">
          <p>
            La <span className="highlight">Hands on Hope</span>, ne dedicăm
            sprijinirii comunităților aflate în nevoie, oferind ajutor în
            situații de urgență, servicii sociale și soluții de cazare temporară
            pentru cei vulnerabili. Donația ta ne ajută să ajungem acolo unde
            este nevoie de sprijin, transformând speranța în acțiune.
          </p>
          <p>
            Indiferent de mărimea donației, contribuția ta contează. Prin
            sprijinul tău, facem un pas înainte pentru a oferi siguranță,
            alinare și un nou început celor care se confruntă cu dificultăți.
            Fiecare donație ne aduce mai aproape de o lume în care solidaritatea
            și compasiunea sunt prioritare.
          </p>
          <hr />
          <h3 className="donate-h3">Cum poți dona?</h3>
          <p>
            Donația ta contează și este ușor de făcut! Urmează acești pași
            simpli:
          </p>
        </div>
        <div className="steps-container">
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="donation-forms-container">
          <h3>Formularul de donație este chiar aici:</h3>
          <div className="forms-grid">
            {/* Left Form */}
            <div className="form-card">
              <h4>DONEAZĂ</h4>
              <hr />
              <div className="form-inputs">
                <input 
                  type="text" 
                  placeholder="Nume" 
                  name="nume" 
                  value={formData.nume} 
                  onChange={handleChange} 
                />
                <input 
                  type="text" 
                  placeholder="Prenume" 
                  name="prenume" 
                  value={formData.prenume} 
                  onChange={handleChange} 
                />
                <br />
                <br />
              </div>
              <div className="donation-amounts">
                <button onClick={() => setFormData({ ...formData, sumaLiberă: 50 })}>50 RON</button>
                <button onClick={() => setFormData({ ...formData, sumaLiberă: 100 })}>100 RON</button>
                <button onClick={() => setFormData({ ...formData, sumaLiberă: 200 })}>200 RON</button>
                <br /> <br />
              </div>
              <input 
                type="text" 
                placeholder="Sumă liberă" 
                name="sumaLiberă" 
                value={formData.sumaLiberă} 
                onChange={handleChange} 
              />
              <br />
              <br />
              <div className="donation-actions">
                <button onClick={() => setFormData({ ...formData, tipDonație: "unica" })}>Donează Acum</button>
                <button onClick={() => setFormData({ ...formData, tipDonație: "lunar" })}>Donează Lunar</button>
                <button onClick={() => setFormData({ ...formData, tipDonație: "anual" })}>Donează Anual</button>
              </div>
            </div>

            {/* Right Form */}
            <div className="form-card">
              <h4>Plata cu cardul bancar</h4>
              <hr />
              <div className="form-inputs">
                <input 
                  type="text" 
                  placeholder="Nume deținător" 
                  name="numeCard" 
                  value={formData.numeCard} 
                  onChange={handleChange} 
                />
                <input 
                  type="text" 
                  placeholder="Număr card bancar" 
                  name="numarCard" 
                  value={formData.numarCard} 
                  onChange={handleChange} 
                />
                <div className="card-details">
                  <input 
                    type="text" 
                    placeholder="Data expirare (ZZ/MM/YY)" 
                    name="dataExpirare" 
                    value={formData.dataExpirare} 
                    onChange={handleChange} 
                  />
                  <input 
                    type="text" 
                    placeholder="CVC" 
                    name="cvc" 
                    value={formData.cvc} 
                    onChange={handleChange} 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </div>
              <hr />
              <button className="submit-button" onClick={handleSubmit}>DONEAZĂ</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div className="donation-container">
          <p className="donation-text">
            Dacă preferi să donezi prin transfer bancar, poți folosi unul dintre
            conturile de mai jos deschise la Banca Solidarității, Iași:
          </p>
          <div className="donation-content">
            <img
              src="pictures/cash.png"
              alt="Punga de bani"
              className="money-bag"
            />
            <div className="account-details">
              <p>
                <strong>• Monedă: RON</strong>
                <br />
                IBAN: RO12 BANK 0000 1111 2222 3333
              </p>
              <p>
                <strong>• Monedă: EUR</strong>
                <br />
                IBAN: RO34 BANK 0000 4444 5555 6666
                <br />
                BIC/SWIFT: SOLDBICR
              </p>
              <p>
                <strong>• Monedă: USD</strong>
                <br />
                IBAN: RO56 BANK 0000 7777 8888 9999
                <br />
                BIC/SWIFT: SOLDBIC
              </p>
            </div>
          </div>
        </div>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Doneaza;
