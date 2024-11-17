import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Register.css";
function Register() {
  const closeBanner = () => {
    document.getElementById("right-banner").style.display = "none";
  };

  return (
    <div>
      <Navigation />
      <div id="main-frame">
        <h1 className="login-title">CREEAZĂ UN CONT</h1>
        <div id="login-logos">
          <img
            src="login-assets/facebook.png"
            className="login-icons"
            alt="Facebook"
          />
          <img
            src="login-assets/google.webp"
            className="login-icons"
            alt="Google"
          />
        </div>

        <form action="login-assets/">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nume utilizator"
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Adresa de e-mail"
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Parolă"
          />
          <br />
          <br />
          <input type="submit" value="CREEAZĂ CONTUL" id="submit" />
        </form>
      </div>

      {/* Right Banner */}
      <div className="right-banner" id="right-banner">
        <img
          src="login-assets/logo.png"
          className="right-banner-logo"
          alt="Logo"
        />
        <p className="right-banner-text">
          BINE AI VENIT!
          <br />
          <br />
          Alătură-te misiunii nostre și împreună putem construi un viitor mai
          bun!
        </p>
        <Link to="/Login">
          <button className="right-banner-button">INTRĂ ÎN CONT</button>
        </Link>
      </div>

      <div
        className="close-right-banner"
        id="close-right-banner"
        onClick={closeBanner}
      ></div>
      <Footer />
    </div>
  );
}

export default Register;
