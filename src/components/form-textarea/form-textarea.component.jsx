import React from 'react';

import { TextContainer } from './form-textarea.styles';

const FormTextarea = ({ name, value, onChange, placeholder }) => (
    <TextContainer
        name={name}
        type='text' 
        value={value}
        onChange={onChange}
        label={name}
        placeholder={placeholder}
        required 
    />
);

export default FormTextarea;