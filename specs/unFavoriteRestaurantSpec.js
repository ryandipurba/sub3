import FavoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Remove Favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show the unFavorite restaurant button when the restaurant already add to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="remove restaurant from favorite"]'))
      .toBeTruthy();
  });

  it('should not show the Favorite restaurant button when the restaurant already add to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="add restaurant from favorite"]'))
      .toBeFalsy();
  });

  it('should able to remove restaurant from favorite restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    const allFavoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allFavoriteRestaurant).toEqual([]);
  });

  it('should not throw error if the unFavorite restaurant is not in favorite restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="remove restaurant from favorite"]').dispatchEvent(new Event('click'));
    const allFavoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allFavoriteRestaurant).toEqual([]);
  });
});
