import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Pages.css'

function Pages(props){
  return (
    <React.Fragment>
      <section className="pages__container ">
        <span className="arrows left indicator"></span>
        <Link to="/page/1">
          <div className="pages__indicator indicator">{props.page}</div>
        </Link>
        <Link to="/page/2">
          <div className="pages__indicator indicator">{props.page + 1}</div>
        </Link>
        <Link to="/page/3">
          <div className="pages__indicator indicator">{props.page + 2}</div>
        </Link>
        <span className="arrows right indicator"></span>
      </section>
    </React.Fragment>
  )
}

export default Pages