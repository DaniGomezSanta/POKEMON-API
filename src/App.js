import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react'
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Details/Details';
import { PokemonCreate } from './components/PokemonCreate/PokemonCreate';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component= {LandingPage}></Route>
        <Route path='/home'  component={Home}></Route>
        <Route path='/pokemon' component={PokemonCreate}/>
        <Route path='/detail/:id' component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
