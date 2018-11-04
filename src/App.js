import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Singup from './components/auth/signup';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route exact path='/signup' component={Singup}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
