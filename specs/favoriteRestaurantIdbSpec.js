import itActsAsFavoriteRestaurantModel from "./contracts/favoriteRestaurantContract";
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Test', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
