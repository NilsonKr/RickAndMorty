import React from 'react'
import './styles/Home.css'
import Characters from '../components/Characters'

class Home extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Characters />
      </React.Fragment>
    )
  }
}

export default Home