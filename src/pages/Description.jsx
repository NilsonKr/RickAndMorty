import React from 'react'
import './styles/Description.css'
import CharacterInfo from '../components/CharacterInfo'
import loader from '../assets/loader.gif'


class Description extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data : undefined,
      error: null
    }

    this.api = 'https://rickandmortyapi.com/api/character/'

    const path = props.location.pathname.split('/').slice(-1)
    this.id = parseInt(path[0])

  }
  componentDidMount = async () => {
    this.setState({loading: true, error: null,})

    try {
      const response = await fetch(this.api + this.id)
      const  data = await response.json()

      if(!response.ok){
        throw new Error(`Error With Status ${response.status}`)
      }

      this.setState({loading: false, data})

    } catch (error) {
      
      this.setState({loading: false, error: error.message})
    }

  }

  render(){
    if(this.state.loading){
      return (
        <div className="loader">
          <img src={loader} alt="Loader"/>
        </div>
      )
    }
    if(this.state.error){
      return (
        <div className="error">
          <h2>❌{this.state.error}😨</h2>
        </div>
      )
    }
    return (
      <React.Fragment>
        {this.state.data &&(
          <CharacterInfo data={this.state.data}/>
        )}
      </React.Fragment>
    )
  }
}


export default Description