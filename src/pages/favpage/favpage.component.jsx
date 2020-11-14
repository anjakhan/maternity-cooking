import React from 'react';

import FavPreview from '../../components/fav-preview/fav-preview.component';

import './favpage.styles.scss';

const FavPage = () => (
    <div className='fav-page'>
        <FavPreview topic='Cooking'/>
        <FavPreview topic='Baking'/>
        <FavPreview topic='Babys Food'/>
        <FavPreview topic='Baby Led Weaning'/>
        <FavPreview topic='Smoothies & Snacks'/>
    </div>
);

export default FavPage;