export const LOAD_RESTAURANTS = "LOAD_RESTAURANTS";
export const UPDATE_CURRANT_LOCATION = "UPDATE_CURRANT_LOCATION";
export const UPDATE_POP_RESTAURANT = "UPDATE_POP_RESTAURANT";
export const FILTER_RESTAURANTS = "FILTER_RESTAURANTS";
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
          // console.log("arr", restaurants.data);
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

export const hideRestaurant = function(){
    return function (dispatch){
        const action = receiveRestaurant([]);
        dispatch(action);
    }
}

const receivePopRestaurant = function (restaurant){
  return{
    type: UPDATE_POP_RESTAURANT,
    receiveRestaurant: restaurant
  }


}
export const popRestaurant = function(restaurant){
  return function (dispatch){
      const action = receivePopRestaurant(restaurant);
      dispatch(action);
  }

}
const receiveFilterRestaurant = function (restaurant){
  return{
    type: FILTER_RESTAURANTS,
    receiveFilterRestaurant: restaurant
  }


}
export const updateFilterRestaurant = function(restaurant){
  return function (dispatch){
      const action = receiveFilterRestaurant(restaurant);
      dispatch(action);
  }

}