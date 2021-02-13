import React from 'react';

import RecipeItem from '../../components/recipe-item/recipe-item.component';

const DisplayRecipePage = ({match}) => {
    const { recipeId, topicId } = match.params;
    return (
        <div className='recipes-page'>
            <RecipeItem recipeId={recipeId} topicId={topicId} />
        </div>
    )
};

export default DisplayRecipePage;