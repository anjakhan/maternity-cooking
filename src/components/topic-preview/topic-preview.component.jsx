import React from 'react';

import { getRecipes } from '../../firebase/firebase.utils';

import Preview from '../preview/preview.component';

class TopicPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            topic: ''
        }
    }
    async componentDidMount() {
        try {
            const recipes = [];
            const topic = this.props.topic;
            await getRecipes()
                .then(data => {
                    const filtered = data.filter(recipe => recipe.topic === topic);
                    filtered.forEach(recipe => recipes.push(recipe));
                })
                .catch(error => console.log('no recipes found', error));
            this.setState({recipes, topic: topic});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { recipes, topic } = this.state;
        return (
            <Preview items={recipes} topic={topic} />
        )
    }
};

export default TopicPreview;