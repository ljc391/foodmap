import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
const style = {
  margin: 12,
};

export default class Sidebar extends React.Component {
  componentDidMount(){
    //this.props.onLoadPuppies();
    this.showListings = this.showListings.bind(this);
    this.hideListings = this.hideListings.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.searchInput = this.searchInput.bind(this);
    this.sortRestaurants = this.sortRestaurants.bind(this);
    this.state = {sortBy:"price",
                  price:"true",
                  rating:"false",
                  distance:"false"};
  }

  showListings(e) {
    // e.preventDefault();
    console.log("click show listings");
    var res = this.props.restaurants;
    if(this.props.filterRestaurants.length>0)res= this.props.filterRestaurants;
    if(this.state.sortBy == "price"){
          res.sort(function(a,b){
            return a.price-b.price;
          })
    }else if(this.state.sortBy == "rating"){
            res.sort(function(a,b){
              return b.rating-a.rating;
            })
    }else{
    }

    this.props.updateFilterRestaurant(res);

  }
  hideListings(e) {
    // e.preventDefault();
    console.log("click Hide listings", this.props);
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
      console.log("name", this.props.restaurants[i].name);
      if(this.props.restaurants[i].name.toLowerCase().indexOf(title)>=0 ){
        console.log("push");
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
  sortRestaurants(e){
    console.log("sort restaurants by price", e.target.id);
    e.target.checked = true;
    this.setState({sortBy: e.target.id});
    var res = this.props.restaurants;
    if(this.props.filterRestaurants.length>0)res= this.props.filterRestaurants;
    if(e.target.id == "price"){

          res.sort(function(a,b){
            return a.price-b.price;
          })
            // console.log("--------sort by price", res);
    }else if(e.target.id == "rating"){
      // console.log("--------sort by rating");
            res.sort(function(a,b){
              return b.rating-a.rating;
            })
            // console.log("--------sort by rating", res);
    }else{
      console.log("sortBy distance", res[0]['marker']['distance']);
      res.sort(function(a,b){
              return a.marker.distance.split(" ")[0]-b.marker.distance.split(" ")[0];
            })
    }

    this.props.updateFilterRestaurant(res);
  }
  render () {
        console.log("sidebar", this.state);
    return (
      <div id = "sidebar">
        <h1>Elaine's Map NYC</h1>

        <RaisedButton label="Show All Restaurants" primary={true} style={style} onClick={this.showListings} fullWidth={true} />
        <RaisedButton label="Hide All Restaurants" secondary={true} style={style} onClick={this.hideListings} fullWidth={true} />
        <TextField hintText="Searching..." fullWidth={true} onChange={this.searchInput}/>
        <p>Sort By</p>
        <RadioButtonGroup name="status" defaultSelected="price" style={{ display: 'flex', width: '20px'}} >
          <RadioButton id = "price" value="price" label="price"default onClick={this.sortRestaurants}  style={{ paddingLeft:'10px'}}  />
          <RadioButton id = "rating" value="rating" label="rating" onClick={this.sortRestaurants} style={{ paddingLeft:'10px'}}   />
          <RadioButton id = "distance" value="distance" label="distance" onClick={this.sortRestaurants} style={{ paddingLeft:'10px'}}   />
          </RadioButtonGroup>
         <ul id = "listOfPlaces">
          {this.props.filterRestaurants&&this.props.filterRestaurants.length>0 ? this.props.filterRestaurants.map(restaurant => {
                      return (
                          <li key = {restaurant.id} name = "ha" onClick={() => this.showInfo(restaurant.id)}>
                            <img src={restaurant.img} />
                          <p>{ restaurant.name } </p>
                          <span><br />{this.state.sortBy=="distance"?restaurant.marker.distance:""}</span>

                          </li>

                      )
                    }):null}
        </ul>

      </div>
    )
  }
}