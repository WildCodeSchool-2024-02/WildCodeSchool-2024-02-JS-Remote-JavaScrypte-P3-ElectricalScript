import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "leaflet.locatecontrol";
import L from "leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    const locateControl = L.control
      .locate({
        position: "topleft",
        showPopup: false,
        flyTo: true,
        initialZoomLevel: 13,
        strings: {
          title: "Montre moi ou je suis",
        },

        onLocationFound: (e) => {
          setPosition(e.latlng);
        },
      })
      .addTo(map);

    map.on("locationfound", (e) => {
      setPosition(e.latlng);
    });

    return () => {
      map.removeControl(locateControl);
    };
  }, [map]);

  return (
    <div>
      {position && (
        <div>
          Position: {position.lat}, {position.lng}
        </div>
      )}
    </div>
  );
}
