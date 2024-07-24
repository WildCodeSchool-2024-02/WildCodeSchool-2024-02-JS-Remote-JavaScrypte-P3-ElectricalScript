import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { toast } from "react-toastify";
import axios from "axios";
import L from "leaflet";

import SearchField from "./SearchField";
import LocationMarker from "./LocationMarker";
import LoadingComponent from "./LoadingComponent";

import greenIconUrl from "../../assets/images/marker-icon-green.png";
import greenIconRetinaUrl from "../../assets/images/marker-icon-2x-green.png";
import shadowIcon from "../../assets/images/marker-shadow.png";

import Navbar from "../Navbar";

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
            address: station.address,
            power: station.power,
          }))
        );
      } catch (error) {
        toast.error("Une erreur s'est produite");
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
      <Navbar />

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
              <Popup>
                <div className="max-w-xs text-Alata overflow-hidden rounded-lg shadow-lg bg-gray-800">
                  <div className="px-4 py-2">
                    <h1 className="text-base uppercase text-white">
                      {marker.name}
                    </h1>
                    <p className="mt-1 text-xs text-gray-400">
                      {marker.address}
                    </p>
                  </div>

                  <img
                    className="object-cover  w-full h-16 mt-2"
                    src="/static/image/borneimg.jpg"
                    alt="Station de recharge"
                  />

                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <Link
                      to={`/reservation/${marker.name}`}
                      state={{
                        name: marker.name,
                        address: marker.address,
                        power: marker.power,
                        station: marker.id,
                      }}
                    >
                      <button
                        type="button"
                        className="px-2 py-1 text-xs text-white transition-colors duration-300 transform bg-green-600 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                      >
                        Réserver
                      </button>
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <SearchField />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
