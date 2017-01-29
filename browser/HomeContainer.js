import { connect } from 'react-redux';
import { loadRestaurant } from './action-creator';
import Home from './Home';

const mapStateToProps = function (state) {
  return {
    restaurants: state.allRestaurants
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadRestaurants: function () {
         // loadRestaurant();
      const thunk = loadRestaurant();
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const HomeContainer = componentCreator(Home);
export default HomeContainer;