import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Cart from './component/Cart';
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
        </div>
      </BrowserRouter>
    );

  }

}

export default App;