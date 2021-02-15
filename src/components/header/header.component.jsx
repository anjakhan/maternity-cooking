import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FavIcon from '../heart-icon/heart-icon.component';
import FavDropdown from '../fav-dropdown/fav-dropdown.component';
import { selectFavHidden } from '../../redux/favorites/fav.selectors';

import { ReactComponent as Logo} from '../../assets/maternity.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/recipes'>
                Recipes
            </OptionLink>
            <OptionLink to='/create-recipe'>
                Create Recipe
            </OptionLink>
            <FavIcon />
        </OptionsContainer>
        {hidden ? null : <FavDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectFavHidden
});

export default connect(mapStateToProps)(Header);