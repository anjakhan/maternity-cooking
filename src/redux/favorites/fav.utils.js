export const addItemToFav = (favItems, favItemToAdd) => {
    const existingFavItem = favItems.find(
        favItem => favItem.id === favItemToAdd.id
    );

    if (existingFavItem) {
        return favItems.map(favItem => favItem)
    }

    return [...favItems, { ...favItemToAdd}]
};