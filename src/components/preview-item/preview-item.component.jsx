import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteItem } from '../../redux/favorites/fav.actions';
import { addItem } from '../../redux/favorites/fav.actions';

import { PreviewItemContainer, ImageContainer, RecipeTitleContainer, IconContainer, HeartIconContainer } from './preview-item.styles';

const PreviewItem = ({ item, deleteItem, addItem, topic, history }) => {
    const { title, picture } = item;
    return (
        <PreviewItemContainer>
            <ImageContainer
                imageUrl={picture}
                onClick={() => history.push(`/recipes/${topic}/${title}`)}
            />
            <RecipeTitleContainer>
                {title}
                {
                    topic === 'Favorite Recipes' ?
                    <IconContainer onClick={() => deleteItem(item)}>x</IconContainer> :
                    <HeartIconContainer onClick={() => addItem(item)} />
                }
            </RecipeTitleContainer>            
        </PreviewItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(PreviewItem));