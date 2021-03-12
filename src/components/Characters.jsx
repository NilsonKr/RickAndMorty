import React from 'react'
import './styles/Characters.css'
import CharactersList from './CharactersList'
import Pages from '../components/Pages'
import loader from '../assets/loader.gif'

class Characters extends React.Component{
  constructor(props){
    super(props);

    
    this.state ={
      page: props.page ,
      currentPage: 1,
      error: null,
      loading: true,
      data : {
        results : []
      }
    }
    this.api = "https://rickandmortyapi.com/api/character/?page="
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try {
      const response = await fetch(this.api + this.state.page)
      const data = await response.json()


      if(!response.ok){
        throw new Error(`Error With Status ${response.status}`)
      }
      
      this.setState({ 
        loading: false, 
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
      })

    } catch (error) {
   
      this.setState({loading: false, error: error })
    }
  }

  render(){
    if(this.state.error){
      return (
        <div className="characters__container">
          <h2>❌{this.state.error.message}😨</h2>
        </div>
      )
    }

    return (
      <React.Fragment>

          <CharactersList data={this.state.data}  />
          {this.state.loading && (
            <div >
             <img src={loader} alt="Loader"/>
            </div>
          )}
          {this.state.data.results.length > 0 && (
            <div className="characters__showMore">
              <button onClick={this.fetchData} className="btn btn-primary">Show More</button>
              <Pages page={this.state.currentPage}/>
            </div> 
          )}

      </React.Fragment>
    )
  }
}

export default Characters