/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import itActsAsFavoriteRestaurantModel from './contract/favoriteRestoContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
