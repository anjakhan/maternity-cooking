import React from 'react';
import { connect } from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/firestore';

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
            linkUrl: ''
        }
    }

    async componentDidMount() {
        try {
            const recipe = []
            await firebase.firestore().collection('recipes').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    recipe.push(doc.data())
                });
            });
            const { id, title, topic, directions, ingredients, linkUrl} = recipe[0]
            this.setState({
                id,
                title,
                topic,
                directions,
                ingredients,
                linkUrl
            })
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        const { title, topic, directions, ingredients} = this.state
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
                            backgroundImage: `url(https://asianinspirations.com.au/wp-content/uploads/2019/07/Chinese-Cooking-Hacks.jpg)`
                        }}
                    />
                    <div className='ingredients'>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredients.map(function (ingredient, index) {
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