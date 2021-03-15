// import React from 'react'

// class Page extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       page: props.match.params.pageId,
//       loading: true,
//       error: null,
//       data: {
//         results: []
//       }
//     }

//     console.log(this.state.page)
//   }



//   render(){

//     return (
//       <div className="characters__container">
//         <SearchBar handleSubmit={this.handleSubmit} setQuery={this.setQuery} />
//         <CharactersList data={this.state.data}  />

//         {this.state.loading && (
//           <div >
//             <img src={loader} alt="Loader"/>
//           </div>
//         )}
//         {this.state.data.results.length > 0 && (
//           <div className="characters__showMore">
//             <Pages actualPage={this.state.page} page={this.state.controlPage} handlePass={this.handlePagePass} handleBack={this.handlePageBack}/>    {/*Show the pages carousel if theres items rendered*/}
//           </div> 
//         )}
//      </div>
//     )
//   }
// }

// export default Page