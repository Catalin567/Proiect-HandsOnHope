import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Login.css";
function Login() {
  const closeBanner = () => {
    document.getElementById("right-banner").style.display = "none";
  };

  return (
    <div>
      <Navigation />
      <div id="main-frame">
        <h1 className="login-title">CONECTEAZĂ-TE</h1>
        <div id="login-logos">
          <img src="" className="login-icons" alt="Facebook" />
          <img src="" className="login-icons" alt="Google" />
        </div>

        <form action="login-assets/">
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
          <input type="submit" value="CONECTEAZĂ-TE" id="submit" />
        </form>
      </div>

      <div className="right-banner" id="right-banner">
        <img src="" className="right-banner-logo" alt="Logo" />
        <p className="right-banner-text">
          ESTI NOU AICI?
          <br />
          <br />
          Alătură-te misiunii nostre și împreună putem construi un viitor mai
          bun!
        </p>
        <Link to="/Register">
          <button className="right-banner-button">CREEAZĂ UN CONT</button>
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

export default Login;
