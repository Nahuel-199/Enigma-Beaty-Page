import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import marcas from "../../assets/marcasTodas.png"
import "./portfolio.css";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="work container section" id="proyectos">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
      Quiénes nos eligen
      </h2>
        <div className="container-img">
          <img src={marcas} alt="" />
        </div>
    </section>
  );
};

export default Portfolio;
