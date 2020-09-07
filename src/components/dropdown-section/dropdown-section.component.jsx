import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FavItem from '../fav-item/fav-item.component';
import { selectFavItems } from '../../redux/favorites/fav.selectors';

import './dropdown-section.styles.scss';

const DropdownSection = ({ favItems, title }) => {
    return (
        <div className='dropdown-section'>
            <span className='item-title'>{title}<hr /></span>
                <div className='test'>
                    {favItems.map(favItem => (
                        favItem.title === title
                        ? <FavItem key={favItem.id} item={favItem} />
                        : null
                    ))}
                </div>
        </div>
)};

const mapStateToProps = createStructuredSelector({
    favItems: selectFavItems
});

export default connect(mapStateToProps)(DropdownSection);