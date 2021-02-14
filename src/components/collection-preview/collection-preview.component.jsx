import React from 'react';
import { withRouter } from 'react-router-dom';

import { getRecipes } from '../../firebase/firebase.utils';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

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
            <CollectionPreviewContainer>
                <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
                    {this.props.topic}
                </TitleContainer>
                <PreviewContainer>
                    {recipes.filter(recipe => recipe.topic === routeName)
                        .slice(0, 4)
                        .map(recipe => <CollectionItem key={recipe.id} recipe={recipe} linkUrl={`${match.url}/${routeName}/${recipe.title}`} /> )
                    }
                </PreviewContainer>
            </CollectionPreviewContainer>
        );
    }
}

export default withRouter(CollectionPreview);