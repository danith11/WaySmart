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

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapPageMap({ locations, drawRoute }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mappLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [80.7718, 6.9271],
      zoom: 8,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", () => {
      setMapLoaded(true);
    });

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

  //   Drawing the route
  useEffect(() => {
    if (!drawRoute || locations.length < 2) return;
    const map = mapRef.current;

    const getRoute = async () => {
      const coordsString = locations
        .filter(Boolean)
        .map((c) => `${c[0]},${c[1]}`)
        .join(";");

      const res = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${coordsString}?geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      );

      const data = await res.json();
      const route = data.routes[0].geometry;

      if (map.getSource("route")) {
        map.getSource("route").setData({
          type: "Feature",
          geometry: route,
        });
      } else {
        map.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: route,
          },
        });

        map.addLayer({
          id: "route-layer",
          type: "line",
          source: "route",
          paint: {
            "line-color": "#2563eb",
            "line-width": 5,
          },
        });
      }
    };
    getRoute();
  }, [drawRoute, locations]);

  return (
    <div
      ref={mapContainerRef}
      className="-min-h-screen w-full rounded-xl overflow-hidden"
    />
  );
}
