import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';

  export const MapComponent = withScriptjs(withGoogleMap((
    { position, markerCoords, toggleShowing, ...props }
  ) => {
 
    return (
      <GoogleMap
        defaultZoom={16}
        center={position}>
        <Marker
          key={`mapmarker-${index}`}
          position={{lat: lat, lng: lng}}>
        </Marker>
      </GoogleMap>
    );
  }));
  
  MapComponent.propTypes = {
    position: PropTypes.object
  };
  
  export default MapComponent;