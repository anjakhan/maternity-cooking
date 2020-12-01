import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as HeartIcon } from '../../assets/heart2a.svg';
import { addItem } from '../../redux/favorites/fav.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ recipe, addItem }) => {
    const { title } = recipe;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(https://asianinspirations.com.au/wp-content/uploads/2019/07/Chinese-Cooking-Hacks.jpg)`
                }}
            />
            <HeartIcon onClick={() => addItem(recipe)} className='heart-icon' />
            <Link className='option' to='/recipes'></Link>
            <div className='collection-title'>{title}</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: recipe => dispatch(addItem(recipe))
})

export default connect(null, mapDispatchToProps)(CollectionItem);