import { useState } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Te rog introdu o adresă de email validă.");
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage("Mulțumim pentru abonare!");
    setEmail("");
  };

  return (
    <>
      <footer className="container-fluid mt-5">
        <hr className="divider"></hr>
        <div className="row mx-3 pt-5">
          <div className="col-12 col-lg-5">
            <div className="footer-addr">
              <h1 className="footer-logo">
                Restoring HOPE. <br /> One Hand at a Time
              </h1>
              <p>
                <span className="fw-semibold">Rămâi informat:</span>
                <br />
                Abonează-te la newsletter-ul nostru pentru a primi ultimele
                știri despre campaniile noastre și modalitățile prin care poți
                ajuta.
              </p>
              <div className="footer-subscribe">
                <form onSubmit={handleSubmit}>
                  <input
                    className="search-input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Introduceți adresa de email"
                  />
                  <button className="btn-abonare" type="submit">
                    Abonare
                  </button>
                  {error && <p className="error-message">{error}</p>}
                  {successMessage && (
                    <p className="success-message">{successMessage}</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 nav-item">
            <h2 className="nav-title">Adresă</h2>
            <p href="#">Strada Solidarității, Nr. 10. Iași, Romania</p>
            <h2 className="nav-title">Contact</h2>
            <ul>
              <li className="p-0 m-0">
                Email:
                <a href="mailto:voluntari@handsonhope.org">
                  {" "}
                  info@handsonhope.org,
                  <br /> voluntari@handsonhope.org
                </a>
              </li>
              <li className="p-0 m-0">
                Telefon:<a href="tel:0748473843"> +40 XXX XXX XXX</a>
              </li>
            </ul>
            <h2 className="nav-title">Termeni</h2>
            <a href="#">Politică de confidențialitate și cookie-uri</a>
          </div>

          <div className="col-12 col-lg-3 nav-item">
            <h2 className="nav-title">Implică-te</h2>
            <a href="#">
              <Link to="/Voluntariat#up">Fii voluntar</Link>
            </a>
            <br />
            <a href="#">
              <Link to="/Doneaza#up">Donează</Link>
            </a>
            <h2 className="nav-title">Cont IBAN</h2>
            <p className="p-0 m-0 me">
              RO12 BANK 0000 1111 2222 3333 (pentru donații în RON)
            </p>
            <p className="p-0 m-0">
              RO34 BANK 0000 4444 5555 6666 (pentru donații în EUR)
            </p>
            <p className="p-0 m-0">
              RO56 BANK 0000 7777 8888 9999 (pentru donații în USD)
            </p>

            <div className="social-icons">
              <a href="https://www.facebook.com">
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a className="ms-2" href="https://www.x.com">
                <i className="bx bxl-twitter"></i>
              </a>
              <a className="ms-2" href="https://www.instagram.com">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
