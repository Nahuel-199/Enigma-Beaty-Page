import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import mq from "../../assets/fotoP.jpeg";
import "./about.css";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="about section" id="about">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
        Rejuvenecimiento Íntimo No Invasivo
      </h2>
      <span className="about-sub">
        ¿A qué se conoce como rejuvenecimiento vaginal?
      </span>
      <div className="about__container container grid">
        <img src={mq} alt="about" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            El rejuvenecimiento vaginal va mucho más allá de lo estético o de un
            tema frívolo, es una práctica que funciona a nivel externo(vulvar) e
            interno(vaginal), capaz de devolver la estructura, lubricación,
            sensibilidad y estrechez normal de las paredes vaginales y a la
            vulva
          </p>
          <p className="about__description2">
         En tan sólo 2 sesiones conseguimos
      </p>
      <p className="about__description">
             Solucionar la incontinencia urinaria de esfuerzo,
             Incrementar la sensibilidad y el placer,
             Recuperar la elasticidad interna y la lubricación natural,
             Mejorar notablemente la disfunción sexual,
             Mejorar estéticamente el aspecto, devolviendo la confianza y la autoestima
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
