import React from 'react';
import { withRouter } from 'react-router-dom';

import DropdownSection from '../dropdown-section/dropdown-section.component';
import CustomButton from '../custom-button/custom-button.component';

import { DropdownContainer, SectionContainer} from './fav-dropdown.styles';

const FavDropdown = ({ history }) => (
    <DropdownContainer>
        <SectionContainer>
            <DropdownSection topic='Cooking' shortcut='cooking' />
            <DropdownSection topic='Baking' shortcut='baking' />
            <DropdownSection topic='Babys Food' shortcut='babyfood' />
            <DropdownSection topic='Baby Led Weaning' shortcut='blw' />
            <DropdownSection topic='Smoothies & Snacks' shortcut='smoothies' />
        </SectionContainer>
        <CustomButton onClick={() => history.push('/favpage')}>
            go to favorites
        </CustomButton>
    </DropdownContainer>
);

export default withRouter(FavDropdown);