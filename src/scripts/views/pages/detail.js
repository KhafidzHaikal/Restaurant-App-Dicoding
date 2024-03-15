import UrlParser from '../../routes/url-parser';
import TheRestoDB from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const contentBody = document.querySelector('#contentBody');
    contentBody.style.display = '';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await TheRestoDB.detailResto(url.id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestoIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
