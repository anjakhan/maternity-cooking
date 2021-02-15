import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FavItem from '../fav-item/fav-item.component';
import { selectFavItems } from '../../redux/favorites/fav.selectors';

import { SectionTitle, TitleBorder } from './dropdown-section.styles';

const DropdownSection = ({ favItems, topic, shortcut }) => (
    <>
        <SectionTitle>{topic}<TitleBorder /></SectionTitle>
            {favItems.map(favItem => (
                favItem.topic === shortcut
                ? <FavItem key={favItem.id} item={favItem} />
                : null
            ))}
    </>
);

const mapStateToProps = createStructuredSelector({
    favItems: selectFavItems
});

export default connect(mapStateToProps)(DropdownSection);