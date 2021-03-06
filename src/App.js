import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import RecipesPage from './pages/recipes/recipes.component';
import FavPage from './pages/favpage/favpage.component';
import CreateRecipePage from './pages/create-recipe-page/create-recipe-page.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/recipes' component={RecipesPage} />
        <Route exact path='/favpage' component={FavPage} />
        <Route exact path='/create-recipe' component={CreateRecipePage} />
      </Switch>
    </div>
  );
};

export default App;