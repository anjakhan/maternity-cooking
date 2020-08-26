import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FavItem from '../fav-item/fav-item.component';
import { selectFavItems } from '../../redux/favorites/fav.selectors';

import './fav-dropdown.styles.scss';

const FavDropdown = ({ favItems }) => (
    <div className='fav-dropdown'>
        <div className='fav-items'>
            <span className='item-title'>Cooking<hr /></span>
                {favItems.map(favItem => (
                    favItem.title === 'Cooking'
                    ? <FavItem key={favItem.id} item={favItem} />
                    : null
                ))}
            <span className='item-title'>Baking<hr /></span>
                {favItems.map(favItem => (
                    favItem.title === 'Baking'
                    ? <FavItem key={favItem.id} item={favItem} />
                    : null
                ))}
            <span className='item-title'>Babys Food<hr /></span>
                {favItems.map(favItem => (
                    favItem.title === 'BabyFood'
                    ? <FavItem key={favItem.id} item={favItem} />
                    : null
                ))}
            <span className='item-title'>Baby Led Weaning<hr /></span>
                {favItems.map(favItem => (
                    favItem.title === 'BLW'
                    ? <FavItem key={favItem.id} item={favItem} />
                    : null
                ))}
            <span className='item-title'>Smoothies & Energy Snacks<hr /></span>
                {favItems.map(favItem => (
                    favItem.title === 'Smoothies'
                    ? <FavItem key={favItem.id} item={favItem} />
                    : null
                ))}
        </div>
        <CustomButton>go to favorites</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    favItems: selectFavItems(state)
});

export default connect(mapStateToProps)(FavDropdown);