import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';

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
            await firebase.firestore().collection('recipes').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    recipes.push(doc.data())
                });
            });
            this.setState({recipes})
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
                        .map(topic => <CollectionItem key={topic.id} recipe={topic} />)
                    }
                </div>
            </div>
        );
    }
}

export default CollectionPreview;

// const CollectionPreview = ({ topic, items }) =>