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
                cmarker.setMap(curmap);
                curmap.setCenter(pos);

            });

        }

    }

  render () {

    return (
      <div ref = "map" id = "map">
      map is here
      </div>
    )
  }
}