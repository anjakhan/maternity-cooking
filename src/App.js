import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import RecipesPage from './pages/recipes/recipes.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/recipes' component={RecipesPage} />
      </Switch>
    </div>
  );
};

export default App;