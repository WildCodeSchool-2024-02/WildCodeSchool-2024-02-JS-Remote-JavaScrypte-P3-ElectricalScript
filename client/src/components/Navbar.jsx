export default function Navbar() {
  return (
    <div className="absolute inset-x-0 bottom-10 flex justify-center items-center">
      <div className="bg-GreenComp w-10/12 rounded-xl border-solid border-4 border-GreyComp flex flex-col py-4 ">
        <ul className="flex justify-evenly flex-row items-center  ">
          <li className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list-filter"
            >
              <title>Filtre</title>
              <path d="M3 6h18" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
            <span className="text-white mt-2 font-paraph">Filtres</span>
          </li>
          <li className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-down"
            >
              <title>Itinéraire</title>
              <path d="m21 16-4 4-4-4" />
              <path d="M17 20V4" />
              <path d="m3 8 4-4 4 4" />
              <path d="M7 4v16" />
            </svg>
            <span className="text-white mt-2 font-paraph">Itinéraire</span>
          </li>
          <li className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <title>Carte</title>
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span className="text-white mt-2 font-paraph">Carte</span>
          </li>
          <li className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
            >
              <title>Profil</title>
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-white mt-2 font-paraph">Profil</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
