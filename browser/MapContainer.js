import { connect } from 'react-redux';
import { loadRestaurant, loadCurLocation } from './action-creator';
import Map from './Map';

const mapStateToProps = function (state) {
  return {
    restaurants: state.allRestaurants,
    curLocation: state.curLocation,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadCurLocation: function (location) {
         // loadRestaurant();
      const thunk = loadCurLocation(location);
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps,null);
const MapContainer = componentCreator(Map);
export default MapContainer;