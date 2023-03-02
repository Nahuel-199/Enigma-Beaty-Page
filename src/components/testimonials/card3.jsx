import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import { Data } from "./Data3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./card2.css";

const Card3 = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='container-card3' id="clientes">
        <h2 style={{color: darkMode && "#fff"}} className="section__title">
           Experiencia Clínica
          </h2>
        <Swiper 
        className="card3__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
             {Data.map(({ id, image }) => {
                return (
                    <SwiperSlide className="card3__card" key={id}>
                        <img src={image} alt="imageTestimonial" className='card3__img' />
                      {/*   <h3 className="testimonial__name">{title}</h3>
                        <p style={{color: darkMode && "#676767"}} className="testimonial__description">{description}</p> */}
                    </SwiperSlide>
                );
             })}
        </Swiper>
        </section>
  )
}

export default Card3