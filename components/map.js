import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";


const loadingElementStyle = { height: '100%'};
const containerElementStyle = { height: '440px', wigth: '300px'};
const mapElementStyle = { height: '100%'};
const defaultCenter = { lat: -6.459966, lng: -37.093687 };
const defaultOptions = { scrollwheel: false };
import styles from '../styles/Home.module.css'

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);


function GoogleMaps(){
  return (
    <div className = {styles.groupElements} >
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANvb7FpQ74Tnwgyj460zTZPOd4NWeeiTc"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle}/>}
      mapElement={<div style={ mapElementStyle } />}
    />
    </div>
  );
}

export default GoogleMaps