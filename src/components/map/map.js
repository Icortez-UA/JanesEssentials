import React, { Component } from 'react';
import {GoogleMapReact, GoogleApiWrapper} from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>

        <GoogleApiWrapper
Apikey={{
    key: 'AIzaSyB699Yp7mSReD-Nynk2PTPtq0TzMt4fetE&callback=initMap&libraries=places'
}}
>
</GoogleApiWrapper>
      </div>
    );
  }
  
}

export default SimpleMap;
