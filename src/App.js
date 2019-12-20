import React from 'react';
import './assets/custom.scss'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contato' component={Contato} />
      </Switch>
    </BrowserRouter>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
)
}

export default App