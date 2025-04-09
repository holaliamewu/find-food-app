"use client";

import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_API_KEY } from "@/.env"

export default function MapView({currentLocation}) {
  return (
    <Map
      mapboxAccessToken= {MAPBOX_API_KEY}
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