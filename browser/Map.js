import React from 'react';


export default class Map extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor", props);
        this.map;
        this.markers = [];
        this.largeInfowindow;
        this.state = {curmarker:null};
        this.curmarker ;

        this.clearMark = this.clearMark.bind(this);


    }
    componentWillMount(){
        console.log("WILLM------",this.props);
    }
    componentDidMount(){
        console.log("DIDM------",this.props);
        this.initMap();

    }
    componentDidUpdate(){
        console.log("DIDUPDATE--------", this.props);


        if(this.curmarker){
          this.clearMark();
         this.loadMarkers();
       }
        if(this.props.popRestaurant){
          // console.log("POP restaurants", this.props.popRestaurant);
          var cur;
          for(var i = 0; i < this.markers.length; i++){
            // console.log(this.markers[i], "index", i);
            if(this.markers[i].id == this.props.popRestaurant) cur =this.markers[i];
          }
          this.populateInfoWindow(cur, this.largeInfowindow);
        }

    }
    componentWillReceiveProps(){
        console.log("WILLRECEVE--------",this.props);



    }
    componentWillUpdate(){
        console.log("WILLUPDATE-----------",this.props);


    }
    initMap(){
        console.log("init");
        this.map = new google.maps.Map(this.refs.map, {
          zoom: 16
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=> {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                this.curmarker = new google.maps.Marker({
                    map: this.map,
                    position: pos,
                    title: "current location",
                    icon: "./images/cur.png"
                });
                this.curmarker.setMap(this.map);
                this.map.setCenter(pos);
                // console.log("GET CURRENT LOCATION");
                this.loadMarkers();

            });


        }


    }
    loadMarkers(){
        console.log("loadMarkers");
        this.largeInfowindow = new google.maps.InfoWindow();
        // var bounds = new google.maps.LatLngBounds();
        var restaurants = this.props.filterRestaurants;
        var cmarker ;//= this.curmarker;
        // console.log("REST props", restaurants);
        for (var i = 0; i < restaurants.length; i++) {
          // console.log(typeof restaurants[i]['id']);
          var id = restaurants[i]['id'];
            const position = {lat:restaurants[i].lat, lng:restaurants[i].lng} ;
            var title = restaurants[i].name;
            var properties = restaurants[i];
            const marker = new google.maps.Marker({
              map: this.map,
              position: position,
              title: title,
              properties: properties,
              icon:"../images/restaurant.png",
             // animation: google.maps.Animation.DROP,
              id: id
            });
            var service = new google.maps.DistanceMatrixService();
              service.getDistanceMatrix(
                {
                    origins: [this.curmarker.position],
                    destinations: [position],
                    travelMode: google.maps.TravelMode.DRIVING,
                    avoidHighways: false,
                    avoidTolls: false
                },
                (response, status) => {
                  marker['distance'] = response.rows[0].elements[0].distance.text;

                  // this.markers.push(marker);

                }
              );
            marker.addListener('click', () => {
              this.populateInfoWindow(marker, this.largeInfowindow);
            });
           ////bounds.extend(markers[i].position);
           this.markers.push(marker);
        }
        // console.log("all markers", this.markers);
    }
    clearMark(){
        console.log("clear marker", this.props);
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
        this.markers = [];
    }

    populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          var star ="";
          var pirce = ""
          for(var i = 0; i < marker.properties.rating; i++){
            star+='<img src= "./images/star.png" width = "15 px">';
          }
          for(var i = 0; i < marker.properties.price; i++){
            pirce+='<img src= "./images/dollar.png" width = "12 px">';
          }
          infowindow.setContent(
              '<h1 id="firstHeading" class="firstHeading">'+
                 marker.title + '</h1>'+
                '<img src= "'+marker.properties.img +'" width = "200 px">'+
                '<p>' + marker.properties.address +'</p>'+
                '<p>'+ marker.properties.description+'</p>'+
                star+'<br>'+
                pirce

          );
          infowindow.open(this.map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick',()=>{
            marker.setMap(null);
          }) ;
        }
    }


  render () {
    console.log("RENDER----------map", this.props );
    // this.load(this.props.restaurants);
    return (
      <div ref = "map" id = "map">
      map is here
      </div>
    )
  }
}