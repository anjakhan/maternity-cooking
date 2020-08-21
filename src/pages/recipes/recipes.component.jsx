import React from 'react';

import RECIPES_DATA from './recipes.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class RecipesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: RECIPES_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className='recipes-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default RecipesPage;