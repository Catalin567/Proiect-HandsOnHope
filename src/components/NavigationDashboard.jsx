import { useState } from "react";
import "../styles/NavigationDashboard.css";
import logo from "../images/LOGO-HOH.png";
import { Link } from "react-router-dom";

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
      <div className="header-div">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <nav
          className={`nav-links ${showNavLinks ? "active" : ""} ${
            showSearchBar ? "shift-left" : ""
          }`}
        >
          <div className="dropdown-center">
            <a
              className="dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cine suntem?
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item">
                  <Link to="/MisiuneViziune"> Misiunea și viziunea</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <Link to="/Principii">Principii după care ne ghidăm</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <Link to="/ProiectiiViitor">Proiecții pentru viitor</Link>
                </a>
              </li>
            </ul>
          </div>
          <Link to="/CeFacem">Ce facem?</Link>
          <div className="dropdown-center">
            <a
              className="dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Implică-te și tu
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Voluntariat
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Campanii
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Redirecționează
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Donează
                </a>
              </li>
            </ul>
          </div>
          <Link to="/solicita-ajutor">Solicită ajutor</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <div className="right-side">
          <div className="search">
            <div className={`search-bar ${showSearchBar ? "active" : ""}`}>
              <input
                type="text"
                placeholder="Căutare..."
                onFocus={() => setShowSearchBar(true)}
                onBlur={() => setShowSearchBar(false)}
              />
            </div>
            <div className="search-icon" onClick={toggleSearchBar}>
              <i className="bx bx-search"></i>
            </div>
          </div>
          <a className="loginLink" href="login.html"><i className="bx bxs-user"></i></a>
          <div className="hamburger" onClick={toggleNavLinks}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
