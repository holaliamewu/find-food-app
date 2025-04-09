"use client";

import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapView({currentLocation}) {

  const mapBoxApiKey = process.env.MAPBOX_API_KEY
  return (
    <Map
      mapboxAccessToken= {mapBoxApiKey}
      initialViewState={{
        longitude: currentLocation?.lng,
        latitude: currentLocation?.lat,
        zoom: 5.5
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}