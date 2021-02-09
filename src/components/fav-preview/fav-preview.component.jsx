import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Preview from '../preview/preview.component';
import { selectFavItems } from '../../redux/favorites/fav.selectors';

const FavPreview = ({ favItems }) => {
    return (
        <Preview items={favItems} topic='Favorite Recipes' />
)};

const mapStateToProps = createStructuredSelector({
    favItems: selectFavItems
});

export default connect(mapStateToProps)(FavPreview);