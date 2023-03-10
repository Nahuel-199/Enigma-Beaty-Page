import React, { useState } from "react";
import logo from "../../assets/logopng3.png";
import "./header.css";

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
         Enygma Fem
        </a>
        <img src={logo} alt="img" className="img-logo-header" />
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home"
              onClick={() => setActiveNav("#home")} 
              className={
                activeNav === "#home" ? "nav__link active-link"
                : "nav__link"
              }>
              <i class="uil uil-estate nav__icon"></i>
               Inicio
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#about"
              onClick={() => setActiveNav("#about")} 
              className={
                activeNav === "#about" ? "nav__link active-link"
                : "nav__link"
              }
               >
                <i className="uil uil-user nav__icon"></i>
                Que hacemos
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#clientes" 
              onClick={() => setActiveNav("#skills")} 
              className={
                activeNav === "#clientes" ? "nav__link active-link"
                : "nav__link"
              }>
                <i className="uil uil-file-alt nav__icon"></i>
               Servicios
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#planes" 
              onClick={() => setActiveNav("#contact")} 
              className={
                activeNav === "#planes" ? "nav__link active-link"
                : "nav__link"
              }>
                <i className="uil uil-message nav__icon"></i>
                Nosotros
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#contact" 
              onClick={() => setActiveNav("#contact")} 
              className={
                activeNav === "#contact" ? "nav__link active-link"
                : "nav__link"
              }>
                <i className="bx bx-mail-send nav__icon"></i>
                Contancto
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
