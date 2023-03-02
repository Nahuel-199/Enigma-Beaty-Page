import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import { Data } from "./Data3";
import "./card3.css";

const Card3 = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='container-card3' id="clientes">
        <h2 style={{color: darkMode && "#fff"}} className="section__title">
           Experiencia Clínica
          </h2>
          <div className="card3__container">
             {Data.map(({ id, image }) => {
                return (
                    <div className="card2__card" key={id}>
                        <img src={image} alt="imageTestimonial" className='card3__img' />
                    </div>
                );
             })}
        </div>
        </section>
  )
}

export default Card3