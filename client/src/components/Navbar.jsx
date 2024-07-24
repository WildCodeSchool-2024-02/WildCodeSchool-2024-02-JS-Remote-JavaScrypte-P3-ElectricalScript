import { ShieldEllipsis, ReceiptText, Send, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-10 flex justify-center items-center">
      <div className="bg-GreenComp w-10/12 rounded-xl border-solid border-4 border-GreyComp flex flex-col py-4 ">
        <ul className="flex justify-evenly flex-row items-center  ">
          <Link to="/map">
            <li className="flex flex-col items-center">
              <Send color="#ffffff" size={20} strokeWidth={1} />
              <span className="text-white mt-2 font-paraph">Carte</span>
            </li>
          </Link>
          <Link to="/profil">
            <li className="flex flex-col items-center">
              <User color="#ffffff" size={20} strokeWidth={1} />
              <span className="text-white mt-2 font-paraph">Profil</span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex flex-col items-center">
              <ReceiptText color="#ffffff" size={20} strokeWidth={1} />
              <span className="text-white mt-2 font-paraph">Contact</span>
            </li>
          </Link>
          <Link to="/rgpd">
            <li className="flex flex-col items-center">
              <ShieldEllipsis color="#ffffff" size={20} strokeWidth={1} />

              <span className="text-white mt-2 font-paraph">Mentions</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
