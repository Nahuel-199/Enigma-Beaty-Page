import React from "react";
import logo from "../../assets/logopng3.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Enigma Beauty Services</h1>
        <img src={logo} alt="logo" className="logo-footer" />
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
            href="https://www.instagram.com/enygmafem/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="mailto:enygma@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bx-mail-send"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100090458807654&mibextid=ZbWKwL"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook-circle"></i>
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
