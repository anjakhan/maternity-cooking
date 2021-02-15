import React from 'react';

import { TopicInputContainer, SelectTopicContainer } from './form-dropdown.styles';

const FormDropdown = ({ onChange }) => (
    <TopicInputContainer>
        <label htmlFor="topic">Choose a topic:</label>
        <SelectTopicContainer 
            name='topic'
            onChange={onChange}
            required
        >
            <option value='cooking'>Cooking</option>
            <option value='baking'>Baking</option>
            <option value='babyfood'>Babys Food</option>
            <option value='blw'>Baby Led Weaning</option>
            <option value='smoothies'>Smoothies & Snacks</option>
        </SelectTopicContainer>
    </TopicInputContainer>
);

export default FormDropdown;