import { useState } from "react";
import "../styles/Navigation.css";
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
      <div className="header">
        <Link to="/#up">
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
                  <Link to="/MisiuneViziune#up"> Misiunea și viziunea</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <Link to="/Principii#up">Principii după care ne ghidăm</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <Link to="/ProiectiiViitor#up">Proiecții pentru viitor</Link>
                </a>
              </li>
            </ul>
          </div>
          <Link to="/CeFacem#up">Ce facem?</Link>
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
                  <Link to="/Voluntariat#up">Voluntariat</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <Link to="/Campanii#up">Campanii</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to="/Redirectioneaza#up">Redirecționează</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to="/Doneaza#up">Donează</Link>
                </a>
              </li>
            </ul>
          </div>
          <Link to="/solicita-ajutor#up">Solicită ajutor</Link>
          <Link to="/Blog#up">Blog</Link>
          <Link to="/Contact#up">Contact</Link>
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
          <a className="loginLink" href="Login">
            <i className="bx bxs-user"></i>
          </a>
          <div className="hamburger" onClick={toggleNavLinks}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
