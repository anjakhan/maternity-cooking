import FavActionTypes from './fav.types';

export const toggleFavHidden = () => ({
    type: FavActionTypes.TOGGLE_FAV_HIDDEN
});

export const addItem = item => ({
    type: FavActionTypes.ADD_ITEM,
    payload: item
});

export const deleteItem = item => ({
    type: FavActionTypes.DELETE_ITEM,
    payload: item
})