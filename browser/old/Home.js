import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Map from './Map';

import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <Map/>
      </div>
    );
  }
}
