import React from 'react'


function CharacterInfo(props){
  return (
    <section className="description">
      <div className="description__hero cont">
          <img src={props.data.image} alt="Character"/>
      </div>
      <div className="description__name cont">
        <h2>{props.data.name}</h2>
      </div>
      <div className="description__details cont">
        <p className="description--item">Id: {props.data.id}</p>
        <p className="description--item">Status: {props.data.status}</p>
        <p className="description--item">Specie: {props.data.species}</p>
        <p className="description--item">Gender: {props.data.gender}</p>
        <p className="description--item">Origin: {props.data.origin.name}</p>
      </div>
  </section>
  )
}

export default CharacterInfo