import React from 'react';

import { getRecipes } from '../../firebase/firebase.utils';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

class CollectionPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }
    }
    async componentDidMount() {
        try {
            const recipes = [];
            await getRecipes()
                .then(data => {
                    data.forEach(recipe => recipes.push(recipe));
                })
                .catch(error => console.log('no recipes found', error));
            this.setState({recipes});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const recipes = this.state.recipes;
        return (
            <div className='collection-preview'>
                <h1 className='topic'>{this.props.topic}</h1>
                <div className='preview'>
                    {recipes.filter(recipe => recipe.topic === this.props.topic)
                        .map((topic, idx) => idx < 4 ? <CollectionItem key={topic.id} recipe={topic} /> : null)
                    }
                </div>
            </div>
        );
    }
}

export default CollectionPreview;