import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import RecipesPage from './pages/recipes/recipes.component';
import RecipePage from './pages/recipe/recipe.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/recipes/cooking/test' component={RecipePage} />
        <Route path='/recipes' component={RecipesPage} />
      </Switch>
    </div>
  );
};

export default App;