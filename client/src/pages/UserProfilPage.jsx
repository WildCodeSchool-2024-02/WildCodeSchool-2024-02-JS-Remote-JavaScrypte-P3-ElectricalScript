import { CircleX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "../components/DropDownMenu";
import Navbar from "../components/Navbar";
import avatar from "../assets/images/avatar.png";

export default function UserProfilPage() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  // const [userCars, setUserCars] = useState([]);

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // useEffect(() => {
  //   axios.get(`http://localhost:3310/api/car/${car.id}`).then((data) => {
  //     console.info(data);
  //     setUserCars(data?.data);
  //   });
  // }, []);

  return (
    <div className="h-screen mb-48 ">
      <div>
        <Navbar />
      </div>
      <div className=" mr-44 bg-neutral-700 pl-6 pb-4  rounded-br-full pt-4 md:flex flex-row ">
        <img
          src={avatar}
          alt="avatar"
          className="bg-GreenComp border-solid border-2 border-white p-1 rounded-md md:w-28 md:h-28 md:mt-5 "
        />

        <ul className="flex flex-col text-white text-sm gap-2 mb-8 mt-4 md:ml-6 md:text-base">
          <li>Henry Lecompte</li>
          <li>32 rue Joseph Bara</li>
          <li>31000 Toulouse</li>
          <li className="pr-20">adresse-email@email.com</li>
        </ul>
      </div>
      <h1 className="text-white flex justify-center md:flex justify-end md:mt-10 md:mr-20 md:text-lg">
        Vos véhicules :
      </h1>
      <span className="text-white m-4 bg-neutral-700 flex justify-end md:flex justify-end">
        <CircleX />
      </span>
      <div className=" flex justify-center md:flex md:justify-end">
        <Link to="/registerCar">
          <button
            type="button"
            className="text-white bg-GreenComp mb-12 py-1 px-2 border-solid border-2 border-white rounded-full"
          >
            +
          </button>
        </Link>
      </div>
      <div className="flex justify-center mx-20">
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={handleClick}
          className="bg-white p-2"
        >
          Vos réservations
        </button>
        <div className="">{isDropdownVisible && <DropDownMenu />}</div>
      </div>
    </div>
  );
}
