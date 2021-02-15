import React from 'react';
import { withRouter } from 'react-router-dom';

import { createRecipesDocument, dowloadFile } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import FormDropdown from '../form-dropdown/form-dropdown.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import FileUploader from '../file-uploader/file-uploader.component';
import CustomButton from '../custom-button/custom-button.component';

import { 
    RecipeFormContainer, 
    HeadTitle, 
    FormContainer, 
    FormSubcontainer, 
    TopicInputContainer, 
    SelectTopicContainer, 
    TitleContainer, 
    SubtitleContainer
} from './recipe-form.styles';

class RecipeForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            topic: 'cooking',
            preparation: '',
            ingredients: [],
            picture: '',
            date: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const img = document.querySelector('img');
        const filename = img != null ? img.alt : 'empty';
        const directions = this.state.preparation.replace(/\r\n/g,'\n').split('\n').filter(line => line);
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
            
            const { id, title, topic, ingredients, picture, date } = this.state;

            await createRecipesDocument({ id, title, topic, directions, ingredients, picture, date });

            this.setState = ({
                id: '',
                title: '',
                topic: 'cooking',
                preparation: '',
                ingredients: [],
                picture: '',
                date
            });

            this.props.history.push(`/recipes/${topic}`);

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
        const { title, preparation, ingredients } = this.state;
        return(
            <RecipeFormContainer>
                <HeadTitle>Create a new Recipe</HeadTitle>

                <FormContainer onSubmit={this.handleSubmit}>
                    <FormSubcontainer>
                        <FormInput 
                            name='title' 
                            type='text' 
                            value={title} 
                            handleChange={this.handleChange}
                            label='Recipe Title ...'
                            required
                        />
                        <FormDropdown onChange={this.handleChange} />
                        <FormTextarea
                            name='preparation'
                            value={preparation} 
                            onChange={this.handleChange}
                            placeholder='Cooking directions ...'
                        />
                        <FileUploader
                            id='myfile'
                            name='myfile' 
                            type='file'
                            label='Choose an image to upload (jpg, png, tiff, bmp)'
                            accept=".jpg, .jpeg, .png, .tiff, .bmp"
                        />
                    </FormSubcontainer>
                    <FormSubcontainer>
                        <TitleContainer>List of Ingredients</TitleContainer>
                        <SubtitleContainer>- Enter Ingredients separated by comma !!! -</SubtitleContainer>
                        <FormTextarea
                            name='ingredients'
                            value={ingredients}
                            onChange={this.handleIngredients}
                            placeholder='Ingredients separated by comma ...'
                        />
                        <CustomButton type='submit' style={{width: '100%'}}>
                            Submit Recipe
                        </CustomButton>
                    </FormSubcontainer>
                </FormContainer>
            </RecipeFormContainer>
        );
    }
};

export default withRouter(RecipeForm);