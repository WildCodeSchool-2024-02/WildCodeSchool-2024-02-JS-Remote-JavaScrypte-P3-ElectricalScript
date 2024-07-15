import { Link } from "react-router-dom";
import MapComponent from "../components/map/MapComponent";

export default function MapPage() {
  return (
    <div>
      <Link to="/registerCar" className="text-white">
        GOGOGO
      </Link>
      <MapComponent />;
    </div>
  );
}
