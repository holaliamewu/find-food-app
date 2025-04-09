"use client";

import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapView({currentLocation}) {

  const mapBoxApiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  
  return (
    <Map
      mapboxAccessToken= {mapBoxApiKey}
      initialViewState={{
        longitude: currentLocation ? currentLocation.lng : 0,
        latitude: currentLocation ? currentLocation.lat : 0,
        zoom: currentLocation ? 5.5 : 1,
        projection: "globe",
        container: "map",
        setFog: {}
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}