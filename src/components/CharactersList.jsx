import React from 'react'
import Card from './Card'

function CharactersList(props){
  const data = props.data.results

  return (
    <div className="characters__list">
      {data.map(char => <Card name={char.name} src={char.image}/> )}
    </div>
  )
}

export default CharactersList