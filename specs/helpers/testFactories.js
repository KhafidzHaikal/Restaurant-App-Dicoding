/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createLikeButtonInitiatorWithRestaurant };
