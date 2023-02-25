import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
    <section id="heroContent" role="img" aria-label="Hero Image" title="Hero Image" class="hero">
      <div class="hero-text">
        <h1>Discover New Taste</h1>
        <p>every place has a unique taste</p>
      </div>
    </section>

    <h1 class="title-list">Explore Restaurant</h1>

    <section>
      <div class="card-list"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('.card-list');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default List;
