import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import p1 from "../images/mp-hoh9.jpg";
import p2 from "../images/pv-hoh1.png";
import p3 from "../images/pv-hoh2.png";
import p4 from "../images/pv-hoh3.png";
import p5 from "../images/pv-hoh4.png";
import "../styles/ProiectiiViitor.css";
function ProiectiiViitor() {
  return (
    <>
      <Navigation />
      <div className="upper-side" style={{ backgroundImage: `url(${p1})` }}>
        <h2>PROIECTII PENTRU VIITOR</h2>
      </div>
      <div className="pv">
        <div className="p">
          <p>
            În viitor, Hands on Hope își propune să extindă aria de intervenți
            și să ajute un număr mai mare de comunități din întreaga lume.
          </p>
          <img src={p2}></img>
        </div>
        <div className="p">
          <img src={p3}></img>
          <p>
            Vom dezvolta echipe de intervenție rapidă, pregătite să răspundă
            oricărui tip de criză, și vom investi în programe educaționale de
            prevenire și pregătire pentru situații de urgență.
          </p>
        </div>
      </div>
      <div className="pv">
        <div className="p">
          <p>
            Ne propunem să creăm un fond de rezervă pentru situații critice,
            capabil să asigure un răspuns constant și prompt la dezastrele
            naturale.
          </p>
          <img src={p4}></img>
        </div>
        <div className="p">
          <img src={p5}></img>
          <p>
            Prin tehnologie și parteneriate globale, ne dorim să ajungem mai
            repede și mai eficient la cei care au cea mai mare nevoie, lăsând în
            urmă nu doar ajutor, ci și o bază solidă pentru viitor.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProiectiiViitor;
