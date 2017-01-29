'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import AllPuppiesContainer from './components/all-puppies/AllPuppiesContainer';
// import SinglePuppyContainer from './components/single-puppy/SinglePuppyContainer';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './home';


// const onPuppiesEnter = function () {
//   const thunk = loadPuppies();
//   store.dispatch(thunk);
// };

// const onSinglePuppyEnter = function (nextRouterState) {
//   const puppyId = nextRouterState.params.puppyId;
//   const thunk = loadOnePuppy(puppyId);
//   store.dispatch(thunk);
// };

ReactDOM.render(
  <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Home} >
          </Route>
        </Router>
  </Provider>,
  document.getElementById('app')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Sidebar from './Sidebar';
// import Map from './Map';

// import axios from 'axios';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//     this.loadAllReataurants = this.loadAllReataurants.bind(this);
//   }
//   componentDidMount(){
//     this.loadAllReataurants();

//   }
//   loadAllReataurants(){

//     axios.get('/api')
//     .then(orders =>{console.log("load", orders); })
//   }
//   render() {
//     return (
//       <div>
//         <Sidebar/>
//         <Map/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));


