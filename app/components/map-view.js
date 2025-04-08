"use client";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
  'pk.eyJ1IjoiaG9sYWxpYW1ld3UiLCJhIjoiY205N3ZtMXkwMGFhdjJxczZ0ajhhcGcxeCJ9.0oy090cNxxDPBtQvk_NzRQ'});

// in render()
export default function MapView() {
    return(
        <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '100vh',
            width: '100vw'
        }}
        >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
        </Map>
    )
}