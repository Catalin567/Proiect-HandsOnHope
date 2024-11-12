import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import p1 from "../images/pv.png";
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
        <h2>PROIECȚII PENTRU VIITOR</h2>
      </div>
      <div className="pv">
        <div className="proiectie">
          <p>
            În viitor, <span className="highlight">Hands On Hope</span> își
            propune să extindă aria de intervenți și să ajute un număr mai mare
            de comunități din <span className="highlight">întreaga lume</span>.
          </p>
          <img src={p2} alt="Future Projections 1"></img>
        </div>
        <div className="proiectie">
          <img src={p3} alt="Future Projections 2"></img>
          <p>
            Vom dezvolta
            <span className="highlight"> echipe de intervenție rapidă</span>,
            pregătite să răspundă oricărui tip de criză, și vom investi în
            <span className="highlight"> programe educaționale </span>de
            prevenire și pregătire pentru situații de urgență.
          </p>
        </div>
      </div>
      <div className="pv">
        <div className="proiectie">
          <p>
            Ne propunem să creăm un{" "}
            <span className="highlight"> fond de rezervă </span> pentru situații
            critice, capabil să asigure un răspuns constant și prompt la
            <span className="highlight"> dezastrele naturale</span>.
          </p>
          <img src={p4} alt="Future Projections 3"></img>
        </div>
        <div className="proiectie">
          <img src={p5} alt="Future Projections 4"></img>
          <p>
            Prin tehnologie și parteneriate globale, ne dorim să ajungem mai
            <span className="highlight"> repede</span> și mai{" "}
            <span className="highlight"> eficient</span> la cei care au cea mai
            mare nevoie, lăsând în urmă nu doar ajutor, ci și o bază solidă
            pentru <span className="highlight"> viitor</span>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProiectiiViitor;
