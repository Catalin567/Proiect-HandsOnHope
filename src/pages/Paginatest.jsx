import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/SolicitaAjutor.css";

function Paginatest() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login data:', formData);
  };
  return (
    <div className="solicita-ajutor-container">
      <Navigation />
      
      <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>

        <div className="form-footer">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Create Account</a>
        </div>
      </form>
    </div>
      <main className="help-rmain-content">
        
      <h1 className="textpula">
            O chestie de test pula pula pizda pizda
          </h1>
        <div className="chestie">
          <p className="textpula">
              O chestie de test pula pula pizda pizda
    <br></br>
              O chestie de test pula pula pizda pizda
            </p>
        </div>

      </main>

      <div class="black-banner">
          <p>Teapa fraiere</p>
      </div>
        
      <Footer />
    </div>
  );
};

export default Paginatest;