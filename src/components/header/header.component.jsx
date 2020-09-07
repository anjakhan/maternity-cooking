import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FavIcon from '../heart-icon/heart-icon.component';
import FavDropdown from '../fav-dropdown/fav-dropdown.component';
import { selectFavHidden } from '../../redux/favorites/fav.selectors';

import { ReactComponent as Logo} from '../../assets/maternity.svg';

import './header.styles.scss';

const Header = ({ hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/recipes'>
                Recipes
            </Link>
            <Link className='option' to='/create-recipe'>
                Create Recipe
            </Link>
            <FavIcon />
        </div>
        {hidden ? null : <FavDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectFavHidden
});

export default connect(mapStateToProps)(Header);