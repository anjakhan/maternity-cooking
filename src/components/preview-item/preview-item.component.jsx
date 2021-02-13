import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ReactComponent as HeartIcon } from '../../assets/heart2a.svg';
import { deleteItem } from '../../redux/favorites/fav.actions';
import { addItem } from '../../redux/favorites/fav.actions';

import './preview-item.styles.scss';

const PreviewItem = ({ item, deleteItem, addItem, topic, history }) => {
    const { title, picture } = item;
    return (
        <div className='preview-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${picture})`,
                    cursor: 'pointer'
                }}
                onClick={() => history.push(`/recipes/${topic}/${title}`)}
            />
            <div className='recipe-title'>
                {title}
                {
                    topic === 'Favorite Recipes' ?
                    <div onClick={() => deleteItem(item)} className='x-icon'>x</div> :
                    <HeartIcon onClick={() => addItem(item)} className='heart-icon' style={{zIndex: "5"}} />
                }
            </div>
            
        </div>
)};

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(PreviewItem));