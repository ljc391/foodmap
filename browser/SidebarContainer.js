import { connect } from 'react-redux';
import {  hideRestaurant, loadRestaurant, popRestaurant, updateFilterRestaurant } from './action-creator';
import Sidebar from './Sidebar';

const mapStateToProps = function (state) {
  return {
    restaurants: state.allRestaurants,
    filterRestaurants: state.filterRestaurants
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    hideRestaurants:  ()=> {
         // loadRestaurant();
      console.log("container hide");
      const thunk = hideRestaurant();
      dispatch(thunk);
    },
    loadRestaurant: ()=>{
      console.log("container show");
      const thunk = loadRestaurant();
      dispatch(thunk);
    },
    popRestaurant: (reataurant)=> {
      console.log("pop restaurant");
      const thunk = popRestaurant(reataurant);
      dispatch(thunk);
    },
    updateFilterRestaurant: (reataurants)=> {
      console.log("pop restaurant");
      const thunk = updateFilterRestaurant(reataurants);
      dispatch(thunk);
    }
  };
};


const componentCreator = connect(mapStateToProps,mapDispatchToProps);
const SidebarContainer = componentCreator(Sidebar);
export default SidebarContainer;