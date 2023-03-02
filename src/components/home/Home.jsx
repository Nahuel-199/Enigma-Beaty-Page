import React from "react";
import logo from "../../assets/logopng1.png";
import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <h2 className="section__title title_home">Rejuvenecimiento Vaginal </h2>
      <span className="section__subtitle title_home">
        Hiperlaxitud vaginal,
      </span>
      <span className="section__subtitle subtitle_home">
        Incontinencia Urinaria,
      </span>
      <span className="section__subtitle subtitle_home">Difunción Sexual,</span>
      <span className="section__subtitle subtitle_home">
        Revierte los sintomas asociados,
      </span>
      <span className="section__subtitle subtitle_home">
        a la menopausia (sequedad vaginal)
      </span>
      <img src={logo} alt="logo" className="logo-home" />
    </section>
  );
};

export default Home;
