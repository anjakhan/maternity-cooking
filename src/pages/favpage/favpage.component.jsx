import React from 'react';

import FavPreview from '../../components/fav-preview/fav-preview.component';

import './favpage.styles.scss';

const FavPage = () => (
    <div className='fav-page'>
        <FavPreview title='Cooking'/>
        <FavPreview title='Baking'/>
        <FavPreview title='Babys Food'/>
        <FavPreview title='Baby Led Weaning'/>
        <FavPreview title='Smoothies & Snacks'/>
    </div>
);

export default FavPage;