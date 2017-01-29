import React, { Component } from 'react';
import { Link } from 'react-router';
import Sidebar from './Sidebar';

import SidebarContainer from './SidebarContainer';
import Map from './Map';
import axios from 'axios';
export default class Home extends Component {

  componentDidMount () {
    // this.props.onLoadRestaurants();
    // this.props.onLoadPuppies();
    // console.log("here");
    // axios.get('/api')
    // .then(orders =>{console.log("load", orders); })
  }

  render () {
    // console.log("home", this.props);
    return (
      <div id = "home">
        <SidebarContainer />
        <Map/>
      </div>
    );
  }

}

