import React from 'react';

import RecipeItem from '../../components/recipe-item/recipe-item.component';

const DisplayRecipePage = ({match}) => (
    <div className='recipes-page'>
        <RecipeItem recipeId={match.params.recipeId} />
    </div>
);

export default DisplayRecipePage;