// "use client";
"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

export default function MapComponent() {
  const [locations, setLocations] = useState([]);
  const [input, setInput] = useState("");
  const [route, setRoute] = useState([]);

  // 1️⃣ Convert place name -> lat/lng
  const geocodePlace = async (place) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
    );
    const data = await res.json();
    if (data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };
    }
    return null;
  };

  // 2️⃣ Add location
  const addLocation = async () => {
    if (!input) return;
    const coord = await geocodePlace(input);
    if (coord) {
      setLocations((prev) => [...prev, coord]);
      setInput("");
    } else {
      alert("Location not found");
    }
  };

  // 3️⃣ Get and draw route
  const getRoute = async () => {
    if (locations.length < 2) {
      alert("Add at least two locations");
      return;
    }

    const coords = locations.map((loc) => [loc.lng, loc.lat]);
    const body = {
      coordinates: coords,
    };

    const res = await fetch("https://api.openrouteservice.org/v2/directions/driving-car/geojson", {
      method: "POST",
      headers: {
        "Authorization": "YOUR_API_KEY_HERE", // Replace with your ORS key
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    const routeCoords = data.features[0].geometry.coordinates.map((c) => [c[1], c[0]]);
    setRoute(routeCoords);
  };

  // 4️⃣ Reset all
  const resetAll = () => {
    setLocations([]);
    setRoute([]);
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Input section */}
      <div style={{ margin: "10px" }}>
        <input
          type="text"
          placeholder="Enter location (e.g. Kandy)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={addLocation}>Add Location</button>
        <button onClick={getRoute} style={{ marginLeft: "5px" }}>Show Route</button>
        <button onClick={resetAll} style={{ marginLeft: "5px", background: "red", color: "white" }}>Reset</button>
      </div>

      {/* Map */}
      <div style={{ height: "500px" }}>
        <MapContainer center={[6.9271, 79.8612]} zoom={8} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />

          {/* Markers */}
          {locations.map((pos, i) => (
            <Marker key={i} position={[pos.lat, pos.lng]}>
              <Popup>📍 {i + 1}</Popup>
            </Marker>
          ))}

          {/* Route line */}
          {route.length > 0 && <Polyline positions={route} color="blue" />}
        </MapContainer>
      </div>
    </div>
  );
}


// import { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix Leaflet marker issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
// });

// // Component to handle map clicks
// function LocationMarker({ setMarkers }) {
//   useMapEvents({
//     click(e) {
//       setMarkers((prev) => [...prev, e.latlng]); // add clicked position
//     },
//   });
//   return null;
// }

// export default function MapComponent() {
//   const [markers, setMarkers] = useState([]);

//   return (
//     <div style={{ height: "500px", width: "100%" }}>
//       <MapContainer
//         center={[6.9271, 79.8612]} // Colombo
//         zoom={13}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="© OpenStreetMap contributors"
//         />

//         {/* Handle clicks */}
//         <LocationMarker setMarkers={setMarkers} />

//         {/* Render markers */}
//         {markers.map((pos, i) => (
//           <Marker key={i} position={pos}>
//             <Popup>
//               📍 Marker {i + 1} <br />
//               Lat: {pos.lat.toFixed(4)}, Lng: {pos.lng.toFixed(4)}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }
