import React from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../redux/favorites/fav.actions';

import { FavItemContainer, FavImage, ItemDetailsContainer, TitleContainer, IconContainer } from './fav-item.styles.jsx';

const FavItem = ({ item, deleteItem }) => {
    const { title, picture } = item;
    return (
        <FavItemContainer>
            <FavImage src={picture} alt='item' />
            <ItemDetailsContainer>
                <TitleContainer>{title}</TitleContainer>
                <IconContainer onClick={() => deleteItem(item)}>x</IconContainer>
            </ItemDetailsContainer>
        </FavItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(FavItem);