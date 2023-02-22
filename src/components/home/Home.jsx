import React from 'react';
import "./home.css";
/* import Data from './Data';
import ScrollDown from './ScrollDown'; */

const Home = () => {
  return (
    <section className="home section" id="home">
          <h2 className="section__title title_home"> Encuentra tu belleza</h2>
          <span className="section__subtitle">Belleza para ti y el mundo</span>  

          <div className="header-btns">
            <a href="#unete" className='header-btn'>ÚNETE A NOSOTRAS</a>
        </div>
    </section>
  )
}

export default Home