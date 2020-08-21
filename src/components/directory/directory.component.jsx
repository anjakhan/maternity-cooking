import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'cooking',
                  imageUrl: 'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2020/4/7/bd7b1ee8a60b4ffb9910640985eb91e5_18.jpg',
                  id: 1,
                  linkUrl: 'recipes/cooking'
                },
                {
                  title: 'baking',
                  imageUrl: 'https://superiorculinarycenter.com/wp-content/uploads/2019/03/baking.jpg',
                  id: 2,
                  linkUrl: 'recipes/baking'
                },
                {
                  title: 'baby food',
                  imageUrl: 'https://mampfbar.de/wp-content/uploads/2017/03/5-beste-gemuesesorten-1150x768.jpg',
                  id: 3,
                  linkUrl: 'recipes/babyfood'
                },
                {
                  title: 'baby led weaning',
                  imageUrl: 'https://www.babyartikel.de/magazin/wp-content/uploads/2015/03/baby-led-weaning-essen-1050x700.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'recipes/blw'
                },
                {
                  title: 'smoothies & energy snacks',
                  imageUrl: 'https://www.healthyrockstar.com/wp-content/uploads/smoothiesgesund-820x547.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'recipes/smoothies'
                }
              ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
};

export default Directory;