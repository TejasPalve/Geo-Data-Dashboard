import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) map.setView([lat, lng], 8);
  }, [lat, lng]);
  return null;
};

const GeoMap = ({ data, selectedId, onMarkerClick }) => {
  const selectedPoint = data.find(p => p.id === selectedId);

  return (
    <MapContainer center={[45, -70]} zoom={4} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      
      {data.slice(0, 500).map((item) => (
        <Marker 
          key={item.id} 
          position={[item.lat, item.lng]}
          eventHandlers={{ click: () => onMarkerClick(item.id) }}
          opacity={selectedId === item.id ? 1 : 0.6}
        >
          <Popup>{item.projectName}</Popup>
        </Marker>
      ))}

      {selectedPoint && (
        <RecenterMap lat={selectedPoint.lat} lng={selectedPoint.lng} />
      )}
    </MapContainer>
  );
};

export default GeoMap;