import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Card.css'

function Card(props){
  return (
    <React.Fragment>
      <Link to={`/character/${props.id}`}>
        <div className="card__container">
          <img src={props.src} alt="Img RickAndMorty"/>
          <div className="card__details">
            <h2>{props.name}</h2>
          </div>
        </div>
      </Link>  
    </React.Fragment>
  )
}

export default Card