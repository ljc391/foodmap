import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Sidebar extends React.Component {
  componentDidMount(){
    //this.props.onLoadPuppies();
    this.showListings = this.showListings.bind(this);
  }

  showListings(e) {
    e.preventDefault();
    console.log("click show listings");
    //   axios.get('/restaurant')
    //   .then((res) =>{
    //     console.log(res);
    //   }
    //   )
    //   .catch(err=> console.log(err.stack))


    // axios.get('/api')
    // .then(orders =>{console.log("load", orders); })
    //{user_id:res.data[0].user_id, order_id:res.data[0].id, products:res.data[0].products}
  // Extend the boundaries of the map for each marker and display the marker
  // var ul = document.getElementById("listOfPlaces");
  // var mlen = markers.length;
  // for (var i = 0; i < markers.length; i++) {
  //   showMark(i)
  //   if(mlen>ul.children.length){
  //     var li = document.createElement('li');
  //     var tag = document.createElement('a');
  //     tag.setAttribute("href",'javascript:;');
  //     tag.setAttribute("onclick",'showTag('+i+');' )
  //     tag.appendChild(document.createTextNode(markers[i].title));
  //     var img = document.createElement('img');
  //     img.setAttribute("src",  markers[i].properties.img);
  //     li.appendChild(img);
  //     li.appendChild(tag);
  //     ul.appendChild(li);
  //   }
  // }
}
  render () {
        console.log("sidebar", this.props);
    return (
      <div id = "sidebar">
        <h1>Elaine's Map NYC</h1>
        <input id="show-listings"   className="btn btn-info" defaultValue="Show All Places" onClick={this.showListings}/>
        <input id="hide-listings"   className="btn btn-warning"  defaultValue="Hide All Places"/>
        <input type="text" id = "inputbox" className="form-control" placeholder="Searching..."/>
        <p>Sort By <input type="radio" name="sort" id="price" checked="true" onChange="search()"/> Price <input type="radio" name="sort" id="rating" onChange="search()"/> Rating <input type="radio" name="sort" id="distance" onChange="search()"/> Distance</p>

        <ul id = "listOfPlaces">
          {this.props.restaurants.length>0 ? this.props.restaurants.map(restaurant => {
                      return (
                          <li key = {restaurant.id}>
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