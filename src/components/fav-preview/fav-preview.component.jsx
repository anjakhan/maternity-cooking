import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FavPreviewItem from '../fav-preview-item/fav-preview-item.component';
import { selectFavItems } from '../../redux/favorites/fav.selectors';

import './fav-preview.styles.scss';

const FavPreview = ({ favItems, title }) => {
    return (
        <div className='fav-preview'>
            <h1 className='title'>{title}<hr /></h1>
            {favItems.length ? (
                <div className='fav-selection'>
                    {favItems.map(favItem => (
                        favItem.title === title
                        ? <FavPreviewItem key={favItem.id} item={favItem} />
                        : null
                    ))}
                </div>
            ) : (
                <p>No recipes for this section selected</p>
            )}
        </div>
)};

const mapStateToProps = createStructuredSelector({
    favItems: selectFavItems
});

export default connect(mapStateToProps)(FavPreview);