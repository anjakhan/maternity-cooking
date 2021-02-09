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
            id: '',
            title: '',
            topic: 'Cooking',
            directions: '',
            ingredients: [],
            linkUrl: '',
            ImgUrl: ''
        }
    }

    async componentDidMount() {
        // add a spinner on recipe loading in recipe frame
        try {
            const recipes = [];
            await getRecipes()
                .then(data => {
                    const filtered = data.filter(recipe => recipe.title === 'Hot Chocolate');
                    filtered.forEach(recipe => recipes.push(recipe));
                })
                .catch(error => console.log('no recipes found', error));
            const { id, title, topic, directions, ingredients, linkUrl, picture } = recipes[0];
            this.setState({
                id,
                title,
                topic,
                directions,
                ingredients,
                linkUrl,
                picture
            });
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        const { title, topic, directions, ingredients, picture} = this.state;
        return (
            <div className='container'>
                <div className='title'>
                    <h1>{title}</h1>
                    <h2> ~ {topic} ~ </h2>
                </div>
                <HeartIcon onClick={() => addItem(this.state)} className='heart-icon' />
                <div className='wrapper'>
                    <div
                        className='image'
                        style={{
                            backgroundImage: `url(${picture})`
                        }}
                    />
                    <div className='ingredients'>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredients.map((ingredient, index) => {
                                return <li key={index}> {ingredient} </li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className='description'>
                    <h3>Preparation</h3>
                    <p>{directions}</p>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(RecipeItem);