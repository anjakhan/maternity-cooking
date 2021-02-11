import React from 'react';
import { withRouter } from 'react-router-dom';

import { getRecipes } from '../../firebase/firebase.utils';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

class CollectionPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            history: this.props.history,
            match: this.props.match,
            routeName: this.props.routeName
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
        const {recipes, history, match, routeName} = this.state;
        return (
            <div className='collection-preview'>
                <h1 className='topic' onClick={() => history.push(`${match.url}/${routeName}`)}>
                    {this.props.topic}
                </h1>
                <div className='preview'>
                    {recipes.filter(recipe => recipe.topic === this.props.topic)
                        .map((topic, idx) => idx < 4 ? <CollectionItem key={topic.id} recipe={topic} /> : null)
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(CollectionPreview);