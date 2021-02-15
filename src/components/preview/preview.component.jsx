import React from 'react';

import PreviewItem from '../preview-item/preview-item.component';

import { PreviewContainer, TitleContainer, TitleBorder, SelectionContainer } from './preview.styles';

const Preview = ({ items, topic }) => {
    return (
        <PreviewContainer>
            <TitleContainer>{topic}<TitleBorder /></TitleContainer>
            {items.length ? (
                <SelectionContainer>
                    {items.map(item => (
                        <PreviewItem key={item.id} item={item} topic={topic} />
                    ))}
                </SelectionContainer>
            ) : (
                <p>No recipes available</p>
            )}
        </PreviewContainer>
)};

export default Preview;