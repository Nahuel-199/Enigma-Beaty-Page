import React, { useContext } from 'react';
import "./App.css";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import CardTestimonials from './components/testimonials/CardTestimonials';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Parallax from './components/parallax/Parallax';
import Planes from './components/planes/Planes';
import ScrollUp from './components/scrollup/ScrollUp';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from "./context";
import Redes from './components/redes/Redes';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
    >
    <Toggle />
    <Header />
    <main className='main'>
    <Home />
    <Redes />
    <About />
    <Parallax />
    <CardTestimonials />
    <Planes />
    <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </div>
  );
}

export default App;
