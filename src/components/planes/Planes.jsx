import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import { Data } from './data';
import "./planes.css";
import PlanesCard from './PlanesCard';

const Planes = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <section id="planes">
         <h2 style={{color: darkMode && "#fff"}} className="section__title">Como ellos potenciá tu marketing digital con nuestros planes</h2>
                    <div className="products">
                    {Data &&
                      Data.map((product, i) => (
                        <PlanesCard key={i} product={product} />
                        ))}
                  </div>

    </section>
  )
}

export default Planes