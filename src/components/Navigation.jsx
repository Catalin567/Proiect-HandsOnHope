import { useState } from "react";
import "../styles/Navigation.css";
import logo from "../images/LOGO-HOH.png";

function Navigation() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks((prev) => !prev);
  };

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  return (
    <header className="header-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleNavLinks}>
          <i className="bx bx-menu"></i>
        </div>
        <nav
          className={`nav-links ${showNavLinks ? "active" : ""} ${
            showSearchBar ? "shift-left" : ""
          }`}
        >
          <div className="dropdown">
            <a className="dropdown-toggle" href="#">
              Cine suntem?
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Misiunea și viziunea
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Principii după care ne ghidăm
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Proiecții pentru viitor
                </a>
              </li>
            </ul>
          </div>
          <a href="#services">Ce facem?</a>
          <div className="dropdown">
            <a className="dropdown-toggle" href="#">
              Implică-te și tu
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <a href="#help">Solicită ajutor</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="right-side">
          <div className="search">
            <div className={`search-bar ${showSearchBar ? "active" : ""}`}>
              <input type="text" placeholder="Căutare..." />
            </div>
            <div className="search-icon" onClick={toggleSearchBar}>
              <i className="bx bx-search"></i>
            </div>
          </div>
          <i className="bx bxs-user"></i>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
