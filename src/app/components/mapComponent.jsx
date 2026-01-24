import React from 'react'

const mapComponent = () => {
  return (
    <div>mapComponent</div>
  )
}

export default mapComponent


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
