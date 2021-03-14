import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './pages/layout.jsx'
import Home from './pages/Home'
import Description from './pages/Description'
import Contact from './pages/Contact'


function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Switch>                                          {/*Setting Up The routes with a layout Done*/} 
          <Route exact path="/" component={Home}/>
          <Route exat path="/contact/" component={Contact} />      
          <Route path="/page/" component={Home}/>
          <Route path="/character/" component={Description}/>     
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App