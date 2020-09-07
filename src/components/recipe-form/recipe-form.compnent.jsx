import React from 'react';
import { withRouter } from 'react-router-dom';

import { createRecipesDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import FileUploader from '../file-uploader/file-uploader.component';
import CustomButton from '../custom-button/custom-button.component';

import './recipe-form.styles.scss';

class RecipeForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            title: 'Cooking',
            directions: '',
            ingredients: []
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { name, title, directions, ingredients } = this.state;
        
        try {
            await createRecipesDocument({ name, title, directions, ingredients });

            this.setState = ({
                name: '',
                title: 'Cooking',
                directions: '',
                ingredients: []
            })

            this.props.history.push('/');
            // this.props.history.push(`/store/${this.storeInput.value}`);

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
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
                            name='name' 
                            type='text' 
                            value={this.state.name} 
                            handleChange={this.handleChange}
                            label='Recipe Title'
                            required
                        />
                        <div className='topic'>
                            <label htmlFor="title">Choose a topic:</label>
                            <select 
                                name='title'
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