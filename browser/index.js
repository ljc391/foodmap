'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import axios from 'axios'
import ReactDOM from 'react-dom'
import HomeContainer from './HomeContainer';
import { hashHistory, IndexRoute } from 'react-router';
import store from './store'
import Home from './Home'
import { loadRestaurant } from './action-creator';

const onRestaurantEnter = function () {
  const thunk = loadRestaurant();
  store.dispatch(thunk);

};


ReactDOM.render(
  <Provider store={store}>

        <Router history={hashHistory}>
          <Route path="/" component={ HomeContainer } onEnter={onRestaurantEnter}  >
        </Route>
        </Router>
  </Provider>,
  document.getElementById('app')
);