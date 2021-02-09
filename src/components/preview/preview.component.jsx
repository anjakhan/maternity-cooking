import React from 'react';

import PreviewItem from '../preview-item/preview-item.component';

import './preview.styles.scss';

const Preview = ({ items, topic }) => {
    return (
        <div className='preview'>
            <h1 className='title'>{topic}<hr /></h1>
            {items.length ? (
                <div className='selection'>
                    {items.map(item => (
                        <PreviewItem key={item.id} item={item} topic={topic} />
                    ))}
                </div>
            ) : (
                <p>No recipes available</p>
            )}
        </div>
)};

export default Preview;