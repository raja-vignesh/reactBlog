import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
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
        <Switch>
        <Route exact path='/' component={RecipeList}/>
        <Route path='/signup' component={Singup}/>
        <Route path='/signin' component={Signin}/>
        <Route path='/createRecipe' component={CreateRecipe}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
