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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_442_2" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.2011 57.7023C34.9269 58.406 33.4618 58.8065 31.9032 58.8065C26.9861 58.8065 23 54.8203 23 49.9032C23 44.9861 26.9861 41 31.9032 41C33.6481 41 35.2757 41.5019 36.6495 42.3693C39.0847 39.11 42.9734 37 47.3548 37C52.1115 37 56.2873 39.4868 58.6532 43.2312C60.2234 41.8427 62.2875 41 64.5484 41C68.1369 41 71.2295 43.123 72.6388 46.1815C73.5503 45.7149 74.5831 45.4516 75.6774 45.4516C79.3653 45.4516 82.3548 48.4412 82.3548 52.129C82.3548 55.8169 79.3653 58.8064 75.6774 58.8064C73.6365 58.8064 71.8094 57.8908 70.5846 56.4479C68.9979 57.912 66.8776 58.8065 64.5484 58.8065C62.4558 58.8065 60.5318 58.0845 59.012 56.8761C56.7259 60.9538 52.3622 63.7097 47.3548 63.7097C42.6936 63.7097 38.5901 61.3216 36.2011 57.7023Z"/>
        </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.2011 57.7023C34.9269 58.406 33.4618 58.8065 31.9032 58.8065C26.9861 58.8065 23 54.8203 23 49.9032C23 44.9861 26.9861 41 31.9032 41C33.6481 41 35.2757 41.5019 36.6495 42.3693C39.0847 39.11 42.9734 37 47.3548 37C52.1115 37 56.2873 39.4868 58.6532 43.2312C60.2234 41.8427 62.2875 41 64.5484 41C68.1369 41 71.2295 43.123 72.6388 46.1815C73.5503 45.7149 74.5831 45.4516 75.6774 45.4516C79.3653 45.4516 82.3548 48.4412 82.3548 52.129C82.3548 55.8169 79.3653 58.8064 75.6774 58.8064C73.6365 58.8064 71.8094 57.8908 70.5846 56.4479C68.9979 57.912 66.8776 58.8065 64.5484 58.8065C62.4558 58.8065 60.5318 58.0845 59.012 56.8761C56.7259 60.9538 52.3622 63.7097 47.3548 63.7097C42.6936 63.7097 38.5901 61.3216 36.2011 57.7023Z" fill="#FFFF00"/>
            <path d="M36.2011 57.7023L37.0357 57.1514L36.5266 56.3802L35.7176 56.8269L36.2011 57.7023ZM36.6495 42.3693L36.1157 43.2148L36.8973 43.7083L37.4506 42.9678L36.6495 42.3693ZM58.6532 43.2312L57.8078 43.7654L58.4354 44.7587L59.3156 43.9804L58.6532 43.2312ZM72.6388 46.1815L71.7306 46.6L72.1667 47.5466L73.0945 47.0716L72.6388 46.1815ZM70.5846 56.4479L71.3469 55.8008L70.6724 55.0061L69.9064 55.713L70.5846 56.4479ZM59.012 56.8761L59.6343 56.0934L58.7144 55.362L58.1397 56.3871L59.012 56.8761ZM31.9032 59.8065C33.6352 59.8065 35.266 59.361 36.6845 58.5777L35.7176 56.8269C34.5877 57.4509 33.2885 57.8065 31.9032 57.8065V59.8065ZM22 49.9032C22 55.3726 26.4338 59.8065 31.9032 59.8065V57.8065C27.5384 57.8065 24 54.2681 24 49.9032H22ZM31.9032 40C26.4338 40 22 44.4338 22 49.9032H24C24 45.5384 27.5384 42 31.9032 42V40ZM37.1834 41.5237C35.6544 40.5584 33.8425 40 31.9032 40V42C33.4536 42 34.8969 42.4454 36.1157 43.2148L37.1834 41.5237ZM47.3548 36C42.6446 36 38.4643 38.2697 35.8484 41.7707L37.4506 42.9678C39.7052 39.9503 43.3021 38 47.3548 38V36ZM59.4986 42.6971C56.9572 38.6749 52.4688 36 47.3548 36V38C51.7542 38 55.6175 40.2987 57.8078 43.7654L59.4986 42.6971ZM64.5484 40C62.0342 40 59.7368 40.9382 57.9907 42.4821L59.3156 43.9804C60.7101 42.7473 62.5407 42 64.5484 42V40ZM73.547 45.763C71.9804 42.3632 68.5414 40 64.5484 40V42C67.7323 42 70.4785 43.8828 71.7306 46.6L73.547 45.763ZM73.0945 47.0716C73.8682 46.6755 74.7452 46.4516 75.6774 46.4516V44.4516C74.421 44.4516 73.2323 44.7542 72.1831 45.2913L73.0945 47.0716ZM75.6774 46.4516C78.813 46.4516 81.3548 48.9935 81.3548 52.129H83.3548C83.3548 47.8889 79.9175 44.4516 75.6774 44.4516V46.4516ZM81.3548 52.129C81.3548 55.2646 78.813 57.8064 75.6774 57.8064V59.8064C79.9175 59.8064 83.3548 56.3692 83.3548 52.129H81.3548ZM75.6774 57.8064C73.9424 57.8064 72.3899 57.0294 71.3469 55.8008L69.8222 57.095C71.2289 58.7522 73.3306 59.8064 75.6774 59.8064V57.8064ZM64.5484 59.8065C67.1387 59.8065 69.4986 58.8107 71.2627 57.1828L69.9064 55.713C68.4972 57.0134 66.6165 57.8065 64.5484 57.8065V59.8065ZM58.3896 57.6589C60.0801 59.0029 62.2218 59.8065 64.5484 59.8065V57.8065C62.6898 57.8065 60.9836 57.1662 59.6343 56.0934L58.3896 57.6589ZM47.3548 64.7097C52.7384 64.7097 57.4284 61.7456 59.8842 57.3652L58.1397 56.3871C56.0233 60.1621 51.9859 62.7097 47.3548 62.7097V64.7097ZM35.3665 58.2532C37.9328 62.141 42.3436 64.7097 47.3548 64.7097V62.7097C43.0436 62.7097 39.2475 60.5023 37.0357 57.1514L35.3665 58.2532Z" fill="black" mask="url(#path-1-inside-1_442_2)"/>
            <path d="M16.5034 55.5H89.4966C89.2291 75.4279 72.9915 91.5 53 91.5C33.0085 91.5 16.7709 75.4279 16.5034 55.5Z" fill="#222222" stroke="black"/>
            <path d="M43.5148 20C53.9233 25.4 37.0714 27.6 43.5148 34" stroke="black"/>
            <path d="M43.5148 5C53.9233 10.7857 37.0714 13.1429 43.5148 20" stroke="black"/>
            <path d="M56.5148 20C66.9233 25.4 50.0714 27.6 56.5148 34" stroke="black"/>
            <path d="M56.5148 5C66.9233 10.7857 50.0714 13.1429 56.5148 20" stroke="black"/>
            <path d="M69.5148 20C79.9233 25.4 63.0714 27.6 69.5148 34" stroke="black"/>
            <path d="M69.5148 5C79.9233 10.7857 63.0714 13.1429 69.5148 20" stroke="black"/>
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
        .setPopup(new mapboxgl.Popup().setHTML("<strong>You are here</strong>"))
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