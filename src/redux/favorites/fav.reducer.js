import FavActionTypes from './fav.types';

const INITIAL_STATE = {
    hidden: true
};

const favReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavActionTypes.TOGGLE_FAV_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default favReducer;