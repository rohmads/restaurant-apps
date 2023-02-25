import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
      <div class="card">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="description">
          <h4 class="location-label">${restaurant.city}</h4>
          <h1>${restaurant.name}</h1>
          <hr>
          <h4 class="rating">Rating : ${restaurant.rating}</h4>
          <div class="description-text">
            <p>${restaurant.description}</p>
          </div>
          </div>
          <div class="btn-container">
            <a href="/#/detail/${restaurant.id}">Details</a>
          </div>
      </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-page">
  <h2>Restaurant Detail</h2>
    <div class="detail-card">
      <div class="detail-img">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      </div>
      <div class="detail-description">
        <div class="detail-description-name">
          <h1>${restaurant.name}</h1>
        </div>
        <div class="detail-description-city">
          <h4>${restaurant.city}</h4>
          <h4>|</h4>
          <h4>Rating : ${restaurant.rating}</h4>
        </div>
        <hr>
        <div class="detail-description-desc">
          <h4>${restaurant.address}</h4>
          <p>${restaurant.description}</p>
        </div>
        <hr>
        <div class="detail-menu">
          <h3>Menu</h3>
          <div id="menuItemFoodsContainer" class="items">
          </div>
          <div id="menuItemDrinksContainer" class="items">
          </div>
        </div>
        <hr>
        <div class="detail-review">
          <h3>Review</h3>
          <div id="reviewContainer" class="review-items-list">
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const detailMenuItem = (food) => `
  <h4>${food.name}</h4>
`;

const cardReview = (review) => `
  <div class="review-card">
    <h4>${review.name}</h4>
    <h5>${review.date}</h5>
    <hr>
    <p>"${review.review}"</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <div id="likeButtonContainer">
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  </div>
`;

const createLikedButtonTemplate = () => `
  <div id="likeButtonContainer">
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  </div>
`;

const createRestaurantFavoriteItemTemplate = (restaurant) => `
      <div class="card">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="description">
          <h4 class="location-label">${restaurant.city}</h4>
          <h1>${restaurant.name}</h1>
          <hr>
          <h4 class="rating">Rating : ${restaurant.rating}</h4>
          <div class="description-text">
            <p>${restaurant.description}</p>
          </div>
          </div>
          <div class="btn-container">
            <a href="/#/detail/${restaurant.id}">Details</a>
          </div>
      </div>
`;

const createEmptyRestaurantFavoriteItemTemplate = () => `
    <div class="card-list-empty">
      <div class="container">
        <h1>Favorite Restaurant is Empty...</h1>
      </div>
    </div>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  detailMenuItem,
  cardReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantFavoriteItemTemplate,
  createEmptyRestaurantFavoriteItemTemplate,
};
