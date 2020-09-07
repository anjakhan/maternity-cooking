export const addItemToFav = (favItems, favItemToAdd) => {
    const existingFavItem = favItems.find(
        favItem => favItem.id === favItemToAdd.id
    );

    if (existingFavItem) {
        return favItems.map(favItem => favItem)
    }

    return [...favItems, { ...favItemToAdd}]
};

export const deleteItemFromFav = (favItems, favItemToDelete) => {
    const filtered = favItems.filter(function(value){ 
        return value !== favItemToDelete;
    });
    
    return filtered
}