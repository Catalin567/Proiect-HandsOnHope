import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Blog.css";
const Blog = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="main-section">
          <p className="text-line"></p>
          <p className="quote">
            Împreună reconstruim speranțe și aducem lumina în viețile celor care
            au <br />
            nevoie de ajutor, prin puterea solidarității și a generozității.
          </p>
          <p className="text-line"></p>
        </div>

        <div id="card-container" className="card-container">
          {[
            {
              title: "Reconstrucția unei case după inundații",
              subtitle: "Cazul lui Vasile",
              image: "pictures/Picture1 1.png",
              description:
                "La vârsta de 73 de ani, Vasile a trecut printr-un moment cumplit...",
              date: "18.06.2024",
              backText:
                "Inundațiile masive care au lovit comunitatea i-au distrus complet casa în care locuia de o viață. Rămas singur și cu resurse financiare foarte limitate, reconstrucția casei era, pentru Vasile, un vis imposibil de realizat.",
            },
            {
              title: "Reconstrucția unei case după incendii",
              subtitle: "Cazul lui Maria",
              image: "pictures/Picture2 2.png",
              description:
                "La vârsta de 62 de ani, Maria a trecut printr-un moment dificil...",
              date: "10.05.2024",
              backText:
                "Familia Popescu, formată din patru membri (Ion, Maria și cei doi copii, Andrei și Ana), locuia într-un apartament modest dintr-un cartier popular al orașului. Totul a luat o întorsătură dramatică într-o noapte de iarnă, când un scurtcircuit a provocat un incendiu devastator.",
            },
            {
              title: "Ajutor pentru o familie defavorizată",
              subtitle: "Cazul familiei Popescu",
              image: "pictures/Picture4 2.png",
              description:
                "Familia Popescu are nevoie urgentă de ajutor pentru o nouă casă...",
              date: "01.07.2024",
              backText:
                "Detalii complete despre cazul familiei Popescu și cum îi poți ajuta vor apărea aici.",
            },
            {
              title: "Educație pentru copii fără acces",
              subtitle: "Cazul lui Andrei",
              image: "pictures/Picture5 2.png",
              description:
                "Andrei visează să meargă la școală, dar are nevoie de sprijinul nostru...",
              date: "15.08.2024",
              backText:
                "Cu doi copii mici, de 3 și 5 ani, Maria își găsise stabilitatea lucrând ca vânzătoare la un magazin din orașul ei. A început să acuze dureri persistente la spate, iar după mai multe investigații medicale, a fost diagnosticată cu o problemă de coloană care îi cerea o perioadă lungă de recuperare și o intervenție chirurgicală.",
            },
            {
              title: "Povestea lui Ion",
              subtitle: "Refacerea după o boală",
              image: "pictures/Picture3 1.png",
              description:
                "Mihai este un bărbat de 50 de ani dintr-un mic oraș din România, cunoscut pentru dedicarea sa la locul de muncă și pentru familia sa iubitoare.",
              date: "10.02.2024",
              backText:
                "Mihai lucra ca mecanic auto, având un venit stabil care asigura traiul familiei. Însă a suferit un accident de muncă provocându-și o fractură complexă la picior.",
            },
            {
              title: "Descoperă cum poți ajuta:",
              subtitle: "tipuri de donații acceptate",
              image: "pictures/Picture7 2.png",
              description:
                "În platforma noastră, înțelegem că sprijinul vine sub multe forme și că fiecare contribuție poate face o diferență în viața celor aflați în nevoie.",
              date: "",
              backText:
                "Iată câteva dintre tipurile de donații pe care le acceptăm și cum fiecare tip poate schimba o viață:",
            },
          ].map((card, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                  <img
                    src={card.image}
                    alt="Card Image"
                    className="card-image"
                  />
                  <p className="card-description">{card.description}</p>
                  <p className="card-date">{card.date}</p>
                </div>
                <div className="flip-card-back">
                  <p className="card-back-text">{card.backText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
