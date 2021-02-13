import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ReactComponent as HeartIcon } from '../../assets/heart2a.svg';
import { addItem } from '../../redux/favorites/fav.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ recipe, addItem, linkUrl, history }) => {
    const { title, picture } = recipe;
    return (
        <div className='collection-item' >
            <div
                className='image'
                style={{
                    backgroundImage: `url(${picture})`
                }}
            />
            <HeartIcon onClick={() => addItem(recipe)} className='heart-icon' style={{zIndex: "5"}} />
            <div className='collection-title' onClick={() => history.push(`${linkUrl}`)}>{title}</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: recipe => dispatch(addItem(recipe))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));