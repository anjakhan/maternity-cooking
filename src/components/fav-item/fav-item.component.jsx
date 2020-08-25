import React from 'react';

import './fav-item.styles.scss';

const FavItem = ({ item: {imageUrl, name } }) => (
    <div className='fav-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
        </div>
    </div>
);

export default FavItem;