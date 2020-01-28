import React, { Component } from 'react'
import { ResConsumer } from '../context';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class Modal extends Component {
    render() {
        const {location} = this.props.restaurant;
        return (
            <ResConsumer>
                <Map
                    style={{height:100 , width:100, bottom: 0, right: 0}}
                    google={this.props.google}
                    zoom={4}
                    initialCenter={{ lat: location[0], lng: location[1]}}
                >
                   <Marker position={{ lat: location[0], lng: location[1]}} />
                </Map>
            </ResConsumer>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDBCDU18CikMAzwvaghkoirIuEx5QUJ-ac'
  })(Modal);
