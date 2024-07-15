import { CircleX } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DropDownMenu from "../components/DropDownMenu";
import Navbar from "../components/Navbar";
import avatar from "../assets/images/avatar.png";

export default function UserProfilPage() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [userCars, setUserCars] = useState([]);

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/users")
      .then((response) => {
        setUserCars(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="h-screen mb-48 ">
      <div>
        <Navbar />
      </div>
      <div className="flex flex col md:flex flex-row ">
        <div className="bg-neutral-700 px-6 py-4 rounded-br-3xl mr-28">
          <img
            src={avatar}
            alt="avatar"
            className="bg-GreenComp border-solid border-2 border-white p-1 rounded-md md:w-28 md:h-28 md:mt-5 "
          />
          <ul className="flex flex-col text-white text-sm gap-2 mt-4 md:ml-6 md:text-base">
            {userCars.map((usercar) => (
              <div key={usercar.userId}>
                <p className="text-white">{usercar.firstName}</p>
              </div>
            ))}
            {/* <li>Henry Lecompte</li>
            <li>32 rue Joseph Bara</li>
            <li>31000 Toulouse</li>
            <li>adresse-email@email.com</li> */}
          </ul>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col items-center mt-4 gap-6 md:flex-row md:justify-around">
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-white md:text-2xl">Vos véhicules :</h1>
          <div className="flex justify-end text-white bg-neutral-700">
            <CircleX className="m-4" />
            {/* */}
            {userCars.map((usercar) => (
              <div key={usercar.userId}>
                <p className="text-white">{usercar.carTypeId}</p>
              </div>
            ))}
            {/* */}
          </div>
          <Link to="/registerCar">
            <button
              type="button"
              className="text-white text-xl bg-GreenComp px-2 border-solid border-2 border-white rounded-full"
            >
              +
            </button>
          </Link>
        </div>
        <div>
          <button
            type="button"
            onClick={handleClick}
            onKeyDown={handleClick}
            className="bg-white p-2 text-2xl"
          >
            Vos réservations
          </button>
          <div className="">{isDropdownVisible && <DropDownMenu />}</div>
        </div>
      </div>
    </div>
  );
}
