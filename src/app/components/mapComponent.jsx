import React from "react";
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";

const mapComponent = () => {
  return (
    <div>
      <h1>This is mapComponent</h1>
      <MapContainer>
        <TileLayer/>
        <Marker>
          <Popup>Colombo, Sri Lanka</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default mapComponent;
