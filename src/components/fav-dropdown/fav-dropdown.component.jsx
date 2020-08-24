import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './fav-dropdown.styles.scss';

const FavDropdown = () => (
    <div className='fav-dropdown'>
        <div className='fav-items' />
        <CustomButton>go to favorites</CustomButton>
    </div>
);

export default FavDropdown;