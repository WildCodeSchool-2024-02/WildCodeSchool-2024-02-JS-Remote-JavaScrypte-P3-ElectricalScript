import { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import avatar from "../assets/images/avatar.png";

import LoadingComponent from "../components/map/LoadingComponent";

export default function UserProfilPage() {
  const [userInfo, setUserInfo] = useState();
  const { currentUser } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/${userId}`
      );
      setUserInfo(response.data);
    } catch (e) {
      console.error("utilisateur non existant", e);
    }
  };

  const fetchReservation = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/reservation/`,
        {
          params: { userId: currentUser.user_id },
        }
      );
      setReservations(
        response.data.filter(
          (reservation) => reservation.user_id === currentUser.user_id
        )
      );
    } catch (e) {
      console.error("reservation non exisante", e);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (!currentUser) {
        navigate("/connexion");
      } else {
        fetchUserData(currentUser.user_id);
        fetchReservation();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentUser, navigate]);
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="h-screen mb-48 ">
      <div>
        <Navbar />
      </div>
      <div>
        <div className=" flex flex-row bg-neutral-700 px-6 py-4 rounded-br-3xl w-fit">
          <img
            src={avatar}
            alt="avatar"
            className="bg-GreenComp border-solid border-2 border-white p-1 rounded-md md:w-28 md:h-28"
          />
          <ul className="flex flex-col text-white text-sm gap-2 mt-2 ml-4 md:ml-6 md:text-base">
            <p className="text-white">{userInfo?.first_name}</p>
            <p className="text-white">{userInfo?.last_name}</p>
            <p className="text-white">{userInfo?.email}</p>
          </ul>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mt-4 gap-6 md:flex-row md:justify-around">
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-white md:text-2xl">Votre véhicule :</h1>
          <div className="flex justify-end text-white bg-neutral-700 rounded-lg p-4">
            <img src={userInfo?.image} alt="" className="w-26 h-20" />
            <div>
              <p>
                <strong>Marque</strong> : {userInfo?.brand}
              </p>
              <p>
                <strong>Model</strong> : {userInfo?.model}
              </p>
              <p>
                <strong>Type de prise</strong> : {userInfo?.socket_type}
              </p>
            </div>
            {/* */}
          </div>
          <Link
            to="/registerCar"
            className="text-white text-xl bg-GreenComp w-8 border-solid border-2 border-white rounded-full text-center"
          >
            +
          </Link>
        </div>

        <div className="flex flex-col gap-4 ">
          <h1 className=" text-white md:text-2xl">Vos réservations :</h1>
          {userInfo?.start_at || userInfo?.end_at !== null ? (
            reservations.map((reservation) => (
              <div
                className="flex justify-center text-white bg-neutral-700 rounded-lg p-4 gap-4"
                key={reservation.reservation_id}
              >
                <div className="flex flex-col">
                  {" "}
                  <p>
                    <strong> Date de début : </strong>
                    {new Date(reservation.start_at).toLocaleString()}
                  </p>
                  <p>
                    <strong>Date de fin : </strong>{" "}
                    {new Date(reservation.end_at).toLocaleString()}
                  </p>
                  <p>
                    <strong>Status : </strong>
                    {reservation.status}{" "}
                  </p>
                  <p>
                    {" "}
                    <strong>Prix : </strong>
                    {reservation.price} €{" "}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Vous n'avez pas de réservation</p>
          )}
          <Link
            to="/map"
            className="text-white text-xl bg-GreenComp w-8 border-solid border-2 border-white rounded-full text-center"
          >
            +
          </Link>
        </div>
      </div>
    </div>
  );
}
