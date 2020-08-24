import React from 'react';
import { connect } from 'react-redux';

import { toggleFavHidden } from '../../redux/favorites/fav.actions';

import { ReactComponent as HeartIcon } from '../../assets/heart2.svg';

import './heart-icon.styles.scss';

const FavIcon = ({ toggleFavHidden }) => (
    <div className='fav-icon' onClick={toggleFavHidden}>
        <HeartIcon className='heart-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleFavHidden: () => dispatch(toggleFavHidden())
});

export default connect(
    null, 
    mapDispatchToProps
)(FavIcon);