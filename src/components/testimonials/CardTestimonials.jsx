import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import { Data } from "./Data";
import "swiper/css";
import "swiper/css/pagination";
import "./cardTestimonials.css";

const CardTestimonials = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='testimonial container section' id="clientes">
        <h2 style={{color: darkMode && "#fff"}} className="section__title">
          Que beneficios tiene nuestro servicio
          </h2>
        <div className="testimonial__container">
             {Data.map(({ id, title, description }) => {
                return (
                    <div className="testimonial__card" key={id}>
                       {/*  <img src={image} alt="imageTestimonial" className='testimonial__img' /> */}
                        <h3 className="testimonial__name">{title}</h3>
                        <p style={{color: darkMode && "#676767"}} className="testimonial__description">{description}</p>
                    </div>
                );
             })}
        </div>
        </section>
  )
}

export default CardTestimonials