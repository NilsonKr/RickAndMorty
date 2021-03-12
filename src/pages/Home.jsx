import React from 'react'
import './styles/Home.css'
import Characters from '../components/Characters'

class Home extends React.Component{
  constructor(props){
    super(props);


    const path = props.location.pathname.split('/').slice(-1)
    const page = parseInt(path)

    this.state = {
      page,
    }
  }

  render(){
    return (
      <React.Fragment>
        <div className="characters__container">
          <Characters location={this.state.page}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Home