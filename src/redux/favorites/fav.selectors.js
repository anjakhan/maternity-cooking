import { createSelector } from 'reselect';

const selectFav = state => state.fav;

export const selectFavItems = createSelector(
    [selectFav],
    fav => fav.favItems
);

export const selectFavHidden = createSelector(
    [selectFav],
    fav => fav.hidden
);

export const selectFavItemsCount = createSelector(
    [selectFavItems],
    favItems =>
        favItems.length
);