import React from 'react'
import './styles/Characters.css'
import CharactersList from './CharactersList'

class Characters extends React.Component{
  constructor(props){
    super(props);
    this.api = 'http://rickandmortyapi.com/api/character'

    this.state ={
      error: null,
      loading: true,
      data : undefined
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try {
      const response = await fetch(this.api)
      const data = await response.json()

      this.setState({ loading: false, data})

    } catch (error) {
      this.setState({loading: false, error })
    }
  }

  render(){
    if(this.state.loading){
      return (
        <h2>Loading....</h2>
      )
    }

    return (
      <React.Fragment>
        <div className="characters__container">
          <CharactersList data={this.state.data} />
          <div className="characters__showMore">
            <button className="btn btn-primary">Show More</button>
          </div>  
        </div>
      </React.Fragment>
    )
  }
}

export default Characters