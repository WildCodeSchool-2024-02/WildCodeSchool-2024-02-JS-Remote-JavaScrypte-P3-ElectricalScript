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
      autoClose: true,
      retainZoomLevel: true,
    });
    map.addControl(searchControl);

    map.on("geosearch/showlocation", (result) => {
      const { x, y } = result.location;
      map.flyTo([y, x], 13);
    });

    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);
}
