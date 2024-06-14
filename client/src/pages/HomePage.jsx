import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import iconevoiture from "../assets/images/voiture-electrique.png";

export default function HomePage() {
  return (
    <div className="bg-gray-700 h-screen">
      <div className="pt-12">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full h-44 w-44 mx-auto shadow-3xl shadow-green-700"
        />
        <h1 className="text-center text-3xl mt-8 font-paraph text-white lg:mt-20">
          Bienvenue sur <span className="text-GreenBlue">géocode</span>
        </h1>
        <p className="pt-5 ml-10 text-xl font-paraph text-white lg:text-center">
          Votre solution de recharge éléctrique proche de chez vous
        </p>
      </div>

      <div className="mt-40 flex flex-col justify-center items-center lg:gap-1">
        <img src={iconevoiture} alt="icone voiture" className="h-20 w-26" />
        <Link to="/landing">
          <button
            type="button"
            className="font-main  bg-GreenComp text-white text-2xl mx-auto px-8 rounded-md "
          >
            Démarrer
          </button>
        </Link>
      </div>
    </div>
  );
}
