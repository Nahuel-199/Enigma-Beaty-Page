import React from 'react';
import logo from "../../assets/logopng1.png";
import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
          <h2 className="section__title title_home">Belleza para ti y el mundo</h2>
          <img src={logo} alt="logo" className='logo-home'/>

          <div className="header-btns">
            <a href="#unete" className='header-btn'>ÚNETE A NOSOTRAS</a>
        </div>
    </section>
  )
}

export default Home