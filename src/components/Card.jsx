import React from 'react'
import './styles/Card.css'

function Card(props){
  return (
    <React.Fragment>
      <div className="card__container">
        <img src={props.src} alt="Img RickAndMorty"/>
        <div className="card__details">
          <h2>{props.name}</h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card