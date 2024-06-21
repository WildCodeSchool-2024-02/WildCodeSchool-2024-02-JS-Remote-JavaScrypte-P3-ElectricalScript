import logo from "../assets/images/Logo.png";

export default function ConnexionPage() {
  return (
    <main className="flex flex-col justify-center">
      <div className="flex m-auto">
        <img
          src={logo}
          alt=""
          className="w-20 h-20 rounded-full mt-16 border-solid border-white"
        />
      </div>
      <div>
        <form className="flex items-center flex-col my-4">
          <label className="my-12">
            <p className="text-white ">E-mail / Pseudo :</p>
            <input
              type="email"
              name="name"
              placeholder="email@example.com"
              className="rounded-lg p-1"
            />
          </label>
          <label>
            <p className="text-white">Mot de passe :</p>
            <input type="password" name="name" className="rounded-lg p-1" />
          </label>
          <p className="text-white my-12 text-center">
            Si vous ne possédez pas de compte cliquez
            <a href="/" className="text-GreenComp">
              <span> ici</span>
            </a>
          </p>
          <div className="border-solid border-GreyComp">
            <button
              type="button"
              className="text-white bg-GreenComp p-2 rounded-lg border-solid border-GreyComp mb-16"
            >
              Connexion
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
