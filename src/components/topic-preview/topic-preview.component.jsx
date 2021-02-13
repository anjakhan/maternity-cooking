import React from 'react';

import { getRecipes } from '../../firebase/firebase.utils';

import Preview from '../preview/preview.component';
import Spinner from '../spinner/spinner.component';

class TopicPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            topic: '',
            isLoading: true
        }
    }
    async componentDidMount() {
        try {
            const recipes = [];
            const topic = this.props.topic;
            await getRecipes()
                .then(data => {
                    const filtered = data.filter(recipe => recipe.topic === this.props.routeName);
                    filtered.forEach(recipe => recipes.push(recipe));
                })
                .catch(error => console.log('no recipes found', error));
            this.setState({ recipes, topic, isLoading: false });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { recipes, topic, isLoading } = this.state;
        return (
            <>
                { isLoading ? <Spinner /> : <Preview items={recipes} topic={topic} /> }
            </>
        )
    }
};

export default TopicPreview;