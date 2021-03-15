import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './pages/layout.jsx'
import Home from './pages/Home'
import Description from './pages/Description'
import Contact from './pages/Contact'
import Search from './pages/Search'
// import Page from './pages/Page'


function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Switch>                                          {/*Setting Up The routes with a layout Done*/} 
          <Route exact path="/" component={Home}/>
          <Route exact path="/page/:pageId" component={Home}/>
          <Route exact path="/contact/" component={Contact} />  
          <Route exact path="/search/:queryId" component={Search} />     
          <Route path="/character/" component={Description}/>     
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App