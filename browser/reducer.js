import { combineReducers } from 'redux';
import { LOAD_RESTAURANTS  } from './action-creator';

function allRestaurantReducer (state = {}, action) {
  switch (action.type) {
    case LOAD_RESTAURANTS: return action.receivedRestaurants;
    default: return state;
  }
}

const rootReducer = combineReducers({
  allRestaurants: allRestaurantReducer
});

export default rootReducer;