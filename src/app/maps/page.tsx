// Add this line to mark this file as a Client Component
'use client';

import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// Your Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyDFq-0TCYp7Hds4iLHzqOi_8wd6sHy5tP0';

// Define the type for the location object
interface Location {
  lat: number;
  lng: number;
}

const MapPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Set the default center of the map (you can modify it based on your location) 36.758570193725674, 4.318747428836431
  const defaultCenter: Location = {
    lat: 36.758570193725674, // Latitude of San Francisco
    lng: 4.318747428836431, // Longitude of San Francisco
  };

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <div style={{ height: '100vh' }}>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={defaultCenter}
          zoom={15}
        >
          {/* Example marker */}
          <Marker
            position={defaultCenter}
            onClick={() => handleMarkerClick(defaultCenter)}
          />
          {/* Display info window when the marker is clicked */}
          {selectedLocation && (
            <InfoWindow
              position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} // Ensure proper lat and lng keys
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <h2>Selected Location</h2>
                <p>Latitude: {selectedLocation.lat}</p>
                <p>Longitude: {selectedLocation.lng}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
