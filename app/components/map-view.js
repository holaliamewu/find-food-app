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
      <svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_444_5" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.7787 21.6848C6.35112 21.921 5.85949 22.0554 5.33648 22.0554C3.68648 22.0554 2.3489 20.7178 2.3489 19.0678C2.3489 17.4178 3.68648 16.0802 5.33648 16.0802C5.92198 16.0802 6.46815 16.2486 6.92917 16.5397C7.74632 15.446 9.05121 14.738 10.5215 14.738C12.1177 14.738 13.5189 15.5725 14.3128 16.829C14.8397 16.363 15.5323 16.0802 16.291 16.0802C17.4952 16.0802 18.5329 16.7926 19.0059 17.8189C19.3117 17.6623 19.6583 17.574 20.0255 17.574C21.263 17.574 22.2662 18.5772 22.2662 19.8147C22.2662 21.0522 21.263 22.0554 20.0255 22.0554C19.3406 22.0554 18.7275 21.7481 18.3165 21.264C17.7841 21.7552 17.0726 22.0554 16.291 22.0554C15.5888 22.0554 14.9432 21.8131 14.4332 21.4076C13.6661 22.7759 12.2018 23.7007 10.5215 23.7007C8.95734 23.7007 7.58037 22.8994 6.7787 21.6848Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.7787 21.6848C6.35112 21.921 5.85949 22.0554 5.33648 22.0554C3.68648 22.0554 2.3489 20.7178 2.3489 19.0678C2.3489 17.4178 3.68648 16.0802 5.33648 16.0802C5.92198 16.0802 6.46815 16.2486 6.92917 16.5397C7.74632 15.446 9.05121 14.738 10.5215 14.738C12.1177 14.738 13.5189 15.5725 14.3128 16.829C14.8397 16.363 15.5323 16.0802 16.291 16.0802C17.4952 16.0802 18.5329 16.7926 19.0059 17.8189C19.3117 17.6623 19.6583 17.574 20.0255 17.574C21.263 17.574 22.2662 18.5772 22.2662 19.8147C22.2662 21.0522 21.263 22.0554 20.0255 22.0554C19.3406 22.0554 18.7275 21.7481 18.3165 21.264C17.7841 21.7552 17.0726 22.0554 16.291 22.0554C15.5888 22.0554 14.9432 21.8131 14.4332 21.4076C13.6661 22.7759 12.2018 23.7007 10.5215 23.7007C8.95734 23.7007 7.58037 22.8994 6.7787 21.6848Z" fill="#FFFF00"/>
        <path d="M6.7787 21.6848L7.61328 21.134L7.10421 20.3627L6.29526 20.8095L6.7787 21.6848ZM6.92917 16.5397L6.39533 17.3853L7.17698 17.8788L7.73026 17.1382L6.92917 16.5397ZM14.3128 16.829L13.4674 17.3631L14.095 18.3565L14.9752 17.5781L14.3128 16.829ZM19.0059 17.8189L18.0976 18.2374L18.5338 19.184L19.4615 18.709L19.0059 17.8189ZM18.3165 21.264L19.0789 20.6168L18.4044 19.8222L17.6384 20.529L18.3165 21.264ZM14.4332 21.4076L15.0555 20.6248L14.1356 19.8934L13.5609 20.9186L14.4332 21.4076ZM5.33648 23.0554C6.03284 23.0554 6.69031 22.876 7.26214 22.5602L6.29526 20.8095C6.01193 20.9659 5.68615 21.0554 5.33648 21.0554V23.0554ZM1.3489 19.0678C1.3489 21.2701 3.1342 23.0554 5.33648 23.0554V21.0554C4.23877 21.0554 3.3489 20.1655 3.3489 19.0678H1.3489ZM5.33648 15.0802C3.1342 15.0802 1.3489 16.8655 1.3489 19.0678H3.3489C3.3489 17.9701 4.23877 17.0802 5.33648 17.0802V15.0802ZM7.463 15.6941C6.84691 15.3052 6.11643 15.0802 5.33648 15.0802V17.0802C5.72753 17.0802 6.08939 17.1921 6.39533 17.3853L7.463 15.6941ZM10.5215 13.738C8.72247 13.738 7.12587 14.6057 6.12807 15.9412L7.73026 17.1382C8.36677 16.2863 9.37996 15.738 10.5215 15.738V13.738ZM15.1582 16.2948C14.1888 14.7605 12.4749 13.738 10.5215 13.738V15.738C11.7604 15.738 12.849 16.3844 13.4674 17.3631L15.1582 16.2948ZM16.291 15.0802C15.2791 15.0802 14.353 15.4585 13.6504 16.0798L14.9752 17.5781C15.3264 17.2676 15.7856 17.0802 16.291 17.0802V15.0802ZM19.9141 17.4004C19.2839 16.0328 17.8998 15.0802 16.291 15.0802V17.0802C17.0906 17.0802 17.782 17.5524 18.0976 18.2374L19.9141 17.4004ZM19.4615 18.709C19.6296 18.623 19.8204 18.574 20.0255 18.574V16.574C19.4962 16.574 18.9938 16.7017 18.5502 16.9288L19.4615 18.709ZM20.0255 18.574C20.7107 18.574 21.2662 19.1295 21.2662 19.8147H23.2662C23.2662 18.0249 21.8153 16.574 20.0255 16.574V18.574ZM21.2662 19.8147C21.2662 20.4999 20.7107 21.0554 20.0255 21.0554V23.0554C21.8153 23.0554 23.2662 21.6045 23.2662 19.8147H21.2662ZM20.0255 21.0554C19.6465 21.0554 19.308 20.8867 19.0789 20.6168L17.5542 21.9111C18.1471 22.6095 19.0347 23.0554 20.0255 23.0554V21.0554ZM16.291 23.0554C17.3337 23.0554 18.2848 22.6539 18.9947 21.9989L17.6384 20.529C17.2834 20.8566 16.8116 21.0554 16.291 21.0554V23.0554ZM13.8108 22.1903C14.4914 22.7315 15.3548 23.0554 16.291 23.0554V21.0554C15.8229 21.0554 15.395 20.8948 15.0555 20.6248L13.8108 22.1903ZM10.5215 24.7007C12.578 24.7007 14.3686 23.5677 15.3054 21.8966L13.5609 20.9186C12.9635 21.9842 11.8255 22.7007 10.5215 22.7007V24.7007ZM5.94412 22.2357C6.923 23.7187 8.60733 24.7007 10.5215 24.7007V22.7007C9.30736 22.7007 8.23774 22.08 7.61328 21.134L5.94412 22.2357Z" fill="black" mask="url(#path-1-inside-1_444_5)"/>
        <path d="M0.5103 21.2781H24.3212C24.0592 27.6271 18.8292 32.6939 12.4158 32.6939C6.00237 32.6939 0.772372 27.6271 0.5103 21.2781Z" fill="#222222" stroke="black"/>
        <path d="M4.44411 0.827271C14.366 5.97483 -1.69808 8.07198 4.44411 14.1728" stroke="black"/>
        <path d="M11.0611 0.827271C20.983 5.97483 4.91886 8.07198 11.0611 14.1728" stroke="black"/>
        <path d="M17.6778 0.827271C27.5997 5.97483 11.5356 8.07198 17.6778 14.1728" stroke="black"/>
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
  const mapBoxApiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  const [userLocation, setUserLocation] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  // GeoJSON data for food spots in Ghana
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

  // Get user's current location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lng: position.coords.longitude,
            lat: position.coords.latitude
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  // Setup map when loaded
  const handleMapLoad = () => {
    const map = mapRef.current?.getMap();
    if (map) {
      // Set fog effect
      map.setFog({
        color: 'rgba(11, 11, 25, 0.8)',
        'high-color': 'rgba(36, 56, 105, 0.5)',
        'space-color': '#000011',
        horizonBlend: 0.2
      });
      
      setMapInstance(map);
    }
  };

  // Determine initial view location
  const determineInitialView = () => {
    if (userLocation) {
      return {
        longitude: userLocation.lng,
        latitude: userLocation.lat,
        zoom: 14
      };
    } else if (userLocation) {
      return {
        longitude: userLocation.lng,
        latitude: userLocation.lat,
        zoom: 14
      };
    } else {
      return {
        longitude: -1.0232, // Ghana's approximate center
        latitude: 7.9465,
        zoom: 1
      };
    }
  };

  const initialView = determineInitialView();

  return (
    <>
      <Map
        ref={mapRef}
        mapboxAccessToken={mapBoxApiKey}
        initialViewState={{
          longitude: initialView.longitude,
          latitude: initialView.latitude,
          zoom: initialView.zoom,
        }}
        projection="globe"
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onLoad={handleMapLoad}
      />
      
      {/* Render markers only after map is loaded */}
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
    </>
  );
}