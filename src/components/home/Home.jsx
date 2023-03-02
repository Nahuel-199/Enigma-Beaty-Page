import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import logo from "../../assets/logopng1.png";
import "./home.css";

const Home = () => {
  const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <section style={{backgroundColor: darkMode && "#fff"}} className="home section" id="home">
      <h2 className="section__title title_home">Rejuvenecimiento Vaginal </h2>
      <span style={{color: darkMode && "gray"}}  className="section__subtitle title_home">
        Hiperlaxitud vaginal,
      </span>
      <span style={{color: darkMode && "gray"}}  className="section__subtitle subtitle_home">
        Incontinencia Urinaria,
      </span>
      <span style={{color: darkMode && "gray"}}  className="section__subtitle subtitle_home">Difunción Sexual,</span>
      <span style={{color: darkMode && "gray"}}  className="section__subtitle subtitle_home">
        Revierte los sintomas asociados,
      </span>
      <span style={{color: darkMode && "gray"}}  className="section__subtitle subtitle_home">
        a la menopausia (sequedad vaginal)
      </span>
      <img src={logo} alt="logo" className="logo-home" />
    </section>
  );
};

export default Home;
