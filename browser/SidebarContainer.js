import { connect } from 'react-redux';
import { loadRestaurant } from './action-creator';
import Sidebar from './Sidebar';

const mapStateToProps = function (state) {
  return {
    restaurants: state.allRestaurants
  };
};

// const mapDispatchToProps = function (dispatch) {
//   return {
//     // onLoadRestaurants: function () {
//     //      // loadRestaurant();
//     //   const thunk = loadRestaurant();
//     //   dispatch(thunk);
//     // }
//   };
// };

const componentCreator = connect(mapStateToProps,null);
const SidebarContainer = componentCreator(Sidebar);
export default SidebarContainer;