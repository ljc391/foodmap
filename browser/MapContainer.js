import { connect } from 'react-redux';
import { loadRestaurant, loadCurLocation , loadRestaurantWithDistance, updateGeo} from './action-creator';
import Map from './Map';

const mapStateToProps = function (state) {
  return {
    restaurants: state.allRestaurants,
    curLocation: state.curLocation,
    popRestaurant: state.popRestaurant,
    filterRestaurants: state.filterRestaurants,
    geo: state.geo
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadCurLocation: function (location) {
         // loadRestaurant();
      const thunk = loadCurLocation(location);
      dispatch(thunk);
    },
    loadRestaurantWithDistance: function(restaurants){
      const thunk = loadRestaurantWithDistance(restaurants);
      dispatch(thunk);
    },
    updateGeo: function(geo){
      const thunk = updateGeo(geo);
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps,mapDispatchToProps);
const MapContainer = componentCreator(Map);
export default MapContainer;