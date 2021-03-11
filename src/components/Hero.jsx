import React from 'react'
import './styles/Hero.css'
import LogoHero from '../assets/heroLogo.png'

function Hero(){
  return (
    <React.Fragment>
      <section className="Hero">
        <img src={LogoHero} alt="Hero Logo Rick And Morty"/>
      </section>
    </React.Fragment>
  )
}

export default Hero