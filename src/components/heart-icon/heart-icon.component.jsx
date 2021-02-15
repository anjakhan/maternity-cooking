import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleFavHidden } from '../../redux/favorites/fav.actions';
import { selectFavItemsCount } from '../../redux/favorites/fav.selectors';

import { FavIconContainer, HeartIconContainer, ItemCountContainer } from './heart-icon.styles';

const FavIcon = ({ toggleFavHidden, itemCount }) => (
    <FavIconContainer onClick={toggleFavHidden}>
        <HeartIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </FavIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectFavItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleFavHidden: () => dispatch(toggleFavHidden())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(FavIcon);