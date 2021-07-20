const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Oops ... it looks like your Favorites List is empty', '#empty-favorite-state');
});

Scenario('Add Restaurant to Favorite restaurant list', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__card');
  const firstRestaurantName = await I.grabTextFrom(locate('.restaurant__card .list__title').first());
  I.click(locate('.restaurant__card').first());
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__card');
  const favoriteRestaurantName = await I.grabTextFrom('.restaurant__card .list__title');
  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('add then Remove Restaurant from Favorite restaurant list', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__card');
  I.click(locate('.restaurant__card').first());
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__card');
  I.click('.restaurant__card');

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.see('Oops ... it looks like your Favorites List is empty', '#empty-favorite-state');
});
