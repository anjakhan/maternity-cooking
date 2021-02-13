import React from 'react';
import { withRouter } from 'react-router-dom';

import DropdownSection from '../dropdown-section/dropdown-section.component';
import CustomButton from '../custom-button/custom-button.component';

import './fav-dropdown.styles.scss';

const FavDropdown = ({ history }) => (
    <div className='fav-dropdown'>
        <div className='fav-dropdown-section'>
            <DropdownSection topic='Cooking' shortcut='cooking' />
            <DropdownSection topic='Baking' shortcut='baking' />
            <DropdownSection topic='Babys Food' shortcut='babyfood' />
            <DropdownSection topic='Baby Led Weaning' shortcut='blw' />
            <DropdownSection topic='Smoothies & Snacks' shortcut='smoothies' />
        </div>
        <CustomButton onClick={() => history.push('/favpage')}>
            go to favorites
        </CustomButton>
    </div>
);

export default withRouter(FavDropdown);