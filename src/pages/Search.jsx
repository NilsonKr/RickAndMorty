import React from 'react'

import CharactersList from '../components/CharactersList'
import SearchBar from '../components/searchBar'

import './styles/Home.css'
import loader from '../assets/loader.gif'


class Search extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      query: props.match.params.queryId.toLowerCase(),
      loading:false,
      data: {
        results: []
      },
      error:null,
    }

  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () =>{
    this.setState({loading:true, error: null})

    try{
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.query}`)
      const data = await response.json()

      if(!response.ok){
         throw new Error('Oh oH Something came out Wrong Try Again!')
      }

     this.setState({loading: false, data, query: ''})

    }catch (error){
      this.setState({loading: false, error})
    }
  }

  handleSubmit = ev =>{
    ev.preventDefault()
    if(this.state.query === ''){
      return this.props.history.push('/')
    }
    this.fetchData()
  }
  
  setQuery = ev =>{
    this.setState({query: ev.target.value})
  }

  showMore = async ev => {
    if(!this.state.data.info.next){
      return
    }
    this.setState({loading: true, error: null})

    try {
      const response = await fetch(this.state.data.info.next)
      const data = await response.json()

      if(!response.ok){
        throw new Error('oH Oh Something came out wrong , Try Again!')
      }

      this.setState({
        loading: false, 
        error: null, 
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        }
      })
    } catch (error) {
      
      this.setState({loading: false, error: error})
    }
  }


  render(){
    if(this.state.error){
      return (
        <div className="characters__container">
          <SearchBar handleSubmit={this.handleSubmit} setQuery={this.setQuery} />
          <h2>❌{this.state.error.message}😨</h2>     {/* Render the error message if theres a error*/ }
        </div>
      )
    }

    return (
      <div className="characters__container">
        
        <SearchBar handleSubmit={this.handleSubmit} setQuery={this.setQuery} />
        <CharactersList data={this.state.data}  />
        {this.state.loading === true && (
            <div >
                <img src={loader} alt="Loader"/>
            </div>
        )}
        {this.state.data.results.length > 0 && (
          <button className="search__more btn btn-primary" onClick={this.showMore}>
              Show More
          </button>
        )}
      </div>
    )
  }
}


export default Search