import React from 'react';

import RecipeForm from '../../components/recipe-form/recipe-form.compnent';

import { CreateRecipeContainer } from './create-recipe-page.styles';

const CreateRecipePage = () => (
    <CreateRecipeContainer>
        <RecipeForm />
    </CreateRecipeContainer>
);

export default CreateRecipePage;