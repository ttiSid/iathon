import React, { useState, useEffect } from "react";

import logo from "../images/logo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isMenuOpen && !e.target.closest(".nav__container")) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
      <div className="nav__container">
        <img
          className="nav__image"
          src={logo}
          alt="logo do site IATHON IA no diabetes"
        ></img>
        <button className="nav__toggle" onClick={toggleMenu}>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
        </button>
        <ul className={`nav__menu ${isMenuOpen ? "nav__menu--open" : "nav__menu-closed"}`}>

          <li>
            <a className="nav__button" href="#header" onClick={toggleMenu}>
              INICIO
            </a>
          </li>
          <li>
            <a className="nav__button" href="#world" onClick={toggleMenu}>
              MUNDO
            </a>
          </li>
          <li>
            <a className="nav__button" href="#ia" onClick={toggleMenu}>
              IA NO DIABETES
            </a>
          </li>
          <li>
            <a className="nav__button" href="#types" onClick={toggleMenu}>
              TIPOS
            </a>
          </li>
          <li>
            <a className="nav__button" href="#country" onClick={toggleMenu}>
              BRASIL
            </a>
          </li>
          <li>
            <a className="nav__button" href="#test" onClick={toggleMenu}>
              TESTE
            </a>
          </li>
          <li>
            <a className="nav__button" href="#footer" onClick={toggleMenu}>
              CONTATOS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
