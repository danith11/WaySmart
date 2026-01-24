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
    // <div className="mt-20 min-h-screen  px-4 py-10 bg-gray-50">
    //   <div className="justify-center">
    //     <h1 className="text-3xl font-bold">Optimize Your Route</h1>
    //     {[...Array(6)].map((_, i) => (
    //       <LocationInput
    //         key={i}
    //         index={i}
    //         onSelect={handleSelect}
    //         className="justify-center text-center "
    //       />
    //     ))}
    //     <button className="w-auto px-3 mt-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
    //       Optimize Route
    //     </button>
    //   </div>
    //   <div>
    //     <MapPageMap locations={locations} />
    //   </div>
    // </div>
    <div className="relative h-screen w-full">
  
  {/* MAP (bottom layer) */}
  <div className="absolute inset-0 z-0">
    <MapPageMap locations={locations} />
  </div>

  {/* UI (top layer) */}
  <div className="absolute z-10 flex items-start justify-center  md:justify-start pt-10 w-1/4">
    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">

      <h1 className="text-xl font-bold text-center">
        Optimize Your Route
      </h1>

      {[...Array(6)].map((_, i) => (
        <LocationInput
          key={i}
          index={i}
          onSelect={handleSelect}
        />
      ))}

      <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
        Optimize Route
      </button>
    </div>
  </div>

</div>
  );
};

export default MapPage;
// {/* <div className="min-h-screen bg-gray-50 px-4 py-10">
//     <div className="max-w-7xl mx-auto">

//       <h1 className="text-3xl font-bold text-center mb-8">
//         Optimize Your Route
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* LEFT PANEL */}
//         <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
//           <p className="text-gray-600 mb-2">
//             Enter up to 6 destinations
//           </p>

//           {[...Array(6)].map((_, i) => (
//             <LocationInput
//               key={i}
//               index={i}
//               onSelect={handleSelect}
//             />
//           ))}

//           <button
//             className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
//           >
//             Optimize Route
//           </button>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="bg-white p-3 rounded-xl shadow-md">
//           <MapPageMap locations={locations} />
//         </div>

//       </div>
//     </div>
//   </div> */}
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
