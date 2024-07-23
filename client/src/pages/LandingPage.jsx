import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import icocarte from "../assets/images/icone carte.png";
import icoconnexion from "../assets/images/icone connexion.png";
import icoinscription from "../assets/images/icone inscription.png";

export default function LandingPage() {
  return (
    <div className="bg-gray-700 h-screen">
      <div className="pt-12">
        <img src={logo} alt="Logo" className="rounded-full h-44 w-44 mx-auto" />
        <p className="mt-10 ml-8 text-xl font-main text-white lg:text-center">
          Planifiez votre itinéraire et trouvez de nombreuses
          <span className="text-GreenBlue"> stations de recharge</span> sur
          votre chemin !
        </p>
      </div>
      <Link
        to="/map"
        className="text-white mt-44 font-main bg-GreenComp text-2xl mx-auto px-8 py-1 rounded-md flex justify-center gap-4"
      >
        Accéder à la carte
        <img src={icocarte} alt="icone carte" className="h-8 w-8" />
      </Link>
      <div className="mt-8 flex lg:justify-center lg:gap-32 lg:mt-20">
        <Link
          to="/register"
          className="text-white font-main bg-GreenComp text-xl mx-auto px-3 py-1 rounded-md flex justify-center items-center gap-4 lg:mx-0"
        >
          Inscription
          <img
            src={icoinscription}
            alt="icone inscription"
            className="h-6 w-6"
          />
        </Link>
        <Link
          to="/connexion"
          className="text-white font-main bg-GreenComp text-xl mx-auto px-3 py-1 rounded-md flex justify-center items-center gap-4 lg:mx-0"
        >
          Connexion
          <img src={icoconnexion} alt="icone connexion" className="h-6 w-5" />
        </Link>
      </div>
    </div>
  );
}
