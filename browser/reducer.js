import { combineReducers } from 'redux';
import { LOAD_RESTAURANTS, UPDATE_CURRANT_LOCATION, UPDATE_POP_RESTAURANT, FILTER_RESTAURANTS} from './action-creator';

function allRestaurantReducer (state = {}, action) {
  switch (action.type) {
    case LOAD_RESTAURANTS: return action.receivedRestaurants;
    default: return state;
  }
}
function curLocationReducer(state = {}, action){
  switch(action.type){
    case UPDATE_CURRANT_LOCATION: return action.receivedCurrentLocation;
    default: return state;
  }
}
function popRestaurantReducer(state = null, action){
  switch(action.type){
    case UPDATE_POP_RESTAURANT: return action.receiveRestaurant;
    default: return state;
  }
}
function filterRestaurantReducer(state = null, action){
  switch(action.type){
    case FILTER_RESTAURANTS: return action.receiveFilterRestaurant;
    default: return state;
  }
}

const rootReducer = combineReducers({
  allRestaurants: allRestaurantReducer,
  curLocation: curLocationReducer,
  popRestaurant: popRestaurantReducer,
  filterRestaurants: filterRestaurantReducer

});

export default rootReducer;