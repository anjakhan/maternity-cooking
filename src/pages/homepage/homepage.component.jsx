import React from 'react';

import './homepage.style.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Cooking</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Baking</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Smoothies</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Baby food</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;