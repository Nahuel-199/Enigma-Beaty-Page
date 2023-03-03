import React from "react";
import logo from "../../assets/logopng2.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
       {/*  <h1 className="footer__title">Enigma Beauty Services</h1> */}
        <img src={logo} alt="logo" className="logo-footer" />

        <div className="footer__social">
          <a
            href="https://www.instagram.com/enygmafem/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram" style={{animationDelay: "2s",borderRadius: "40px",color: "white", background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            boxShadow: "0px 3px 10px rgba(0,0,0,.25)"
           }}></i>
          </a>

          <a
            href="https://walink.co/8b9b36"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-whatsapp" style={{color: "green"}}></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100090458807654&mibextid=ZbWKwL"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook-circle" style={{color: "#00008c",background: "white"}}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
