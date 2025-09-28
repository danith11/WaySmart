"use client"; // required for Leaflet in Next.js (App Router)

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default marker issue with Webpack/Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

export default function MapComponent() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[6.9271, 79.8612]} // Colombo as default
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={[6.9271, 79.8612]}>
          <Popup>📍 Colombo, Sri Lanka</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

