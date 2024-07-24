import { ShieldEllipsis, ReceiptText, Send, User } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export default function NavbarDesktop() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-GreenComp w-full flex flex-col py-2 ">
        <ul className="flex justify-between flex-row items-center ml-8 mr-20">
          <Link to="/">
            <img
              src={Logo}
              alt=""
              className="w-20 h-20 rounded-full border-2"
            />
          </Link>
          <Link to="/map">
            <li className="flex flex-col items-center">
              <Send color="#ffffff" size={30} strokeWidth={1} />
              <span className="text-white font-paraph text-xl">Carte</span>
            </li>
          </Link>
          <Link to="/profil">
            <li className="flex flex-col items-center">
              <User color="#ffffff" size={30} strokeWidth={1} />
              <span className="text-white font-paraph text-xl">Profil</span>
            </li>
          </Link>

          <Link to="/contact">
            <li className="flex flex-col items-center">
              <ReceiptText color="#ffffff" size={30} strokeWidth={1} />
              <span className="text-white font-paraph text-xl">Contact</span>
            </li>
          </Link>
          <Link to="/rgpd">
            <li className="flex flex-col items-center">
              <ShieldEllipsis color="#ffffff" size={30} strokeWidth={1} />
              <span className="text-white  font-paraph text-xl">
                Mentions légales
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
