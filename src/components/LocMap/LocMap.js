import React,{Component} from 'react';
import { Map, GoogleApiWrapper,Marker} from 'google-maps-react';

class LocMap extends Component{
    
    render()
    {
        console.log(this.props.lat);
        console.log(this.props.long);
         return (
          <Map
          google={this.props.google}
          style={{'width':'50%','height':'50%'}}
          zoom={20}
          initialCenter={{ lat: this.props.lat, lng: this.props.long}}
        >
          <Marker position={{ lat: this.props.lat, lng: this.props.long}} />
          </Map>
          );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCVrxKYvxJugScPka5zn3o72_JL3dWFW2Q'
  })(LocMap);