import React from 'react'
import HeaderIcon from "../assets/icon.svg"
import './styles/Header.css'

function Header(){
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__home">
          <img src={HeaderIcon} alt="Icon Header"/>
        </div>
        <div  className="header__details">
          <ul>
            <li className="details--item">
              <a href="/">Contact</a>
            </li>
            <li className="details--item">
              <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer" >Api</a>
            </li>
          </ul>
        </div>
      </header>

    </React.Fragment>
  )
}

export default Header