"use client";

import React, { useState } from "react";
import LocationInput from "@/app/components/LocationInput";
import MapPageMap from "@/app/components/MapPage";

const MapPage = () => {
  const [locations, setLocations] = useState([]);
  const handleSelect = (index, coordinates) => {
    const newLocations = [...locations];
    newLocations[index] = coordinates;
    setLocations(newLocations);
  };

  return (
    <div>
      <h1>Optimize Your Route</h1>
      {[...Array(6)].map((_, i) => (
        <LocationInput key={i} index={i} onSelect={handleSelect} />
      ))}
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Optimize Route
      </button>
      <div>
        <MapPageMap locations={locations} />
      </div>
    </div>
  );
};

export default MapPage;
// "use client";

// import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import MapPage from "@/app/components/MapPage";

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// const page = () => {
//   const mapContainerRef = useRef(null);

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [80.7718, 6.9271],
//       zoom: 9,
//     });

//     map.addControl(new mapboxgl.NavigationControl());

//     return () => map.remove();
//   }, []);

//   return (
//     <div className="h-[500px] w-full rounded-xl overflow-hidden">
//       <div ref={mapContainerRef} className="h-full w-full" />
//       <MapPage/>
//     </div>
//   );
// };

// export default page;
