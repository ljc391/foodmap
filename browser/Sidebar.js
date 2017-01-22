import React from 'react';

export default class Sidebar extends React.Component {
  componentDidMount(){
    //this.props.onLoadPuppies();

  }
  render () {

    return (
      <div id = "sidebar">
        <h1>Elaine's Map NYC</h1>
        <input id="show-listings"   className="btn btn-info" defaultValue="Show All Places"/>
        <input id="hide-listings"   className="btn btn-warning"  defaultValue="Hide All Places"/>
        <input type="text" id = "inputbox" className="form-control" placeholder="Searching..."/>
        <p>Sort By <input type="radio" name="sort" id="price" checked="true" onChange="search()"/> Price <input type="radio" name="sort" id="rating" onChange="search()"/> Rating <input type="radio" name="sort" id="distance" onChange="search()"/> Distance</p>

        <ul id = "listOfPlaces">
        </ul>

      </div>
    )
  }
}