"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapPageMap({ locations, drawRoute, onRouteInfo }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

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
    if (!mapRef.current || !mapLoaded) return;

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
    if (!drawRoute || locations.length < 2 || !mapLoaded) return;
    const map = mapRef.current;

    // const getRoute = async () => {
    //   const coordsString = locations
    //     .filter(Boolean)
    //     .map((c) => `${c[0]},${c[1]}`)
    //     .join(";");

    //   const res = await fetch(
    //     `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordsString}?geometries=geojson&roundtrip=false&source=first&destination=last&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
    //   );

    //   const data = await res.json();
    //   const routeData = data.trips[0];

    //   onRouteInfo({
    //     distance: routeData.distance,
    //     duration: routeData.duration,
    //   });

    //   console.log("Optimized order:", data.waypoints.map(w => w.waypoint_index));

    //   const geojson = {
    //     type: "Feature",
    //     geometry: routeData.geometry,
    //   };
    //   if (map.getSource("route")) {
    //     map.getSource("route").setData(geojson);
    //   } else {
    //     map.addSource("route", {
    //       type: "geojson",
    //       data: geojson,
    //     });

    //     map.addLayer({
    //       id: "route-layer",
    //       type: "line",
    //       source: "route",
    //       paint: {
    //         "line-color": "#2563eb",
    //         "line-width": 5,
    //       },
    //     });
    //   }
    // };

    const getRoute = async () => {
      const validLocations = locations.filter(Boolean);

      if (validLocations.length < 2) return;

      const coordsString = validLocations
        .map((c) => `${c[0]},${c[1]}`)
        .join(";");

      const res = await fetch(
        `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordsString}?geometries=geojson&roundtrip=false&source=first&destination=last&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      );

      const data = await res.json();

      if (!data.trips || !data.trips.length) {
        console.error("No optimized route:", data);
        return;
      }

      const routeData = data.trips[0];

      onRouteInfo({
        distance: routeData.distance,
        duration: routeData.duration,
      });

      const geojson = {
        type: "Feature",
        geometry: routeData.geometry,
      };

      if (map.getSource("route")) {
        map.getSource("route").setData(geojson);
      } else {
        map.addSource("route", {
          type: "geojson",
          data: geojson,
        });

        map.addLayer({
          id: "route-layer",
          type: "line",
          source: "route",
          paint: {
            "line-color": "#16a34a",
            "line-width": 5,
          },
        });
      }
    };

    getRoute();
  }, [drawRoute, locations, onRouteInfo]);

  return (
    <div
      ref={mapContainerRef}
      className=" w-full h-full"
    />
  );
}
