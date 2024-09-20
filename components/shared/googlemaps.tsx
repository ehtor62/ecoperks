"use client"

import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';

// Define the structure of the event data
interface Event {
  id: string;
  title: string;
  description: string,
  location: string;
  lat: number;
  lng: number;
}

interface GoogleMapComponentProps {
  events: Event[]; // Accept an array of Event objects as props
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ events }) => {
  const containerStyle = {
    width: '100%',
    height: '60vh'
  };

  const options = {
    mapTypeControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    scrollwheel: true,
    streetViewControl: false
  }

  const defaultCenter = {
    lat: 46.871895340937414,
    lng: 8.586773498377386
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || '',
  })

  const [activeEvent, setActiveEvent] = useState<Event | null>(null);

  const handleMarkerClick = (event: Event) => {
    setActiveEvent(event);
  };

  const onLoad = useCallback((map: google.maps.Map) => {
    events.forEach((event: Event) => { // Typed event parameter
      const pinIcon = {
        url: "/assets/images/logo.png",
        scaledSize: new google.maps.Size(50, 50)
      };

      const marker = new google.maps.Marker({
        position: { lat: event.lat, lng: event.lng },
        icon: pinIcon,
        map: map,
      });

      // Add click listener to the marker
      marker.addListener('click', () => handleMarkerClick(event));
    });
  }, [events]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex">
      {/* Map Section */}
      <div style={{ flex: 3 }}>  {/* Increased flex value to make the map wider */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={options}
          center={defaultCenter}
          zoom={6}
          onLoad={onLoad}
          onClick={() => setActiveEvent(null)} // Reset the selected event on map click
        />
      </div>

      {/* Event Info Section */}
      <div
        style={{
          flex: 1, // Reduced flex value to make it narrower
          padding: '1rem',
          maxHeight: '60vh', // Same height as the map
          overflowY: 'auto',
          width: '300px', // Fixed width for the event info section
        }}
      >
        {activeEvent ? (
          <div className='w-full p-2'>
            <div className='flex items-center mb-2 space-x-5'>
              <h3 className='text-xl font-bold'>{activeEvent.title}</h3>
            </div>
            <p>{activeEvent.location.replace(/\s*\(.*?\)$/, '')}</p>
            <p className='mt-2 text-sm'>{activeEvent.description}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default GoogleMapComponent;