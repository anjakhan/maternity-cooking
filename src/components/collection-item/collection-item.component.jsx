import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as HeartIcon } from '../../assets/heart2a.svg';
import { addItem } from '../../redux/favorites/fav.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ recipe, addItem }) => {
    const { title, picture } = recipe;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${picture})`
                }}
            />
            <HeartIcon onClick={() => addItem(recipe)} className='heart-icon' style={{zIndex: "5"}} />
            <Link className='option' to='/recipes'></Link>
            <div className='collection-title'>{title}</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: recipe => dispatch(addItem(recipe))
})

export default connect(null, mapDispatchToProps)(CollectionItem);