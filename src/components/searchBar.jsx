import React from 'react'

import searchIcon from '../assets/search.svg'


function SearchBar(props){

  return (
    <form className="search__container" onSubmit={props.handleSubmit}>
      <input onChange={props.setQuery} type="text" placeholder="Search A Character" name="search"/>
        <button className="search__submit">
          <img 
            src={searchIcon} 
            alt="Search" 
            className="search__icon"
          />
        </button>
    </form>
  )
}

export default SearchBar

