import FavActionTypes from './fav.types';
import { addItemToFav, deleteItemFromFav } from './fav.utils';


const INITIAL_STATE = {
    hidden: true,
    favItems: []
};

const favReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavActionTypes.TOGGLE_FAV_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case FavActionTypes.ADD_ITEM:
            return {
                ...state,
                favItems: addItemToFav(state.favItems, action.payload)
            };
        case FavActionTypes.DELETE_ITEM:
            return {
                ...state,
                favItems: deleteItemFromFav(state.favItems, action.payload)
            }
        default:
            return state;
    };
};

export default favReducer;