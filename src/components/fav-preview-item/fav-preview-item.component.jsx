import React from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../redux/favorites/fav.actions';
import CustomButton from '../custom-button/custom-button.component';

import './fav-preview-item.styles.scss';

const FavPreviewItem = ({ item, deleteItem }) => {
    const { title, imageUrl } = item;
    return (
        <div className='fav-preview-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div onClick={() => deleteItem(item)} className='x-icon'>x</div>
            <CustomButton>{title}</CustomButton>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(FavPreviewItem);