import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Contact.css";
import headerImage from "../images/people.jpg";
import mailIcon from "../images/mail-icon.png";
import locationIcon from "../images/location-icon.png";
import phoneIcon from "../images/phone-icon.png";

const Contact = () => {
  return (
    <div>
      <Navigation />
      
      <header>
        <div className="contact-header">
          <img src={headerImage} alt="People" className="header-image" />
          <h1>CONTACTEAZĂ-NE</h1>
        </div>
      </header>

      <main>
        <section className="contact-section">
          <div className="contact-header-text">
            <p>Suntem aici să vă răspundem la orice întrebare și să oferim sprijin celor care au nevoie de ajutor. Dacă doriți să aflați mai multe despre activitățile noastre, să vă alăturați echipei de voluntari sau să ne susțineți cauza, ne puteți contacta folosind informațiile de mai jos.</p>
          </div>

          <div className="contact-info">
            <h2>Date de Contact</h2>
            <ul>
              <li><a href="#"><img src={mailIcon} alt="Email" /> Email general: info@handsonhope.org</a></li>
              <li><a href="#"><img src={mailIcon} alt="Email" /> Suport pentru donatori: donations@handsonhope.org</a></li>
              <li><a href="#"><img src={mailIcon} alt="Email" /> Voluntariat și colaborări: volunteer@handsonhope.org</a></li>
              <li><a href="#"><img src={locationIcon} alt="Location" /> Adresă: Str. Solidarității Nr. 10, Iași, România</a></li>
              <li><a href="#"><img src={phoneIcon} alt="Phone" /> Telefon: +40 XXX XXX XXX</a></li>
            </ul>
          </div>
        </section>

        <section className="contact-form">
          <h2>Formular contact</h2>
          <form>
            <input type="text" placeholder="Nume" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telefon" />
            <textarea placeholder="Mesaj"></textarea>
            <button type="submit">TRIMITE</button>
          </form>
        </section>

        <section className="additional-links">
          <a href="#">Întrebări Frecvente</a>
          <p>Pentru răspunsuri rapide, consultați secțiunea Întrebări Frecvente (FAQ), unde puteți găsi informații despre donații, proceduri de ajutorare și oportunități de voluntariat.</p>
          <a href="#">Alătură-te Echipei Noastre</a>
          <p>Dacă dorești să contribui la misiunea noastră și să ajuți comunitățile afectate de dezastre, te invităm să te înscrii în echipa noastră de voluntari.</p>
          <a href="#">Colaborări și Parteneriate</a>
          <p>Pentru organizațiile și companiile care doresc să colaboreze cu Hands on Hope, suntem deschiși la parteneriate.</p>
        </section>

        <section className="map">
          <iframe src="https://maps.google.com/?q=Universitatea+Alexandru+Ioan+Cuza,+Iași&output=embed" title="Location"></iframe>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
