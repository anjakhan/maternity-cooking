import React from 'react';
import { withRouter } from 'react-router-dom';

import { createRecipesDocument, dowloadFile } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import FileUploader from '../file-uploader/file-uploader.component';
import CustomButton from '../custom-button/custom-button.component';

import './recipe-form.styles.scss';

class RecipeForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            topic: 'Cooking',
            directions: '',
            ingredients: [],
            linkUrl: '',
            picture: '',
            date: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const img = document.querySelector('img');
        const filename = img != null ? img.alt : 'empty';
        this.setState({ date: new Date() });
        
        try {
            await dowloadFile(filename)
                .then(url => {
                    this.setState({ picture: url });
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ picture: 'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg'});
                })
            
            const { id, title, topic, directions, ingredients, linkUrl, picture, date } = this.state;

            await createRecipesDocument({ id, title, topic, directions, ingredients, linkUrl, picture, date });

            this.setState = ({
                id: '',
                title: '',
                topic: 'Cooking',
                directions: '',
                ingredients: [],
                linkUrl: '',
                picture: '',
                date
            })

            this.props.history.push(`/recipes/${topic}`);

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
        this.setState({ linkUrl: `recipes/${this.state.title}` })
    };

    handleIngredients = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value.split(',') });
    }

    render () {
        return(
            <div className='recipe-container'>
                <h2 className='head-title'>Create a new Recipe</h2>

                <form onSubmit={this.handleSubmit}>
                    <div className='left'>
                        <FormInput 
                            name='title' 
                            type='text' 
                            value={this.state.title} 
                            handleChange={this.handleChange}
                            label='Recipe Title ...'
                            required
                        />
                        <div className='topic'>
                            <label htmlFor="topic">Choose a topic:</label>
                            <select 
                                name='topic'
                                onChange={this.handleChange}
                                required
                            >
                                <option value='Cooking'>Cooking</option>
                                <option value='Baking'>Baking</option>
                                <option value='Babys Food'>Babys Food</option>
                                <option value='Baby Led Weaning'>Baby Led Weaning</option>
                                <option value='Smoothies & Snacks'>Smoothies & Snacks</option>
                            </select>
                        </div>
                        <textarea
                            name='directions' 
                            type='text' 
                            value={this.state.directions} 
                            onChange={this.handleChange}
                            label='directions'
                            placeholder='Cooking directions ...'
                            required 
                        />
                        <FileUploader
                            id='myfile'
                            name='myfile' 
                            type='file'
                            label='Choose an image to upload (png, jpg)'
                            accept=".jpg, .jpeg, .png"
                        />
                    </div>
                    <div className='right'>
                        <h2>List of Ingredients</h2>
                        <span>- Enter Ingredients separated by comma !!! -</span>
                        <textarea
                            name='ingredients' 
                            type='text' 
                            value={this.state.ingredients}
                            onChange={this.handleIngredients}
                            label='Ingredients'
                            placeholder='Ingredients separated by comma ...'
                            required
                        />
                        <CustomButton type='submit'>Submit Recipe</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default withRouter(RecipeForm);