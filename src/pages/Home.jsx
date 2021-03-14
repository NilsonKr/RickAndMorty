import React from 'react'

import CharactersList from '../components/CharactersList'
import Pages from '../components/Pages'
import SearchBar from '../components/searchBar'

import './styles/Home.css'
import loader from '../assets/loader.gif'


class Home extends React.Component{
  constructor(props){
    super(props);
    this.getPage = this.getPage.bind(this)
    this.handlePagePass = this.handlePagePass.bind(this)
    this.handlePageBack = this.handlePageBack.bind(this)

    this.state ={
      query: '',     //Search Character
      page: 1,        //Page to render
      currentPage: 1,     // Page pointer to set up the pages carousel                                                  
      error: null,
      loading: true,
      data : {
        info: undefined,
        results : []
      }
    }

    this.api = "https://rickandmortyapi.com/api/character/?page="
  }

  
  componentDidMount(){
    this.fetchData()
  }

  componentDidUpdate = async (prevProps) => {
    if(prevProps.location.pathname !== this.props.location.pathname){
      await this.getPage(this.props)
      this.fetchData()
      // console.log(this.props)
    }
  }
  setQuery = ev => {
    this.setState({query: ev.target.value})
  }

  handleSubmit = ev =>{
    ev.preventDefault()
    this.props.history.push(`/search/${this.state.query}`)
  }

  getPage = async (props) => {
    const path = props.location.pathname.split('/').slice(-1)     //Get the page location to fetch the corresponding data
    const page = parseInt(path[0])
                                                 //Setting the fetching data states , page to render , and the pointer to the current page  
    await this.setState({
      page,
    })
  }

  handlePagePass(){
    if(this.state.currentPage > this.state.data.info.pages - 3){
      return
    }
    this.setState({currentPage:this.state.currentPage + 1})
  }

  handlePageBack(){
    if(this.state.currentPage === 1){
      return
    }
    this.setState({currentPage:this.state.currentPage - 1})
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
    try {
      const response = await fetch(this.api + this.state.page)
      const data = await response.json()                    


      if(!response.ok){
        throw new Error(`Error With Status ${response.status}`)     //Throwing out a error if the request came out wrong
      }
      
      this.setState({ 
        loading: false, 
        data: {
          info: data.info,
          results: data.results
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
          <h2>❌{this.state.error.message}😨</h2>     {/* Render the error message if theres a error*/ }
        </div>
      )
    }

    return (
      <React.Fragment>
        <div className="characters__container">
         <SearchBar handleSubmit={this.handleSubmit} setQuery={this.setQuery} />
         <CharactersList data={this.state.data}  />

         {this.state.loading && (
            <div >
             <img src={loader} alt="Loader"/>
            </div>
          )}
          {this.state.data.results.length > 0 && (
            <div className="characters__showMore">
              <Pages page={this.state.currentPage} handlePass={this.handlePagePass} handleBack={this.handlePageBack}/>    {/*Show the pages carousel if theres items rendered*/}
            </div> 
          )}


        </div>
      </React.Fragment>
    )
  }
}

export default Home