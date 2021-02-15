import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/favorites/fav.actions';

import { CollectionItemContainer, BackgroundImage, HeartIconContainer, AddButton } from './collection-item.styles'

const CollectionItem = ({ recipe, addItem, linkUrl, history }) => {
    const { title, picture } = recipe;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={picture} />
            <HeartIconContainer onClick={() => addItem(recipe)} style={{zIndex: "5"}} />
            <AddButton onClick={() => history.push(`${linkUrl}`)} inverted>
                {title}
            </AddButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: recipe => dispatch(addItem(recipe))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));