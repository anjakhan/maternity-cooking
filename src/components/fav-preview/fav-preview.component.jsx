import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FavPreviewItem from '../fav-preview-item/fav-preview-item.component';
import { selectFavItems } from '../../redux/favorites/fav.selectors';

import './fav-preview.styles.scss';

const FavPreview = ({ favItems, topic }) => {
    return (
        <div className='fav-preview'>
            <h1 className='title'>Favorite Recipes<hr /></h1>
            {favItems.length ? (
                <div className='fav-selection'>
                    {favItems.map(favItem => (
                        <FavPreviewItem key={favItem.id} item={favItem} />
                    ))}
                </div>
            ) : (
                <p>No recipes added to favorites</p>
            )}
        </div>
)};

const mapStateToProps = createStructuredSelector({
    favItems: selectFavItems
});

export default connect(mapStateToProps)(FavPreview);