export const LOAD_RESTAURANTS = "LOAD_RESTAURANTS";
export const UPDATE_CURRANT_LOCATION = "UPDATE_CURRANT_LOCATION";
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


const receiveLocation = function (location) {
  return {
    type: UPDATE_CURRANT_LOCATION,
    receivedCurrentLocation: location
  };
};

export const loadCurLocation = function (location) {
  return function (dispatch) {
    console.log("action creater loadCurLocation");
    const action = receiveLocation(location);
    dispatch(action);
  };
};