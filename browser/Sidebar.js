import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Sidebar extends React.Component {
  componentDidMount(){
    //this.props.onLoadPuppies();
    this.showListings = this.showListings.bind(this);
    this.hideListings = this.hideListings.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.searchInput = this.searchInput.bind(this);
  }

  showListings(e) {
    // e.preventDefault();
    console.log("click show listings");

    this.props.updateFilterRestaurant(this.props.restaurants);
    // this.props.loadRestaurant();

  }
  hideListings(e) {
    // e.preventDefault();
    console.log("click Hide listings", this.props);
    // this.props.hideRestaurants();
    this.props.updateFilterRestaurant([]);

  }
  showInfo(id){
    // e.preventDefault();
    console.log("show infor");
    console.log(id);
    this.props.popRestaurant(id);
  }
  searchInput(e){
    var title = e.target.value.toLowerCase();
    var res = [];
    for(var i = 0; i < this.props.restaurants.length; i++){
      if(this.props.restaurants[i].name.indexOf(title)>=0 ){
        res.push(this.props.restaurants[i]);
      }else{
        for(var j = 0; j < this.props.restaurants[i].tags.length; j++){

          if(this.props.restaurants[i].tags[j].indexOf(title)>=0 ){
            res.push(this.props.restaurants[i] );
            break;
          }
        }
      }
    }
    this.props.updateFilterRestaurant(res);
    // event.target.value
  }
  render () {
        // console.log("sidebar", this.props);
    return (
      <div id = "sidebar">
        <h1>Elaine's Map NYC</h1>
        <input id="show-listings"   className="btn btn-info" defaultValue="Show All Places" onClick={this.showListings} />
        <input id="hide-listings"   className="btn btn-warning"  defaultValue="Hide All Places" onClick={this.hideListings} />
        <input type="text" id = "inputbox" className="form-control" placeholder="Searching..."onChange={this.searchInput}/>
        <p>Sort By <input type="radio" name="sort" id="price"   /> Price <input type="radio" name="sort" id="rating"  /> Rating <input type="radio" name="sort" id="distance"  /> Distance</p>

        <ul id = "listOfPlaces">
          {this.props.filterRestaurants&&this.props.filterRestaurants.length>0 ? this.props.filterRestaurants.map(restaurant => {
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