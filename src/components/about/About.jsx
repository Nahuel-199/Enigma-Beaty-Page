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
      <span className="section__subtitle">
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
          <p className="about__description"style={{ color: darkMode && "#fff" }}>
            ¿Cuáles son los beneficios que este tratamiento brinda, más allá de
            lo estético?
          </p>
          <p className="about__description">
            Una de sus cualidades más importantes es la de revertir la
            incontinencia urinaria de esfuerzo de bajo grado, es decir, la
            pérdida de orina que ocurre al toser, reírse, estornudar o saltar. A
            su vez, mejora los síntomas genitourinarios frecuentes en
            menopausia: adelgazamiento, sequedad e inflamación de las paredes
            vaginales por la disminución de estrógenos. También aumenta la
            lubricación, brinda mayor sensibilidad en la vulva y disminuye la
            dispareunia (dolor durante el coito).
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
