import { connect } from 'react-redux';
import {  hideRestaurant, loadRestaurant } from './action-creator';
import Sidebar from './Sidebar';

const mapStateToProps = function (state) {
  return {
    restaurants: state.allRestaurants
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
    }
  };
};


const componentCreator = connect(mapStateToProps,mapDispatchToProps);
const SidebarContainer = componentCreator(Sidebar);
export default SidebarContainer;