import { NavLink } from "react-router-dom";
import admin from "../../assets/images/admin.png";
import logo from "../../assets/images/Logo.png";

function SideBar() {
  return (
    <div className="bg-black text-white fixed h-full top-0 left-0">
      <div className="mt-20 mb-40 bg-GreenComp p-8 rounded-tr-large rounded-br-srounded">
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="bg-teal-800 p-2 rounded-full">
              <img
                src={admin}
                alt="Admin Avatar"
                className="bg-white p-2 rounded-full"
                style={{ width: "90px", height: "90px" }}
              />
            </div>
          </div>

          {/* Voitures Button */}
          <div className="flex items-center space-x-2">
            <NavLink to="/cars" className="w-full">
              <button
                type="button"
                className="w-full rounded-lg border border-white py-2 px-4 hover:bg-white hover:text-black transition duration-300 text-left"
              >
                Voitures
              </button>
            </NavLink>
          </div>

          {/* Utilisateurs Button */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="rounded-lg border border-white py-2 px-4 hover:bg-white hover:text-black transition duration-300"
            >
              Utilisateurs
            </button>
          </div>

          {/* Informations Button */}
          <div className="flex items-center space-x-2">
            <NavLink to="/admin" className="w-full">
              <button
                type="button"
                className="w-full rounded-lg border border-white py-2 px-4 hover:bg-white hover:text-black transition duration-300 text-left"
              >
                Informations
              </button>
            </NavLink>
          </div>

          {/* Stations Button */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="rounded-lg border border-white py-2 px-4 hover:bg-white hover:text-black transition duration-300"
            >
              Stations
            </button>
          </div>

          {/* Logo */}
          <img src={logo} alt="logo geocode" className="rounded-full w-20 h-20" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;



