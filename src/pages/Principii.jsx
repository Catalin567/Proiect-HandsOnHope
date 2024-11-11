import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import p1 from "../images/mp-hoh9.jpg";
import "../styles/Principii.css";
function Principii() {
  return (
    <>
      <Navigation />
      <div className="upper-side" style={{ backgroundImage: `url(${p1})` }}>
        <h2>PRINCIPII ORGANIZAȚIEI NOASTRE</h2>
      </div>
      <div className="po-1">
        <div>
          <p>
            La Hands On Hope, credem că pentru a crea un impact real și de
            durată în comunități, nu este suficient doar să oferim ajutor —
            trebuie să acționăm cu integritate, compasiune și profesionalism.
            Principiile noastre sunt fundația pe care ne construim toate
            acțiunile și inițiativele, reflectând valorile care ne ghidează în
            fiecare pas.
          </p>
          <p>
            Aceste principii au fost dezvoltate pentru a răspunde nevoilor tot
            mai mari din comunitățile vulnerabile, dar și pentru a inspira
            încredere în rândul donatorilor și voluntarilor noștri. Fiecare
            principiu este o promisiune că vom face tot posibilul pentru a
            transforma sprijinul oferit în schimbări pozitive și măsurabile.
          </p>
        </div>
        <div>
          <h2>PRINCIPII</h2>
          <ul>
            <li>1.Solidaritate și compasiune</li>
            <li>2.Transparență și integritate</li>
            <li>3.Responsabilitate socială</li>
            <li>4.Neutralitate și independență</li>
            <li>5.Eficiență și profesionalism</li>
            <li>6.Sustenabilitate și recuperare pe termen lung</li>
            <li>7.Promovarea voluntariatului și a implicării civice</li>
            <li>8.Inovație în ajutorarea comunităților</li>
          </ul>
        </div>
      </div>
      <div className="po-2">
        <p>
          Prin respectarea acestor valori, Hands On Hope își propune să fie mai
          mult decât o simplă organizație de caritate — să fie un partener de
          încredere, dedicat susținerii oamenilor și comunităților în momentele
          lor cele mai dificile.
        </p>
      </div>
      <div className="po-3">
        <div className="principiu">
          <div>
            <img src=""></img>
          </div>
          <div>
            <h3>1. Solidaritate și Compasiune</h3>
            <p>
              Suntem alături de cei aflați în nevoie, oferind sprijin
              necondiționat și respectând demnitatea fiecărei persoane afectate
              de dezastre. Ne dorim să creăm o comunitate de oameni care cred în
              puterea sprijinului reciproc și în importanța empatiei.
            </p>
          </div>
        </div>
        <div className="po-3-buttons">
          <button className="po-3-previews-btn">
            <i className="bx bxs-chevron-left"></i>
          </button>
          <button className="po-3-next-btn">
            <i className="bx bxs-chevron-right"></i>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Principii;
