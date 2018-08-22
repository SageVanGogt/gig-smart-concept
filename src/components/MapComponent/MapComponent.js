import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import PropTypes from 'prop-types';

  export const MapComponent = withScriptjs(withGoogleMap((
    { position, ...props }
  ) => {
 
    return (
      <GoogleMap
        defaultZoom={16}
        center={position}>
        {/* <Marker
          key={`mapmarker-${index}`}
          position={position}>
        </Marker> */}

      </GoogleMap>
    );
  }));
  
  MapComponent.propTypes = {
    position: PropTypes.object
  };
  
  export default MapComponent;