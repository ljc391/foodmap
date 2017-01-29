import { combineReducers } from 'redux';
// import { RECEIVE_PUPPIES, SELECT_PUPPY } from './action-creators';

const RECEIVE_PUPPIES = "RECEIVE_PUPPIES";
const SELECT_PUPPY = "SELECT_PUPPY";
function allPuppiesReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_PUPPIES: return action.receivedPuppies;
    default: return state;
  }
}

function selectedPuppyReducer (state = {}, action) {
  switch (action.type) {
    case SELECT_PUPPY: return action.selectedPuppy;
    default: return state;
  }
}

const rootReducer = combineReducers({
  allPuppies: allPuppiesReducer,
  selectedPuppy: selectedPuppyReducer
});

export default rootReducer;