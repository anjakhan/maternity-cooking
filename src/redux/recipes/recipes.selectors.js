import { createSelector } from 'reselect';

const selectRecipes = state => state.recipes;

export const selectCollections = createSelector(
    [selectRecipes],
    recipes => recipes.collections
);