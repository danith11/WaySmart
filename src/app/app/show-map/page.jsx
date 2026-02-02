"use client";

import React, { useState } from "react";
import LocationInput from "@/app/components/LocationInput";
import MapPageMap from "@/app/components/MapPageMap";

const MapPage = () => {
  const [locations, setLocations] = useState([null, null]);
  const [drawRoute, setDrawRoute] = useState(false);
  const [routeInfo, setRouteInfo] = useState(null);

  const handleSelect = (index, coordinates) => {
    const newLocations = [...locations];
    newLocations[index] = coordinates;
    setLocations(newLocations);
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <MapPageMap
          locations={locations}
          drawRoute={drawRoute}
          onRouteInfo={setRouteInfo}
        />
      </div>

      <div className="absolute z-10 flex items-start justify-center  md:justify-start pt-10 w-1/4">
        <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
          <h1 className="text-xl font-bold text-center">Optimize Your Route</h1>

          {locations.map((_, i) => (
            <LocationInput key={i} index={i} onSelect={handleSelect} />
          ))}

          <button
            onClick={() => setDrawRoute(true)}
            className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Optimize Route
          </button>
          <button
            onClick={() => setLocations([...locations, null])}
            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add Location
          </button>
          {routeInfo && (
            <div className="pt-3 border-t text-sm space-y-1">
              <p>
                📏 Distance: <b>{(routeInfo.distance / 1000).toFixed(2)} km</b>
              </p>
              <p>
                ⏱ Time: <b>{(routeInfo.duration / 60).toFixed(1)} mins</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
