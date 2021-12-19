import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import '../../App.css';

function Map() {
  return (
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 48.92982194118144, lng: 24.69530985903542}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Location() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <h1 className='location'>Де ми?</h1>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAIDWkkCnlEibfq4Yv1XpSto0AzxRQDZrM`}
        loadingElement={<div style={{height: '100%' }}/>}
        containerElement={<div style={{height: '100%' }}/>}
        mapElement={<div style={{height: '100%' }}/>}
        />
    </div>
  );
}

