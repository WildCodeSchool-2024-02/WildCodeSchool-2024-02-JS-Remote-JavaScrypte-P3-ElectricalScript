import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import icocarte from "../assets/images/icone carte.png";
import icoconnexion from "../assets/images/icone connexion.png";
import icoinscription from "../assets/images/icone inscription.png";

export default function LandingPage() {
  return (
    <div className="bg-bg-geocode bg-cover bg-center h-screen flex flex-col justify-between">
      <div className="pt-12 text-center">
        <img src={logo} alt="Logo" className="rounded-full h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 mx-auto" />
        <p className="mt-10 text-lg sm:text-xl md:text-2xl font-main text-white">
          Planifiez votre itinéraire et trouvez de nombreuses
          <span className="text-GreenBlue"> stations de recharge</span> sur
          votre chemin !
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 mb-32">
        <Link
          to="/map"
          className="text-white font-main bg-GreenComp text-lg sm:text-xl px-20 py-2 rounded-md flex items-center gap-2"
        >
          Accéder à la carte
          <img src={icocarte} alt="icone carte" className="h-6 w-6" />
        </Link>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="text-white font-main bg-GreenComp text-lg sm:text-xl px-3 py-1 rounded-md flex items-center gap-2"
          >
            Inscription
            <img src={icoinscription} alt="icone inscription" className="h-6 w-6" />
          </Link>
          <Link
            to="/connexion"
            className="text-white font-main bg-GreenComp text-lg sm:text-xl px-3 py-1 rounded-md flex items-center gap-2"
          >
            Connexion
            <img src={icoconnexion} alt="icone connexion" className="h-6 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

