import React from 'react';
import { withRouter } from 'react-router-dom';

import DropdownSection from '../dropdown-section/dropdown-section.component';
import CustomButton from '../custom-button/custom-button.component';

import './fav-dropdown.styles.scss';

const FavDropdown = ({ history }) => (
    <div className='fav-dropdown'>
        <div className='fav-dropdown-section'>
            <DropdownSection topic='Cooking'/>
            <DropdownSection topic='Baking'/>
            <DropdownSection topic='Babys Food'/>
            <DropdownSection topic='Baby Led Weaning'/>
            <DropdownSection topic='Smoothies & Snacks'/>
        </div>
        <CustomButton onClick={() => history.push('/favpage')}>
            go to favorites
        </CustomButton>
    </div>
);

export default withRouter(FavDropdown);