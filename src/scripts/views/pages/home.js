import TheRestoDB from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section id="main-content">
            <div class="content">
            <h1 class="title-content">Explore Restaurants</h1>
            <div class="list" id="listResto"></div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const contentBody = document.querySelector('#contentBody');
    contentBody.style.display = '';
    const restaurants = await TheRestoDB.RestaurantsAll();
    // console.log(restaurants)
    const restosContainer = document.querySelector('#listResto');
    restaurants.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
