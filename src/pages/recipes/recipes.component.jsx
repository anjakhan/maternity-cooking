import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import DisplayRecipePage from '../display-recipe-page/display-recipe-page.component';
import TopicPage from '../topicpage/topicpage.component';

const RecipesPage = ({ match }) => (
    <div className='recipes-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:topicId`} component={TopicPage} />
        <Route path={`${match.path}/:topicId/:recipeId`} component={DisplayRecipePage} />
    </div>
);

export default RecipesPage;