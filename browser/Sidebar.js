import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Sidebar extends React.Component {
  componentDidMount(){
    //this.props.onLoadPuppies();
    this.showListings = this.showListings.bind(this);
    this.hideListings = this.hideListings.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  showListings(e) {
    // e.preventDefault();
    console.log("click show listings");
    this.props.loadRestaurant();

  }
  hideListings(e) {
    // e.preventDefault();
    console.log("click Hide listings", this.props);
    this.props.hideRestaurants();

  }
  showInfo(id){
    // e.preventDefault();
    console.log("show infor");
    console.log(id);
    this.props.popRestaurant(id);
  }
  render () {
        // console.log("sidebar", this.props);
    return (
      <div id = "sidebar">
        <h1>Elaine's Map NYC</h1>
        <input id="show-listings"   className="btn btn-info" defaultValue="Show All Places" onClick={this.showListings} />
        <input id="hide-listings"   className="btn btn-warning"  defaultValue="Hide All Places" onClick={this.hideListings} />
        <input type="text" id = "inputbox" className="form-control" placeholder="Searching..."/>
        <p>Sort By <input type="radio" name="sort" id="price"   /> Price <input type="radio" name="sort" id="rating"  /> Rating <input type="radio" name="sort" id="distance"  /> Distance</p>

        <ul id = "listOfPlaces">
          {this.props.restaurants.length>0 ? this.props.restaurants.map(restaurant => {
                      return (
                          <li key = {restaurant.id} name = "ha" onClick={() => this.showInfo(restaurant.id)}>
                            <img src={restaurant.img} />
                          { restaurant.name }
                          </li>

                      )
                    }):null}
        </ul>

      </div>
    )
  }
}