import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Enigma Beauty Services</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
             Inicio
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
            Que hacemos
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
             Servicios
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
             Nosotros
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/gabrielnahuel_/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/Nahuel-199"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; 2020 Enigma Beaty Page
        </span>
      </div>
    </footer>
  );
};

export default Footer;
