import React from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../redux/favorites/fav.actions';

import './fav-item.styles.scss';

const FavItem = ({ item, deleteItem }) => {
    const { title, picture } = item;
    return (
        <div className='fav-item'>
            <img src={picture} alt='item' />
            <div className='item-details'>
                <span className='name'>{title}</span>
                <span onClick={() => deleteItem(item)} className='x-icon'>x</span>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(FavItem);