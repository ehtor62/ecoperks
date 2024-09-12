"use client"

import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';

// Define the structure of the event data
interface Event {
  id: string;
  title: string;
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
    height: '50vh'
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

  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const handleMarkerClick = (eventId: string) => {
    setActiveMarker(eventId);
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
      marker.addListener('click', () => handleMarkerClick(event.id));
    });
  }, [events]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
      center={defaultCenter}
      zoom={6}
      onLoad={onLoad}
      onClick={() => setActiveMarker(null)}
    >
      {events.map((event: Event) => (
        activeMarker === event.id && (
          <InfoWindowF
            key={event.id}
            onCloseClick={() => setActiveMarker(null)}
            position={{ lat: event.lat, lng: event.lng }}
          >
            <div className='w-40 p-2'>
              <div className='flex items-center mb-2 space-x-5'>
                <h3 className='text-xl font-bold'>{event.title}</h3>
              </div>
              <p>{event.location.replace(/\s*\(.*?\)$/, '')}</p>
            </div>
          </InfoWindowF>
        )
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;