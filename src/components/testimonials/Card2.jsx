import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import { Data } from "./Data2";
import "./card2.css";

const Card2 = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='container-card2' id="clientes">
        <h2 style={{color: darkMode && "#fff"}} className="section__title">
         Efectos
          </h2>
        <div 
        className="card2__container">
             {Data.map(({ id, image }) => {
                return (
                    <div className="card2__card" key={id}>
                        <img src={image} alt="imageTestimonial" className='card2__img' />
                    </div>
                );
             })}
        </div>
        </section>
  )
}

export default Card2