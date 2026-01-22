"use client";

import React, { useState } from "react";

const LocationInput = ({index, onSelect}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        value,
      )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&autocomplete=true&limit=5`,
    );
    const data = await res.json();
    setSuggestions(data.features || []);
  };
  const handleSelect = (place) => {
    setQuery(place.place_name);
    setSuggestions([]);
    onSelect(index, place.geometry.coordinates);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        placeholder="Enter the location"
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 bg-white rounded top-full shadow-lg">
          {suggestions.map((place) => (
            <li
              key={place.id}
              onClick={() => handleSelect(place)}
              className="p-2 cursor-pointer hover:bg-blue-100"
            >
              {place.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;

// / "use client";

// import { useState } from "react";

// export default function LocationInput({ index, onSelect }) {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const handleChange = async (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     // Call Mapbox Geocoding API
//     const res = await fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//         value
//       )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&autocomplete=true&limit=5`
//     );
//     const data = await res.json();
//     setSuggestions(data.features || []);
//   };

//   const handleSelect = (place) => {
//     setQuery(place.place_name);
//     setSuggestions([]);
//     // Send selected coordinates to parent
//     onSelect(index, place.geometry.coordinates);
//   };

//   return (
//     <div className="relative w-full max-w-md">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Enter location"
//         className="w-full p-2 border rounded"
//       />
//       {suggestions.length > 0 && (
//         <ul className="absolute top-full left-0 right-0 bg-white border rounded shadow-lg z-10">
//           {suggestions.map((place) => (
//             <li
//               key={place.id}
//               onClick={() => handleSelect(place)}
//               className="p-2 hover:bg-blue-100 cursor-pointer"
//             >
//               {place.place_name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
