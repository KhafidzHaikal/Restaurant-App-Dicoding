/* eslint-disable no-shadow */
import { createRestoItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Restaurant yang Anda sukai</h2>
        <div id="restaurant" class="restaurant">
        </div>
      </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
        callback(event.target.value);
    });
  }

  showFavoriteRestaurant(restaurant = []) {
    document.getElementById('restaurant').innerHTML = '<div class="restaurant-item__not__found"></div>';

    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurant').innerHTML = html;
    document.getElementById('restaurant').dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada Restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
