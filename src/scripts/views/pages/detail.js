import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantDetailTemplate,
  detailMenuItem,
  cardReview,
  createLikeButtonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <h2>Detail</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#mainContent');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const menuFoods = restaurant.menus.foods;
    const menuFoodsContainer = document.querySelector('#menuItemFoodsContainer');
    menuFoods.forEach((food) => {
      menuFoodsContainer.innerHTML += detailMenuItem(food);
    });

    const menuDrinks = restaurant.menus.drinks;
    const menuDrinksContainer = document.querySelector('#menuItemDrinksContainer');
    menuDrinks.forEach((drink) => {
      menuDrinksContainer.innerHTML += detailMenuItem(drink);
    });

    const reviews = restaurant.customerReviews;
    const reviewContainer = document.querySelector('#reviewContainer');
    reviews.forEach((review) => {
      reviewContainer.innerHTML += cardReview(review);
    });

    restaurantContainer.innerHTML += createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        address: restaurant.address,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
