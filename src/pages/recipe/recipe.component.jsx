import React from 'react';

import './recipe.styles.scss';

const RecipePage = () => (
    <div className='recipe-page'>
        <div
            className='background-image'
            style={{
                backgroundImage: 'url(https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
            }} 
        />
        <div className='ingredients'>
            <span className='list-title'>Ingredients:</span><br /><br />
            Mushrooms <br />
            Lemon <br />
            Apples <br />
        </div>
        <div className='directions'>
            <span className='list-title'>Directions:</span><br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
        </div>
    </div>
    
);

// ADD INGREDIENTS AND DIRECTIONS INTO TWO NEW COMPONENTS

// add checkboxes infront of ingredients and check it for shopping list 

// const textHight = document.querySelector('.background-image').offsetHeight-300
// if text exeeds textHight then arrow click next for continuing directions text (or ingredients list)
// keep all text within the picture and if too much text, then use right-left-arrows for more text

export default RecipePage;