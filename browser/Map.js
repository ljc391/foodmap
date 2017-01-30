import React from 'react';
const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map;
        this.markers = [];
        this.largeInfowindow;
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
        this.map = new google.maps.Map(this.refs.map, {
          zoom: 16
        });
        var curmap = this.map;
        var cmarker = this.curmarker;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                cmarker = new google.maps.Marker({
                    map: curmap,
                    position: pos,
                    title: "current location",
                    icon: "./images/cur.png"
                });

                // this.curmarker = cmarker;
                cmarker.setMap(curmap);
                curmap.setCenter(pos);
                // this.props.loadCurLocation(curmap);

            });

        }
        // this.load();

    }
    load(){
        console.log("load");
        this.largeInfowindow = new google.maps.InfoWindow();
        var bounds = new google.maps.LatLngBounds();
        var origin = new google.maps.LatLng(55.930385, -3.118425),
            destination = "Stockholm, Sweden";

        var restaurants = this.props.restaurants;
        console.log("REs", this.props);
        var cmarker = this.curmarker;
        console.log("cur location", cmarker);
        for (var i = 0; i < restaurants.length; i++) {
            // console.log("restaurant", restaurants[i]);
            // Get the position from the location array.
            // {lat:40.725218, lng:  -74.002911 },
            const position = {lat:restaurants[i].lat, lng:restaurants[i].lng} ;
            var title = restaurants[i].title;
            var properties = restaurants[i];
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
            // console.log("show", cmarker);
            // var service = new google.maps.DistanceMatrixService();
            //   service.getDistanceMatrix(
            //     {
            //         origins: [this.curmarker.position],
            //         destinations: [position],
            //         travelMode: google.maps.TravelMode.DRIVING,
            //         avoidHighways: false,
            //         avoidTolls: false
            //     },
            //     function(response, status){
            //       //console.log("find dis");
            //       marker['distance'] = response.rows[0].elements[0].distance.text;
            //       this.markers.push(marker);

            //     }
            //   );
            // marker.addListener('click', function() {
            //   populateInfoWindow(this, this.largeInfowindow);
            // });
           ////bounds.extend(markers[i].position);
        }
    }

  render () {
    console.log("render", this.props);
    this.load();
    return (
      <div ref = "map" id = "map">
      map is here
      </div>
    )
  }
}