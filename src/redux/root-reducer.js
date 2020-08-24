import { combineReducers } from 'redux';

import favReducer from './favorites/fav.reducer';

export default combineReducers({
    fav: favReducer
});