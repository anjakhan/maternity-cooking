import { createSelector } from 'reselect';

const selectRecipes = state => state.recipes;

export const selectCollections = createSelector(
    [selectRecipes],
    recipes => recipes.collections
);

export const selectRecipesForPreview = createSelector(
    [selectCollections],
    recipes => Object.keys(recipes).map(key => recipes[key])
)

export const selectTopic = topicUrlParam =>
    createSelector(
        [selectCollections],
        topics => topics[topicUrlParam]
    )