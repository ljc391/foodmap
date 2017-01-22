import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Map from './Map';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

ReactDOM.render(<App />, document.getElementById('app'));