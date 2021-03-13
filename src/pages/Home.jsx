import React from 'react'
import './styles/Home.css'
import CharactersList from '../components/CharactersList'
import Pages from '../components/Pages'
import loader from '../assets/loader.gif'


class Home extends React.Component{
  constructor(props){
    super(props);
    this.getPage = this.getPage.bind(this)
    
    this.state ={
      page: 1,
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
  componentDidUpdate = async (prevProps) => {
    if(prevProps.location.pathname !== this.props.location.pathname){
      await this.getPage(this.props)
      this.fetchData()
      // console.log(this.props)
    }
  }

  getPage = async (props) => {
    const path = props.location.pathname.split('/').slice(-1)     //Get the page location to fetch the corresponding data
    const page = parseInt(path[0])
                                                 //Setting the fetching data states , page to render , and the pointer to the current page  
    await this.setState({
      page,
    })
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
         <CharactersList data={this.state.data}  />

         {this.state.loading && (
            <div >
             <img src={loader} alt="Loader"/>
            </div>
          )}
          {this.state.data.results.length > 0 && (
            <div className="characters__showMore">
              <Pages page={this.state.currentPage}/>    {/*Show the pages carousel if theres items rendered*/}
            </div> 
          )}


        </div>
      </React.Fragment>
    )
  }
}

export default Home