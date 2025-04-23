"use client";

import { useRef, useEffect, useState } from "react";
import Map from "react-map-gl/mapbox";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


// Custom Food Marker Component
const FoodMarker = ({ spot, map }) => {
  const markerRef = useRef(null);
  
  useEffect(() => {
    if (markerRef.current && map) {
      // Create popup content
      const popupContent = `
        <strong>${spot.properties.title}</strong><br>
        ${spot.properties.description}<br>
        <em>Category: ${spot.properties.category}</em>
      `;
      
      // Create marker with popup
      new mapboxgl.Marker(markerRef.current)
        .setLngLat(spot.geometry.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(map);
    }
  }, [map, spot]);
  
  return (
    <div ref={markerRef} >
      <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_443_42" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.60559 6.48267C5.252 6.67794 4.84546 6.78907 4.41296 6.78907C3.0485 6.78907 1.94238 5.68296 1.94238 4.3185C1.94238 2.95403 3.0485 1.84792 4.41296 1.84792C4.89713 1.84792 5.34877 1.98719 5.73 2.22786C6.40574 1.32342 7.48482 0.737915 8.70066 0.737915C10.0206 0.737915 11.1794 1.42803 11.8359 2.46713C12.2717 2.0818 12.8444 1.84792 13.4719 1.84792C14.4676 1.84792 15.3258 2.437 15.7168 3.28567C15.9698 3.15622 16.2563 3.08319 16.5599 3.08319C17.5833 3.08319 18.4129 3.91278 18.4129 4.93613C18.4129 5.95947 17.5833 6.78906 16.5599 6.78906C15.9936 6.78906 15.4867 6.53501 15.1468 6.13466C14.7065 6.5409 14.1182 6.78907 13.4719 6.78907C12.8911 6.78907 12.3572 6.58871 11.9354 6.25335C11.3011 7.38491 10.0902 8.14965 8.70066 8.14965C7.40721 8.14965 6.26853 7.487 5.60559 6.48267Z"/>
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.60559 6.48267C5.252 6.67794 4.84546 6.78907 4.41296 6.78907C3.0485 6.78907 1.94238 5.68296 1.94238 4.3185C1.94238 2.95403 3.0485 1.84792 4.41296 1.84792C4.89713 1.84792 5.34877 1.98719 5.73 2.22786C6.40574 1.32342 7.48482 0.737915 8.70066 0.737915C10.0206 0.737915 11.1794 1.42803 11.8359 2.46713C12.2717 2.0818 12.8444 1.84792 13.4719 1.84792C14.4676 1.84792 15.3258 2.437 15.7168 3.28567C15.9698 3.15622 16.2563 3.08319 16.5599 3.08319C17.5833 3.08319 18.4129 3.91278 18.4129 4.93613C18.4129 5.95947 17.5833 6.78906 16.5599 6.78906C15.9936 6.78906 15.4867 6.53501 15.1468 6.13466C14.7065 6.5409 14.1182 6.78907 13.4719 6.78907C12.8911 6.78907 12.3572 6.58871 11.9354 6.25335C11.3011 7.38491 10.0902 8.14965 8.70066 8.14965C7.40721 8.14965 6.26853 7.487 5.60559 6.48267Z" fill="#FFFF00"/>
        <path d="M5.60559 6.48267L6.44017 5.93178L5.93109 5.16055L5.12216 5.60729L5.60559 6.48267ZM5.73 2.22786L5.19618 3.07346L5.97783 3.56691L6.5311 2.8264L5.73 2.22786ZM11.8359 2.46713L10.9905 3.00124L11.6181 3.99464L12.4984 3.21624L11.8359 2.46713ZM15.7168 3.28567L14.8086 3.70419L15.2448 4.65067L16.1725 4.17584L15.7168 3.28567ZM15.1468 6.13466L15.9091 5.48747L15.2346 4.69297L14.4687 5.39971L15.1468 6.13466ZM11.9354 6.25335L12.5578 5.47063L11.6379 4.73916L11.0632 5.76434L11.9354 6.25335ZM4.41296 7.78907C5.0188 7.78907 5.59119 7.63298 6.08902 7.35805L5.12216 5.60729C4.91282 5.7229 4.67212 5.78907 4.41296 5.78907V7.78907ZM0.942383 4.3185C0.942383 6.23524 2.49621 7.78907 4.41296 7.78907V5.78907C3.60078 5.78907 2.94238 5.13067 2.94238 4.3185H0.942383ZM4.41296 0.847917C2.49621 0.847917 0.942383 2.40175 0.942383 4.3185H2.94238C2.94238 3.50632 3.60078 2.84792 4.41296 2.84792V0.847917ZM6.26382 1.38226C5.72752 1.0437 5.09157 0.847917 4.41296 0.847917V2.84792C4.70268 2.84792 4.97002 2.93068 5.19618 3.07346L6.26382 1.38226ZM8.70066 -0.262085C7.15608 -0.262085 5.78529 0.483106 4.9289 1.62933L6.5311 2.8264C7.02619 2.16374 7.81357 1.73792 8.70066 1.73792V-0.262085ZM12.6813 1.93301C11.8493 0.616103 10.3779 -0.262085 8.70066 -0.262085V1.73792C9.66336 1.73792 10.5095 2.23995 10.9905 3.00124L12.6813 1.93301ZM13.4719 0.847917C12.5912 0.847917 11.785 1.17726 11.1735 1.71802L12.4984 3.21624C12.7583 2.98633 13.0977 2.84792 13.4719 2.84792V0.847917ZM16.6251 2.86715C16.0767 1.67721 14.8722 0.847917 13.4719 0.847917V2.84792C14.063 2.84792 14.5748 3.19678 14.8086 3.70419L16.6251 2.86715ZM16.1725 4.17584C16.2876 4.1169 16.4184 4.08319 16.5599 4.08319V2.08319C16.0942 2.08319 15.6519 2.19554 15.2612 2.3955L16.1725 4.17584ZM16.5599 4.08319C17.031 4.08319 17.4129 4.46507 17.4129 4.93613H19.4129C19.4129 3.3605 18.1356 2.08319 16.5599 2.08319V4.08319ZM17.4129 4.93613C17.4129 5.40719 17.031 5.78906 16.5599 5.78906V7.78906C18.1356 7.78906 19.4129 6.51176 19.4129 4.93613H17.4129ZM16.5599 5.78906C16.2995 5.78906 16.0671 5.67358 15.9091 5.48747L14.3845 6.78185C14.9062 7.39644 15.6877 7.78906 16.5599 7.78906V5.78906ZM13.4719 7.78907C14.3792 7.78907 15.2072 7.43955 15.8249 6.8696L14.4687 5.39971C14.2058 5.64226 13.8571 5.78907 13.4719 5.78907V7.78907ZM11.3131 7.03607C11.9054 7.50706 12.6571 7.78907 13.4719 7.78907V5.78907C13.1252 5.78907 12.809 5.67037 12.5578 5.47063L11.3131 7.03607ZM8.70066 9.14965C10.4664 9.14965 12.0036 8.17666 12.8077 6.74236L11.0632 5.76434C10.5985 6.59315 9.71391 7.14965 8.70066 7.14965V9.14965ZM4.77101 7.03356C5.61117 8.30636 7.0572 9.14965 8.70066 9.14965V7.14965C7.75722 7.14965 6.9259 6.66764 6.44017 5.93178L4.77101 7.03356Z" fill="black" mask="url(#path-1-inside-1_443_42)"/>
        <path d="M0.512577 6.23279H20.0219C19.7616 11.3947 15.4938 15.5 10.2672 15.5C5.04062 15.5 0.772862 11.3947 0.512577 6.23279Z" fill="#222222" stroke="black"/>
      </svg>
    </div>
  );
};

// Custom User Location Marker Component
const UserLocationMarker = ({ location, map }) => {
  const markerRef = useRef(null);
  
  useEffect(() => {
    if (!document.getElementById('pulse-animation')) {
      const style = document.createElement('style');
      style.id = 'pulse-animation';
      style.innerHTML = `
        .pulse {
          background-color: rgba(66, 133, 244, 0.4);
          border-radius: 50%;
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: -1;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  
  useEffect(() => {
    if (markerRef.current && map && location) {
      new mapboxgl.Marker(markerRef.current)
        .setLngLat([location.lng, location.lat])
        .addTo(map);
    }
  }, [map, location]);
  
  return (
    <div ref={markerRef} >
      <div className="pulse"></div>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="4285F4" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="6" fill="#4285F4" />
      </svg>
    </div>
  );
};

export default function MapView() {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const mapBoxApiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  
  const foodSpotsGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-0.1870, 5.6037] // Accra - Osu Food Street
        },
        properties: {
          title: "Osu Food Street",
          description: "Popular food district with various restaurants and street food",
          category: "Street Food"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-0.1657, 5.5913] // Accra - Koffee Lounge
        },
        properties: {
          title: "Koffee Lounge",
          description: "Cozy café with local and international dishes",
          category: "Café"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-0.1785, 5.6142] // Accra - Buka Restaurant
        },
        properties: {
          title: "Buka Restaurant",
          description: "Authentic West African cuisine",
          category: "Traditional"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-1.6132, 6.6885] // Kumasi - Vic Baboo's Café
        },
        properties: {
          title: "Vic Baboo's Café",
          description: "Popular spot for local and Indian cuisine",
          category: "Mixed Cuisine"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-0.2321, 5.5765] // Accra - Zen Garden
        },
        properties: {
          title: "Zen Garden",
          description: "Asian fusion restaurant with beautiful garden setting",
          category: "Asian Fusion"
        }
      }
    ]
  };

  useEffect(() => {
    setIsLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lng: position.coords.longitude,
            lat: position.coords.latitude
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setLocationError(`Location error: ${error.message}`);
          setIsLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
      setIsLoading(false);
    }
  }, []);

  const handleMapLoad = () => {
    const map = mapRef.current?.getMap();
    if (map) {
      map.setFog({
        color: 'rgba(11, 11, 25, 0.8)',
        'high-color': 'rgba(36, 56, 105, 0.5)',
        'space-color': '#000011',
        horizonBlend: 0.2
      });
      
      setMapInstance(map);
      
      if (userLocation) {
        map.flyTo({
          center: [userLocation.lng, userLocation.lat],
          zoom: 15, 
          essential: true
        });
      }
    }
  };

  const initialView = {
    longitude: userLocation ? userLocation.lng : -1.0232,
    latitude: userLocation ? userLocation.lat : 7.9465,
    zoom: userLocation ? 15 : 1 
  };

  useEffect(() => {
    if (mapInstance && userLocation) {
      mapInstance.flyTo({
        center: [userLocation.lng, userLocation.lat],
        zoom: 15,
        essential: true
      });
    }
  }, [mapInstance, userLocation]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading map and location data...</div>;
  }

  if (!mapBoxApiKey) {
    return <div className="flex items-center justify-center h-screen text-red-500">
      Missing Mapbox API key. Please check your environment variables.
    </div>;
  }

  return (
    <div className="relative w-screen h-screen">
      {locationError && (
        <div className="absolute top-4 left-4 right-4 z-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {locationError}
        </div>
      )}
      
      <Map
        ref={mapRef}
        mapboxAccessToken={mapBoxApiKey}
        initialViewState={{
          longitude: initialView.longitude,
          latitude: initialView.latitude,
          zoom: initialView.zoom,
        }}
        projection="globe"
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onLoad={handleMapLoad}
      />
      
      {mapInstance && (
        <>
          {foodSpotsGeoJSON.features.map((spot, index) => (
            <FoodMarker key={index} spot={spot} map={mapInstance} />
          ))}
          
          {userLocation && (
            <UserLocationMarker location={userLocation} map={mapInstance} />
          )}
        </>
      )}
    </div>
  );
}