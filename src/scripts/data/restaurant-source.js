import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

const RestaurantSource = {
  async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  },

  async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  },

  async search(query) {
    const response = fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  },

  async addReview({ id, name, review }) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.ADD_REVIEW_KEY,
      },
      body: JSON.stringify({
        id, name, review,
      }),
    };
    const request = await fetch(API_ENDPOINT.ADD_REVIEW, options);
    const responseStatus = await request.status;
    return responseStatus;
  },
};

export default RestaurantSource;
