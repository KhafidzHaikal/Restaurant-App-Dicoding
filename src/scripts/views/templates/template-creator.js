import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <picture class="pisture_resto">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}"/>
  </picture>
  <div class="resto__info">
    <h3>Information</h3>
    <hr>
    <table>
      <tr>
        <td><h4>Alamat</h4></td>
        <td><h4>Kategori</h4></td>
      </tr>
      <tr>
      <td><p>${resto.address}</p></td>
      <td><p>${resto.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}</p></td>
      </tr>
      <tr>
      <td><h4>Kota</h4></td>
      <td><h4>Rating</h4></td>
      </tr>
      <tr>
      <td><p>${resto.city}</p></td>
      <td><p>${resto.rating}</p></td>
      </tr>
      <tr>
      <td><h4>Menu Makanan</h4></td>
      <td><h4>Menu Minuman</h4></td>
      </tr>
      <tr>
      <td><p> ${resto.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}</p></td>
      <td><p> ${resto.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}</p></td>
      </tr>
    </table>
  </div>
  <div class="resto__overview">
    <h2>Overview</h2>
    <p>${resto.description}</p>
  <div id="review">
  <h2>Consumer Review</h2>
  ${resto.customerReviews.map((review) => `
    <h3>${review.name}, <span class="date">${review.date}</span></h3>
    <p>${review.review}</p>
      `).join('')}
  </div>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
    <picture>
      <img class="lazyload" alt="${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
    </picture>
      <div class="resto-item__header__rating">${resto.city}
      </div>
    </div>
    <div class="resto-item__content">
    <p class="list_item_rating">⭐️ <span class="list_item_rating_value" tabindex="0">${resto.rating}</span>
    </p>
      <h2><a href="/#/detail/${resto.id}">${resto.name}</a></h2>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButton = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButton,
  createLikedButton,
};
