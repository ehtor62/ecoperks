"use client"

import React, { useCallback } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const containerStyle = {
    width: '100%',
    height: '40vh'
  };

  const options = {
    mapTypeControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    scrollwheel: true,
    streetViewControl: false
  }

  const center = {
    lat: 46.04945361367788,
    lng: 8.899567028498042
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || '',
  })

  function MarkerClicked(){
    console.log("Clicked")
  }

  const onLoad = useCallback((map: google.maps.Map) => {
    const pinIcon = {
      url: "/assets/images/logo.png",
      scaledSize: new google.maps.Size(50, 50)
    }
    
    const marker = new google.maps.Marker({
      position: {lat:46.04945361367788,lng:8.899567028498042},
      icon: pinIcon,
      map: map,
    });

    // Add click listener to the marker
    marker.addListener('click', MarkerClicked);
  }, [])

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
      center={center}
      zoom={10}
      onLoad={onLoad}
    >
    </GoogleMap>
  );
}

export default GoogleMapComponent;