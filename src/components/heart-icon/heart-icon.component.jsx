import React from 'react';
import { connect } from 'react-redux';

import { toggleFavHidden } from '../../redux/favorites/fav.actions';
import { selectFavItemsCount } from '../../redux/favorites/fav.selectors';

import { ReactComponent as HeartIcon } from '../../assets/heart2.svg';

import './heart-icon.styles.scss';

const FavIcon = ({ toggleFavHidden, itemCount }) => (
    <div className='fav-icon' onClick={toggleFavHidden}>
        <HeartIcon className='heart-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: selectFavItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleFavHidden: () => dispatch(toggleFavHidden())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(FavIcon);