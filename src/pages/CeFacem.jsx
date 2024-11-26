import React from "react";
import Navigation from "../components/Navigation";
import Harta from "../components/Harta";
import Footer from "../components/Footer";
import "../styles/CeFacem.css";
import p1 from "../images/cefacem.jpg";

function closeEventDiv() {
  document.getElementById("eveniment-judet").style.display = "none";
}

const CeFacem = () => {
  return (
    <div>
      <Navigation />

      <main className="main-content">
      <div className="upper-side" style={{ backgroundImage: `url(${p1})` }}></div>

      <div className="chestii-tot">
        <h1 className="title">Ce facem?</h1>
        <p className="description">
        Ne dedicăm sprijinirii comunităților din România care se confruntă cu situații dificile, 
        fie că este vorba de dezastre naturale, dificultăți materiale sau urgențe sociale. 
        În fiecare colț al țării, există oameni și comunități care au nevoie de sprijin pentru a depăși 
        momentele critice și pentru a-și reconstrui viețile.
        </p>

        <Harta />

        <section className="intervention">
          <h2 className="section-title">Cum intervenim noi?</h2>
          <p className="intervention-text">
          Răspundem apelurilor directe pentru ajutor, primite prin formularul nostru de solicitare.
          <br></br><br></br>
          Odată ce primim o solicitare de ajutor, aceasta este analizată și aprobată de primăria zonei de care aparțineți, apoi este adăugată pe harta noastră de intervenții, permițând astfel tuturor celor interesați să vadă zonele unde este nevoie de sprijin. 
          <br></br><br></br>
          Intervenția noastră este posibilă datorită rețelei de voluntari dedicați din toate regiunile României, care sunt pregătiți să acționeze imediat ce un nou punct de ajutor apare pe hartă. 
          </p>
          <ul className="intervention-list">
            <li>Asistență de urgență în caz de dezastre naturale, oferind resurse și sprijin de primă necesitate. </li>
            <li>Locuințe temporare pentru cei rămași fără adăpost sau pentru persoanele evacuate din locuințe nesigure. </li>
            <li>Servicii juridice și sociale destinate familiilor vulnerabile, persoanelor în dificultate și comunităților cu probleme financiare. </li>
          </ul>
        </section>


        

        <div className="eveniment-judet" id="eveniment-judet">
          <section className="evenimente-content" id="eveniment-tot">

          </section>

          <button className="close-button-event" onClick={() => closeEventDiv()}>Inchide</button>
        </div>

        <section className="services">
          <div className="service-card">
            <h3 className="service-title">Servicii Sociale</h3>
            <p className="service-texts">
            Scopul nostru principal este să oferim sprijin real și imediat comunităților din România care trec 
            prin situații dificile. Prin centrele de servicii sociale, asigurăm:
            </p>
            <ul className="service-list">
              <li><span className="highlight-green">Adăposturi temporare</span> pentru persoanele afectate de dezastre naturale, conflicte sociale sau situații de 
                risc. Aceste spații sigure și echipate oferă un loc de refugiu până la găsirea unei soluții de lungă durată.</li><br></br>
              <li>
              <span className="highlight-green">Distribuirea de resurse și ajutoare</span> esențiale, de la alimente și produse de igienă, până la articole de 
              îmbrăcăminte și materiale de construcție, în funcție de nevoile fiecărei comunități.</li><br></br>
              <li><span className="highlight-green">Suport social și consiliere</span> pentru familiile aflate în dificultate, cu scopul de a 
                le oferi sprijin moral și informațiile necesare pentru a face față unor circumstanțe dificile.</li><br></br>
            </ul>
          </div>
          <div className="service-card">
            <h3 className="service-title">Servicii Juridice</h3>
            <p className="service-texts">
            În multe situații critice, accesul la suport juridic devine esențial pentru a ajuta oamenii să-și protejeze 
            drepturile și să-și rezolve problemele. Parteneriatele noastre cu notari din toată țara oferă servicii juridice cum ar fi:
            </p>
            <ul className="service-list">
              <li><span className="highlight-green">Asistență pentru documente legale </span> necesare în procesul de obținere a sprijinului social, în special în cazurile de evacuare și pierdere de bunuri.</li><br></br>
              <li>
              <span className="highlight-green">Suport juridic pentru formalități </span> necesare în cazul donațiilor, al actelor de moștenire și al altor proceduri legale care să asigure stabilitatea și siguranța beneficiarilor noștri.</li><br></br>
              <li><span className="highlight-green">Consiliere juridică </span>în cazuri de vulnerabilitate socială, pentru a ajuta persoanele aflate în situații dificile să înțeleagă și să utilizeze mai bine opțiunile legale disponibile.</li><br></br>
            </ul>
          </div>
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CeFacem;
