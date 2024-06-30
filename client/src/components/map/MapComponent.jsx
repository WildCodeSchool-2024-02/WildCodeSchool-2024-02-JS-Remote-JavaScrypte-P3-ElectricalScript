import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import axios from "axios";
import L from "leaflet";
import SearchField from "./SearchField";

import LocationMarker from "./LocationMarker";
import LoadingComponent from "./LoadingComponent";

import greenIconUrl from "../../assets/images/marker-icon-green.png";
import greenIconRetinaUrl from "../../assets/images/marker-icon-2x-green.png";
import shadowIcon from "../../assets/images/marker-shadow.png";

export default function MapComponent() {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(false);

  const greenIcon = new L.Icon({
    iconUrl: greenIconUrl,
    iconRetinaUrl: greenIconRetinaUrl,
    shadowUrl: shadowIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {
    const fetchPositions = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/station`
        );
        const validMarkers = data.filter(
          (station) => station.latitude && station.longitude
        );

        setMarkers(
          validMarkers.map((station) => ({
            id: station.station_id,
            position: [station.latitude, station.longitude],
            name: station.name,
          }))
        );
      } catch (error) {
        console.info("Erreur:", error);
      }
      setLoading(false);
    };
    fetchPositions();
  }, []);

  if (loading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div className="h-screen">
      <MapContainer
        center={[47.27387, 2.70264]}
        zoom={6}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={70}
          removeOutsideVisibleBounds
        >
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position} icon={greenIcon}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <SearchField />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
