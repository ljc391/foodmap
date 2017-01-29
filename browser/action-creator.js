export const LOAD_RESTAURANTS = "LOAD_RESTAURANTS";

import axios from 'axios';
const receiveRestaurant = function (restaurants) {
  return {
    type: LOAD_RESTAURANTS,
    receivedRestaurants: restaurants
  };
};

export const loadRestaurant = function () {
  return function (dispatch) {
    console.log("action creater loadRestaurant");

    axios.get('/api')
      // .then(res => res.json())
      .then(restaurants => {

        const action = receiveRestaurant(restaurants.data);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};