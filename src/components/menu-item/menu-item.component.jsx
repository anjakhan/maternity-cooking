import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ topic, imageUrl, size, history, linkUrl, match, count }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{topic}</h1>
            <span className='subtitle'>{count} recipes</span>
        </div>
    </div>
);

export default withRouter(MenuItem);