import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      setSuccessMessage('');
      return;
    }

    setError('');
    setSuccessMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-addr">
        <h1 className="footer-logo">Restoring Hope. One Hand at a Time</h1> 
        <div className="footer-subscribe">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
        </div>
      </div>
      <ul className="footer-nav">
        <li className="nav-item">
          <h2 className="nav-title">Adresă</h2>
          <ul className="nav-ul">
            <li><a href="#">Strada Solidarității, Nr. 10. Iași, Romania</a></li>
          </ul>
          <h2 className="nav-title">Contact</h2>
          <ul className="nav-ul">
            <li><a href="#">Email:</a></li>
            <li><a href="#">Telefon:</a></li>
          </ul>
          <h2 className="nav-title">Termeni</h2>
          <ul className="nav-ul">
            <li><a href="#">Politică de confidențialitate și cookie-uri</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <h2 className="nav-title">Implică-te</h2>
          <ul className="nav-ul">
            <li><a href="#">Fii voluntar</a></li>
            <li><a href="#">Donează</a></li>
          </ul>
          <h2 className="nav-title">Cont IBAN</h2>
          <ul className="nav-ul">
            <li><a href="#">cont1</a></li>
            <li><a href="#">cont2</a></li>
            <li><a href="#">cont3</a></li>
          </ul>
          <div className="social-icons">
            <i className = "bx bxl-facebook-circle"></i>
            <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-instagram' ></i>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
