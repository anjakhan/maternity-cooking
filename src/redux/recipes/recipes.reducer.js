import RECIPES_DATA from './recipes.data';

const INITIAL_STATE = {
    collections: RECIPES_DATA
};

const recipesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default recipesReducer;