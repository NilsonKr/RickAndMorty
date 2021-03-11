import React from 'react'
import './styles/Card.css'
import proofImg from '../assets/tryImg.jpg'

function Card(){
  return (
    <React.Fragment>
      <div className="card__container">
        <img src={proofImg} alt="Img RickAndMorty"/>
        <div className="card__details">
          <h2>Character's Name</h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card