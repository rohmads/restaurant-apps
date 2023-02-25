const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.seeElement('.card-list');
  I.see('Favorite Restaurant is Empty...', '.card-list-empty');
});

Scenario('Liking and Unliking one Restaurant', async ({ I }) => {
  I.see('Favorite Restaurant is Empty...', '.card-list-empty');
  I.amOnPage('/');

  I.waitForElement('.card .btn-container a', 20);
  I.seeElement('.card .btn-container a');

  const firstRestaurantName = locate('.card .description h1').first();
  const firstRestaurantNameTitle = await I.grabTextFrom(firstRestaurantName);

  const firstRestaurant = locate('.card .btn-container a').first();
  const firstRestaurantButton = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantButton);
  
  I.waitForElement('.detail-card .detail-img');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-list');
  
  const likedRestaurant = await I.grabTextFrom('.card .description h1');
  assert.strictEqual(firstRestaurantNameTitle, likedRestaurant);

  // Unliking
  I.amOnPage('/#/favorite');
  I.seeElement('.card-list');
  
  const firstLikingRestaurant = locate('.card .btn-container a').first();
  const firstLikingRestaurantButton = await I.grabTextFrom(firstLikingRestaurant);
  I.click(firstLikingRestaurantButton);

  I.waitForElement('.detail-card .detail-img');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Favorite Restaurant is Empty...', '.card-list-empty');
});
