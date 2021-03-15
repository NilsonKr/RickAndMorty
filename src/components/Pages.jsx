import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Pages.css'




class Pages extends React.Component{
  constructor(props){
    super(props);

    this.state={
      pageNumber : props.actualPage,
      item1 : props.page,
      item2 : props.page + 1,
      item3 : props.page + 2
    }

    if(props.page === 34){
      this.state={
        pageNumber : props.actualPage,
        item1 : props.page,
        item2 : props.page ,
        item3 : props.page ,
      }
    }

  }
  componentDidMount(){
    this.handleClick()
  }

  componentDidUpdate = async(prevProps) => {
    if(prevProps !== this.props){
    await this.setState({
        pageNumber : this.props.actualPage,
        item1 : this.props.page,
        item2 : this.props.page + 1,
        item3 : this.props.page + 2
      })
      this.handleClick()
    }
  }

  handleClick = ev => {
    const pageIndicators = document.querySelectorAll(`.pageId`)

    pageIndicators.forEach(indicator => {
      const id = parseInt(indicator.id)
       
      if(this.state.pageNumber === id){
        indicator.style.border = '4px solid black'
      }else{
        indicator.style.border = '4px solid var(--special-color)'
      }
    })
    // console.log(pageIndicators)
  }
  render(){
    return (
      <React.Fragment>
        <section className="pages__container ">
          <span onClick={this.props.handleBack} className="arrows left indicator"></span>
          <Link to={`/page/${this.state.item1}`}  onClick={this.handleClick}>
  
            <div className="pages__indicator indicator pageId" id={this.state.item1}>{this.state.item1}</div>
  
          </Link>
          <Link to={`/page/${this.state.item2}`}  onClick={this.handleClick}>
  
            <div className="pages__indicator indicator pageId" id={this.state.item2}>{this.state.item2}</div>
  
          </Link>
          <Link to={`/page/${this.state.item3}`}  onClick={this.handleClick}>
  
            <div className="pages__indicator indicator pageId" id={this.state.item3}>{this.state.item3}</div> 
                                                                                    {/* Links To the corresponding page to render */}
          </Link>
          <span onClick={this.props.handlePass} className="arrows right indicator"></span>
  
        </section>
      </React.Fragment>
    )
  }
}

export default Pages