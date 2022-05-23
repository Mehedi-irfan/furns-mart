import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '600px',
  margin: '50px auto'
};

const center = {
  lat: 22.356852,
  lng: 91.783180
};
const onLoad = marker => {
  console.log('marker: ', marker)
}

function ContactMap() {
  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyD2dIDuJPN2TAWZ-NsaU7-dzEtCinCrCow"}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker
          onLoad={onLoad}
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(ContactMap)