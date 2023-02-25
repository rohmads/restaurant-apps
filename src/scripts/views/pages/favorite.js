import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantFavoriteItemTemplate, createEmptyRestaurantFavoriteItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <h1 class="title-list">Favorite Restaurant</h1>

      <section>
        <div class="card-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.card-list');

    if (restaurant.length === 0) {
      restaurantContainer.innerHTML += createEmptyRestaurantFavoriteItemTemplate();
    } else {
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += createRestaurantFavoriteItemTemplate(resto);
      });
    }

  },
};

export default Like;
