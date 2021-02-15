import React from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../../firebase/firebase.utils';
import { addItem } from '../../redux/favorites/fav.actions';

import Spinner from '../../components/spinner/spinner.component';

import { RecipeContainer, TitleContainer, HeartIconContainer, Wrapper, ImageContainer, IngredientsContainer, SectionTitle, IngredientsList, ListContainer, DescriptionContainer } from './recipe-item.styles.jsx';

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topicId: this.props.topicId,            
            addItem: this.props.addItem,
            recipe: null,
            id: '',
            title: '',
            directions: [],
            ingredients: [],
            ImgUrl: '',
            isLoading: true
        }
    }

    async componentDidMount() {
        try {
            const recipes = [];
            await getRecipes()
                .then(data => {
                    const filtered = data.filter(recipe => recipe.title === this.props.recipeId);
                    filtered.forEach(recipe => recipes.push(recipe));
                })
                .catch(error => console.log('no recipes found', error));
            const { id, title, directions, ingredients, picture } = recipes[0];
            this.setState({
                recipe: recipes[0],
                id,
                title,
                directions,
                ingredients,
                picture,
                isLoading: false
            });
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        const { topicId, recipe, addItem, title, directions, ingredients, picture, isLoading } = this.state;
        return (
            <>
            {isLoading ? <Spinner /> : 
            <>
            <RecipeContainer>
                <TitleContainer>
                    <h1>{title}</h1>
                    <h2> ~ {topicId} ~ </h2>
                </TitleContainer>
                <HeartIconContainer onClick={() => addItem(recipe)} />
                <Wrapper>
                    <ImageContainer imageUrl={picture} />
                    <IngredientsContainer>
                        <SectionTitle>Ingredients</SectionTitle>
                        <IngredientsList>
                            {ingredients.map((ingredient, index) => <ListContainer key={index}> {ingredient} </ListContainer>)}
                        </IngredientsList>
                    </IngredientsContainer>
                </Wrapper>
                <DescriptionContainer>
                    <SectionTitle>Preparation</SectionTitle>
                    <ul style={{padding:0}}>
                        {directions.map((direction, idx) => <p key={idx}> {direction} </p>)}
                    </ul>
                </DescriptionContainer>
            </RecipeContainer>
            </>
            }
            </>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    addItem: recipe => dispatch(addItem(recipe))
});

export default connect(null, mapDispatchToProps)(RecipeItem);