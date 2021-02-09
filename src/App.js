import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import RecipesPage from './pages/recipes/recipes.component';
import TopicPage from './pages/topicpage/topicpage.component';
import FavPage from './pages/favpage/favpage.component';
import CreateRecipePage from './pages/create-recipe-page/create-recipe-page.component';
import DisplayRecipePage from './pages/display-recipe-page/display-recipe-page.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/recipes' component={RecipesPage} />
        <Route exact path='/cooking' component={TopicPage} />
        <Route exact path='/favpage' component={FavPage} />
        <Route exact path='/create-recipe' component={CreateRecipePage} />
        <Route exact path='/item' component={DisplayRecipePage} />
      </Switch>
    </div>
  );
};

export default App;