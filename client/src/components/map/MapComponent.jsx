import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SearchField from "./SearchField";
import LocationMarker from "./LocationMarker";

export default function MapComponent() {
  const [markers, setMarkers] = useState([]);
    
  L.Icon.mergeOptions({
    iconRetinaUrl: '../../assets/images/marker-icon-2x.png',
    iconUrl: '../../assets/images/marker-icon.png',
    shadowUrl: '../../assets/images/marker-shadow.png'
  });
  
  useEffect(() => {
    const charlevillePositions = [
      { id: 1, position: [49.77352, 4.72088], name: "Place Ducale" },
      { id: 2, position: [49.77567, 4.72209], name: "Musée Rimbaud" },
      { id: 3, position: [49.76031, 4.72025], name: "Hotel de ville" },
      { id: 4, position: [49.77232, 4.72929], name: "Stade du petit bois" },
      { id: 5, position: [49.77946, 4.71886], name: "Port de plaisance" },
      { id: 6, position: [49.7637256, 4.7065998], name: "Chez Pierre" },
    ];
    setMarkers(charlevillePositions);
  }, []);

  return (
    <div className='h-screen'>
      <MapContainer
        center={{ lat: 47.27387, lng: 2.70264 }}
        zoom={6}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map(marker => (
          <Marker key={marker.id} 
                  position={marker.position}>
              <Popup>{marker.name}
              </Popup>
          </Marker>
        ))}
            <SearchField/>
          <LocationMarker />
      </MapContainer>
    </div>
  );
}