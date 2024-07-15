import { ListFilter, ArrowUpDown, Send, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-10 flex justify-center items-center">
      <div className="bg-GreenComp w-10/12 rounded-xl border-solid border-4 border-GreyComp flex flex-col py-4 ">
        <ul className="flex justify-evenly flex-row items-center  ">
          <li className="flex flex-col items-center">
            <ListFilter color="#ffffff" size={20} strokeWidth={1} />
            <span className="text-white mt-2 font-paraph">Filtres</span>
          </li>
          <li className="flex flex-col items-center">
            <ArrowUpDown color="#ffffff" size={20} strokeWidth={1} />

            <span className="text-white mt-2 font-paraph">Itinéraire</span>
          </li>
          <li className="flex flex-col items-center">
            <Send color="#ffffff" size={20} strokeWidth={1} />
            <span className="text-white mt-2 font-paraph">Carte</span>
          </li>
          <li className="flex flex-col items-center">
            <User color="#ffffff" size={20} strokeWidth={1} />
            <span className="text-white mt-2 font-paraph">Profil</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
