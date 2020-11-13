import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favReducer from './favorites/fav.reducer';
import directoryReducer from './directory/directory.reducer';
import recipesReducer from './recipes/recipes.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['fav']
}

const rootReducer = combineReducers({
    fav: favReducer,
    directory: directoryReducer,
    recipes: recipesReducer
});

export default persistReducer(persistConfig, rootReducer);