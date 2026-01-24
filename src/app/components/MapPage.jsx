// import React, { useState } from "react";
// import LocationInput from "./LocationInput";
// import MapPageMap from "../app/show-map/page";

// const MapPage = () => {
//   const [locations, setLocations] = useState([]);
//   const handleSelect = (index, coordinates) => {
//     const newLocations = [...locations];
//     newLocations[index] = coordinates;
//     setLocations(newLocations);
//   };

//   return (
//     <div>
//       <h1>Optimize Your Route</h1>
//       {[...Array(6)].map((_, i) => (
//         <LocationInput key={i} index={i} onSelect={handleSelect} />
//       ))}

//       <div>
//         <MapPageMap locations={locations} />
//       </div>
//     </div>
//   );
// };

// export default MapPage;
"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapPageMap({ locations }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [80.7718, 6.9271],
      zoom: 8,
    });

    map.addControl(new mapboxgl.NavigationControl());
    mapRef.current = map;

    return () => map.remove();
  }, []);

  // Add markers when locations change
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old markers
    mapRef.current.markers?.forEach((m) => m.remove());
    mapRef.current.markers = [];

    locations?.forEach((coords) => {
      if (!coords) return;
      const marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(mapRef.current);
      mapRef.current.markers.push(marker);
    });

    // Fit map to markers
    const validLocations = locations.filter(Boolean);
    if (validLocations.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      validLocations.forEach((coord) => bounds.extend(coord));
      mapRef.current.fitBounds(bounds, { padding: 60 });
    }
  }, [locations]);

  return (
    <div
      ref={mapContainerRef}
      className="h-[500px] w-full rounded-xl overflow-hidden"
    />
  );
}
