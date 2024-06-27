import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "./SearchField.css";

export default function SearchField() {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new SearchControl({
      provider,
      style: "bar",
      showMarker: false,
    });
    map.addControl(searchControl);
    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);
}
