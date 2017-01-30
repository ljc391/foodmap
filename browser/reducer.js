import { combineReducers } from 'redux';
import { LOAD_RESTAURANTS,UPDATE_CURRANT_LOCATION  } from './action-creator';

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

const rootReducer = combineReducers({
  allRestaurants: allRestaurantReducer,
  curLocation: curLocationReducer

});

export default rootReducer;