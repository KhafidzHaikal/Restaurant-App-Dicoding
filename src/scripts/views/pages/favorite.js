import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Restaurant yang Anda Sukai</h2>
            <div id="restaurants" class="restaurants">
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
