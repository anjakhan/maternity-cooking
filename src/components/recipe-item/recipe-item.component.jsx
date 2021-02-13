import React from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../../firebase/firebase.utils';

import { ReactComponent as HeartIcon } from '../../assets/heart2a.svg';
import { addItem } from '../../redux/favorites/fav.actions';

import './recipe-item.styles.scss';

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: null,
            id: '',
            title: '',
            topic: 'Cooking',
            directions: [],
            ingredients: [],
            ImgUrl: ''
        }
    }

    async componentDidMount() {
        // add a spinner on recipe loading in recipe frame
        try {
            const recipes = [];
            await getRecipes()
                .then(data => {
                    const filtered = data.filter(recipe => recipe.title === this.props.recipeId);
                    filtered.forEach(recipe => recipes.push(recipe));
                })
                .catch(error => console.log('no recipes found', error));
            const { id, title, topic, directions, ingredients, picture } = recipes[0];
            this.setState({
                recipe: recipes[0],
                id,
                title,
                topic,
                directions,
                ingredients,
                picture
            });
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        const { recipe, title, topic, directions, ingredients, picture} = this.state;
        return (
            <div className='container'>
                <div className='title'>
                    <h1>{title}</h1>
                    <h2> ~ {topic} ~ </h2>
                </div>
                <HeartIcon onClick={() => addItem(recipe)} className='heart-icon' />
                <div className='wrapper'>
                    <div
                        className='image'
                        style={{
                            backgroundImage: `url(${picture})`
                        }}
                    />
                    <div className='ingredients'>
                        <h3>Ingredients</h3>
                        <ul className='ingredients-list'>
                            {ingredients.map((ingredient, index) => <li key={index}> {ingredient} </li>)}
                        </ul>
                    </div>
                </div>
                <div className='description'>
                    <h3>Preparation</h3>
                    <ul style={{padding:0}}>
                        {directions.map((direction, idx) => <p key={idx}> {direction} </p>)}
                    </ul>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    addItem: recipe => dispatch(addItem(recipe))
})

export default connect(null, mapDispatchToProps)(RecipeItem);