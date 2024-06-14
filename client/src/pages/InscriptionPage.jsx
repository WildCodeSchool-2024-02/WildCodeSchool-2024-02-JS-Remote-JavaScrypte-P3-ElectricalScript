import { Link } from 'react-router-dom';
import logo from "../assets/images/Logo.png";

function InscriptionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="rounded-xl w-full max-w-md p-6">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="rounded-full w-20 h-20" />
        </div>
        <div className="flex flex-col gap-3">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="username" className="text-sm font-bold">
                Prénom :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="text"
                id="username"
                name="username"
                placeholder="Saisissez votre prénom"
                required
              />
            </div>
            <div>
              <label htmlFor="userlastname" className="text-sm font-bold">
                Nom :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="text"
                id="userlastname"
                name="userlastname"
                placeholder="Saisissez votre nom"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="text-sm font-bold">
                Adresse :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="text"
                id="address"
                name="address"
                placeholder="Saisissez votre adresse"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="postalCode" className="text-sm font-bold">
                  Code postal :
                </label>
                <input
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Code postal"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="city" className="text-sm font-bold">
                  Ville :
                </label>
                <input
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Ville"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold">
                Email :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="email"
                id="email"
                name="email"
                placeholder="Saisissez votre adresse mail"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-sm font-bold">
                Mot de passe :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="password"
                id="password"
                name="password"
                placeholder="Saisissez votre mot de passe"
                required
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="text-sm font-bold">
                Confirmez votre mot de passe :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Vérification du mot de passe"
                required
              />
            </div>
            <Link
              to="/carinformationspage"
              className="btn bg-GreenComp border-GreyComp text-white w-full p-2 mt-3 hover:bg-gray-600">
              Suivant
            </Link>
          </form>
          <p className="text-sm mt-2">
            Déjà inscrit ?
            <button
              type="button"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Connexion
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InscriptionPage;