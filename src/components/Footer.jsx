import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <>
      <footer className="container-fluid">
        <div className="row mx-3">
          <div className="col-12 col-lg-5">
            <div className="footer-addr">
              <h1 className="footer-logo">
                Restoring Hope. <br /> One Hand at a Time
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                error totam repudiandae obcaecati. Eveniet nostrum aperiam qui
                possimus ea enim earum cum magnam modi eius, quae, suscipit
                facere! Quae, consequuntur.
              </p>
              <div className="footer-subscribe">
                <form onSubmit={handleSubmit} className="form">
                  <input
                    className=""
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-success" type="submit">
                    Subscribe
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
                Email:<a href="mailto:a@yahoo.com">aaa</a>
              </li>
              <li className="p-0 m-0">
                Telefon:<a href="tel:0748473843">123</a>
              </li>
            </ul>
            <h2 className="nav-title">Termeni</h2>
            <a href="#">Politică de confidențialitate și cookie-uri</a>
          </div>

          <div className="col-12 col-lg-3 nav-item">
            <h2 className="nav-title">Implică-te</h2>
            <a href="#">Fii voluntar</a>
            <br />
            <a href="#">Donează</a>
            <h2 className="nav-title">Cont IBAN</h2>
            <p className="p-0 m-0 me">Cont 1</p>
            <p className="p-0 m-0">Cont 2</p>
            <p className="p-0 m-0">Cont 3</p>

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
