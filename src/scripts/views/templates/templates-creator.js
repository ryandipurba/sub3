/* eslint-disable no-plusplus */
import CONFIG from '../../globals/config';

const createRestaurantCard = (restaurant) => `
  <a class="list__item restaurant__card" href="#/detail/${restaurant.id}" aria-label="${restaurant.name}">
      <div class="list__image--container">
        <img
          data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
          alt="${restaurant.name}"
          crossorigin="anonymous"
          class="lazyload list__image"
        />
      </div>
      <div class="list__content">
        <div class="list__data">
          <h2 class="list__title">${restaurant.name}</h2>
          <p class="list__description">
            ${restaurant.description}
          </p>
        </div>
        <div class="list__info">
          <div>
            <h3>Rating:</h3>
            <span>${restaurant.rating}</span>
          </div>
          <div>
            <h3>City:</h3>
            <span>${restaurant.city}</span>
          </div>
        </div>
      </div>
    </a>
`;
const createSkeletonRestaurantCard = () => {
  let skeletonCards = '';
  for (let i = 0; i < 20; i++) {
    skeletonCards += `
      <div class="list__item list__item--skeleton">
        <div class="list__image--container">
          <div class="list__image"></div>
        </div>
        <div class="list__content">
          <div class="list__data">
            <h2 class="list__title"></h2>
            <p class="list__description">
            </p>
          </div>
          <div class="list__info">
            <div>
              
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    `;
  }
  return skeletonCards;
};

const createLoader = () => `
  <div class="indicator">
    <div class="spinner">
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
    </div>
  </div>
`;

const createList = (list) => {
  let collections = '';
  list.forEach((item) => {
    collections += `<li>${item.name}</li>`;
  });
  return collections;
};

const createHeroDetail = (restaurant) => `
  <div class="hero__content">
    <div class="hero__rating">
        <img src="icons/star-solid.svg" alt="star"class="hero__star"/>
        <span class="hero__score">${restaurant.rating}</span>
    </div>
    <h1 class="hero__title">
      ${restaurant.name}
    </h1>
    <p class="hero__location">${restaurant.address}, ${restaurant.city}</p>
  </div>
`;

const createDetailBody = (restaurant) => `
  <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" class="detail__image">
  <div class="detail__text">
    <ul class="detail__category">
      ${createList(restaurant.categories)}
    </ul>
    <p class="detail__description">${restaurant.description}</p>
    <div class="detail__menus">
      <ul>
        <li>Food's</li>
        <ul>
        ${createList(restaurant.menus.foods)}
        </ul>
      </ul>
      <ul>
        <li>Drink's</li>
        <ul>
          ${createList(restaurant.menus.drinks)}
        </ul>
      </ul>
    </div>
    <div class="detail__reviews">
      <h2>Customer Reviews :</h2>
      <form id="review-form" class="detail__form">
        <input type="text" placeholder="Name" id="review-name">
        <textarea placeholder="Review" id="review-review"></textarea>
        <button type="submit">Give Review</button>
      </form>
      <ul>
        ${restaurant.customerReviews.map((review) => (`<li class="review__user">
            <div>
            <span class="avatar">${review.name ? review.name[0] : '-'}</span>
            </div>
            <div class="review__info">
            <h3> ${review.name}</h3>
            <p> ${review.review}</p>
            <time> ${review.date}</time>
            </div>
          </li>`)).join(' ')}
      </ul>
    </div>
  </div>
`;

const createFavoriteButton = () => `
  <button aria-label="add restaurant to favorite" id="favorite-button" class="favorite">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;
const createUnFavoriteButton = () => `
  <button aria-label="remove restaurant from favorite" id="favorite-button" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmpty = () => `
  <div class="indicator">
    <p class="text-center" id="empty-favorite-state">Oops ... it looks like your Favorites List is empty<h2>
  </div>
`;

export {
  createRestaurantCard,
  createDetailBody,
  createHeroDetail,
  createLoader,
  createFavoriteButton,
  createUnFavoriteButton,
  createEmpty,
  createSkeletonRestaurantCard,
};
