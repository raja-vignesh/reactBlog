import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Singup from './components/auth/signup';
import Signin from './components/auth/signin';
import RecipeList from './components/recipes/recipeList';
import CreateRecipe from './components/recipes/createRecipe';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route exact path='/signup' component={Singup}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/recipeList' component={RecipeList}/>
        <Route exact path='/createRecipe' component={CreateRecipe}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
