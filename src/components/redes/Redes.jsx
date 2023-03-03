import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import "./redes.css"

const Redes = () => {
  return (
    <div className='container__redes'>
        <div className='icon__container__redes'>
          <a target="_blank" rel="noreferrer" href="https://walink.co/8b9b36">
        <BsWhatsapp className='icon__redes' />
        </a>
        </div>
    </div>
  )
}


export default Redes