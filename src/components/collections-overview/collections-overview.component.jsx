import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectRecipesForPreview } from '../../redux/recipes/recipes.selectors';

const CollectionsOverview = ({ collections }) => (
    <>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </>
);

const mapStateToProps = createStructuredSelector({
    collections: selectRecipesForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);