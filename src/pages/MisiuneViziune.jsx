import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import p1 from "../images/mv-hoh1.jpeg";
import p2 from "../images/mv-hoh2.png";
import p3 from "../images/mv-hoh3.png";
import "../styles/MisiuneViziune.css";
import l1 from "../images/Altex.png";
import l2 from "../images/Careffour.png";
import l3 from "../images/Kaufland.png";

function MisiuneViziune() {
  return (
    <div>
      <Navigation />
      <div className="upper-side" style={{ backgroundImage: `url(${p1})` }}>
        <h2 className="misiune-viziune">MISIUNEA ȘI VIZIUNEA</h2>
      </div>
      <div className="mv-mesaj1 border-bottom">
        Hands on Hope este o organizație dedicată sprijinirii comunităților
        afectate de dezastre naturale și calamități. Fondată din dorința de a
        aduce speranță și ajutor concret celor mai vulnerabili, Hands on Hope
        oferă suport de urgență și contribuie la reconstrucția vieților afectate
        de tragedii neprevăzute. Suntem o echipă de voluntari, experți și
        parteneri, uniți prin compasiune și dedicație, cu scopul de a transforma
        solidaritatea într-un gest concret de ajutor pentru cei care au cea mai
        mare nevoie.
      </div>
      <div className="viziune">
        <img src={p2}></img>
        <div>
          <h2>Viziune</h2>
          <p className="mesaj-viziune">
            Ne imaginăm o lume în care fiecare persoană afectată de o calamitate
            primește ajutorul de care are nevoie pentru a-și reconstrui viața cu
            demnitate și speranță. Viziunea noastră este să construim comunități
            reziliente și bine pregătite, unde sprijinul umanitar și
            solidaritatea să fie răspunsuri rapide și eficiente la fiecare
            criză. Credem într-o lume unde compasiunea și responsabilitatea față
            de semenii noștri sunt valori centrale, care inspiră acțiune
            imediată și susținută.
          </p>
        </div>
      </div>
      <div className="misiune">
        <div>
          <h2>Misiune</h2>
          <p className="mesaj-misiune">
            Misiunea noastră este să fim acolo când contează cel mai mult. Hands
            on Hope intervine rapid și eficient în situații de urgență, oferind
            ajutor de bază, resurse și suport emoțional celor afectați de
            dezastre naturale și crize. Ne angajăm să sprijinim refacerea
            comunităților, să le oferim speranță și putere de a merge mai
            departe, asigurându-ne că nimeni nu rămâne în urmă în fața unor
            circumstanțe devastatoare.
          </p>
        </div>
        <img src={p3}></img>
      </div>
      <div className="parteneri">
        <p>Partenerii noștri</p>
        <div>
          <img src={l1} />
          <img src={l2} />
          <img src={l3} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MisiuneViziune;
