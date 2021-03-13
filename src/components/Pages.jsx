import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Pages.css'

function Pages(props){
  const item1 = props.page
  const item2 = props.page + 1        //Get The corresponding page to each item
  const item3 = props.page + 2

  return (
    <React.Fragment>
      <section className="pages__container ">
        <span onClick={props.handleBack} className="arrows left indicator"></span>
        <Link to={`/page/${item1}`}>
          <div className="pages__indicator indicator">{item1}</div>
        </Link>
        <Link to={`/page/${item2}`}>
          <div className="pages__indicator indicator">{item2}</div>
        </Link>
        <Link to={`/page/${item3}`}>
          <div className="pages__indicator indicator">{item3}</div>     {/* Links To the corresponding page to render */}
        </Link>
        <span onClick={ props.handlePass} className="arrows right indicator"></span>
      </section>
    </React.Fragment>
  )
}

export default Pages