'use client';

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  apiKey?: string;
  address?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

export default function GoogleMap({
  apiKey,
  address = 'Amsterdam, Netherlands',
  lat = 52.3676,
  lng = 4.9041,
  zoom = 15,
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // If API key is provided, use Google Maps JavaScript API
    if (apiKey) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;

      (window as any).initMap = () => {
        if (!mapRef.current) return;
        const map = new (window as any).google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: zoom,
        });

        new (window as any).google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: address,
        });
      };

      document.head.appendChild(script);

      return () => {
        // Cleanup
        if ((window as any).initMap) {
          delete (window as any).initMap;
        }
        const existingScript = document.querySelector(
          `script[src*="maps.googleapis.com"]`
        );
        if (existingScript) {
          existingScript.remove();
        }
      };
    } else {
      // Fallback: Embed Google Maps using iframe (no API key required)
      if (mapRef.current) {
        const encodedAddress = encodeURIComponent(address);
        // Using Google Maps search URL which doesn't require API key
        mapRef.current.innerHTML = `
          <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=${encodedAddress}&output=embed&z=${zoom}">
          </iframe>
        `;
      }
    }
  }, [apiKey, address, lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-lg overflow-hidden"
      style={{ height: '250px', minHeight: '250px' }}
    />
  );
}

