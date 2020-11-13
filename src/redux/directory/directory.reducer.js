const INITIAL_STATE = {
    sections: [
        {
          title: 'cooking',
          imageUrl: 'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2020/4/7/bd7b1ee8a60b4ffb9910640985eb91e5_18.jpg',
          id: 1,
          linkUrl: 'recipes/cooking',
          count: 9
        },
        {
          title: 'baking',
          imageUrl: 'https://superiorculinarycenter.com/wp-content/uploads/2019/03/baking.jpg',
          id: 2,
          linkUrl: 'recipes/baking',
          count: 8
        },
        {
          title: 'baby food',
          imageUrl: 'https://mampfbar.de/wp-content/uploads/2017/03/5-beste-gemuesesorten-1150x768.jpg',
          id: 3,
          linkUrl: 'recipes/babyfood',
          count: 5
        },
        {
          title: 'baby led weaning',
          imageUrl: 'https://www.babyartikel.de/magazin/wp-content/uploads/2015/03/baby-led-weaning-essen-1050x700.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'recipes/blw',
          count: 7
        },
        {
          title: 'smoothies & snacks',
          imageUrl: 'https://www.healthyrockstar.com/wp-content/uploads/smoothiesgesund-820x547.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'recipes/smoothies',
          count: 6
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;