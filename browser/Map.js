import React from 'react';
const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor", props);
        this.map;
        this.markers = [];
        this.largeInfowindow;
        this.state = {curmarker:null};
        this.curmarker ;


    }
    componentDidMount(){
        console.log("componentDidMount");
        this.initMap();
        // this.map = new google.maps.Map(this.refs.map, {
        //   zoom: 16
        // });
        // var curmap = this.map;
        // var cmarker = this.curmarker;
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         var pos = {
        //           lat: position.coords.latitude,
        //           lng: position.coords.longitude
        //         };
        //         cmarker = new google.maps.Marker({
        //             map: curmap,
        //             position: pos,
        //             title: "current location",
        //             icon: "./images/cur.png"
        //         });
        //         cmarker.setMap(curmap);
        //         curmap.setCenter(pos);

        //     });

        // }

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

                // this.curmarker = cmarker;
                this.curmarker.setMap(this.map);
                // console.log("ha set cur~", this.curmarker);
                this.map.setCenter(pos);
                // this.props.loadCurLocation(curmap);
                this.load();

            });


        }


    }
    load(){
        console.log("load");
        this.largeInfowindow = new google.maps.InfoWindow();
        var bounds = new google.maps.LatLngBounds();
        var origin = new google.maps.LatLng(55.930385, -3.118425),
            destination = "Stockholm, Sweden";

        var restaurants = this.props.restaurants;
        var cmarker ;//= this.curmarker;
        // console.log("cur location", this.curmarker);
        for (var i = 0; i < restaurants.length; i++) {
            // console.log("restaurant", restaurants[i]);
            // Get the position from the location array.
            // {lat:40.725218, lng:  -74.002911 },
            const position = {lat:restaurants[i].lat, lng:restaurants[i].lng} ;
            var title = restaurants[i].title;
            var properties = restaurants[i];
            // console.log("prrrrrrrrrrrrrr", properties);
            // Create a marker per location, and put into markers array.
            const marker = new google.maps.Marker({
              map: this.map,
              position: position,
              title: title,
              properties: properties,
              icon:"../images/restaurant.png",
             // animation: google.maps.Animation.DROP,
              id: i
            });
            // console.log("show", this.curmarker);
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
                  //console.log("find dis");
                  marker['distance'] = response.rows[0].elements[0].distance.text;
                  this.markers.push(marker);

                }
              );
            marker.addListener('click', () => {
              this.populateInfoWindow(marker, this.largeInfowindow);
            });
           ////bounds.extend(markers[i].position);
        }
    }
    populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          var star ="";
          var pirce = ""
          console.log("clik------",marker);
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
            this.setMap(null);
          }) ;
        }
    }

  render () {
    console.log("render", this.props );
    // this.load(this.props.restaurants);
    return (
      <div ref = "map" id = "map">
      map is here
      </div>
    )
  }
}