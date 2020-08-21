import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/maternity.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/recipes'>
                Recipes
            </Link>
            <Link className='option' to='/Contact'>
                Contact
            </Link>
        </div>
    </div>
);

export default Header;