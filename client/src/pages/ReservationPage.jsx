/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";
import Navbar from "../components/Navbar";

export default function ReservationPage() {
  const { currentUser } = useOutletContext();
  const location = useLocation();
  const { name, address, power, station } = location.state;
  const [reservations, setReservations] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const fetchReservations = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/reservation`,
        {
          params: { stationId: station },
        }
      );
      setReservations(
        response.data.filter(
          (reservation) => reservation.station_id === station
        )
      );
    } catch (error) {
      toast.error("Erreur lors de la récupération des réservations.");
    }
  };

  const checkReservationAvailability = async (stationId, startAt, endAt) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/reservation/check`,
        {
          params: { stationId, startAt, endAt },
        }
      );
      return response.data.isConflict;
    } catch (e) {
      toast.error(
        "Erreur lors de la vérification de la disponibilité du créneau."
      );
      return true;
    }
  };

  const calculatePrice = (startAt, endAt) => {
    const start = new Date(startAt);
    const end = new Date(endAt);
    const durationInHours = (end - start) / (1000 * 60 * 60);

    if (durationInHours <= 0) {
      return 0;
    }
    const pricePerHour = 0.5;
    return durationInHours * power * pricePerHour;
  };

  const updateEstimatedPrice = () => {
    const startAt = watch("startAt");
    const endAt = watch("endAt");

    if (startAt && endAt) {
      const price = calculatePrice(startAt, endAt);
      setEstimatedPrice(price);
    } else {
      setEstimatedPrice(null);
    }
  };

  const onSubmit = async (data) => {
    reset();
    try {
      const isConflict = await checkReservationAvailability(
        station,
        data.startAt,
        data.endAt
      );

      if (isConflict) {
        toast.error("Ce créneau horaire est déjà réservé !");
      } else {
        const price = calculatePrice(data.startAt, data.endAt, power);
        await axios.post(`${import.meta.env.VITE_API_URL}/api/reservation`, {
          status: "Réservé",
          price,
          startAt: data.startAt,
          endAt: data.endAt,
          userId: currentUser?.user_id,
          stationId: station,
        });
        toast.success("Votre réservation est prise en compte !");
        fetchReservations();
      }
    } catch (e) {
      toast.error("Erreur lors de la réservation.");
    }
  };

  const validateAndSubmit = (data) => {
    const startAt = new Date(watch("startAt"));
    const endAt = new Date(watch("endAt"));
    const currentDate = new Date();

    if (!currentUser) {
      navigate("/connexion");
      toast.error("Vous devez être connecté pour faire une réservation.");
    } else if (startAt < currentDate) {
      toast.error("La date ne peut pas être antérieure à aujourd'hui.");
    } else if (startAt >= endAt) {
      toast.error("L'heure ou la date ne correspondent pas.");
    } else {
      onSubmit(data);
    }
  };

  useEffect(() => {
    fetchReservations();
  });

  useEffect(() => {
    updateEstimatedPrice();
  });

  return (
    <>
      <Navbar />
      <main className="bg-bg-geocode min-h-screen flex items-center justify-center text-white pb-40">
        <section className="bg-gray-800 lg:py-12 lg:flex lg:justify-center rounded-xl p-6">
          <div className="lg:rounded-xl w-full sm:max-w-sm">
            <img
              className="w-full h-60 object-cover rounded-xl"
              src="/static/image/borneimg.jpg"
              alt="borne de recharge"
            />
          </div>
          <div className="m-4 flex flex-col justify-center">
            {name && (
              <div className="mb-6">
                <h2 className="text-center text-xl text-white p-4">{name}</h2>
                <h2 className="text-center text-sm text-neutral-400 ">
                  {address}
                </h2>
                <h2 className="text-center text-sm text-neutral-400">
                  Puissance: {power} kW
                </h2>
              </div>
            )}
            <form
              onSubmit={handleSubmit(validateAndSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="text-center">
                <label htmlFor="startAt" className="text-sm">
                  Début de la réservation :
                </label>
                <input
                  className="input bg-green-600 text-white focus:border-none w-60 p-2 mt-1 focus:ring-2 focus:ring-green-500"
                  type="datetime-local"
                  id="startAt"
                  name="startAt"
                  {...register("startAt", {
                    required: "Ce champ est requis !",
                  })}
                />
                {errors.startAt && (
                  <span className="text-red-500 text-center max-w-48 flex justify-center">
                    {errors.startAt?.message}
                  </span>
                )}
              </div>
              <div className="text-center">
                <label htmlFor="endAt" className="text-sm">
                  Fin de la réservation :
                </label>
                <input
                  className="input bg-green-600 text-white focus:border-none w-60 p-2 mt-1 focus:ring-2 focus:ring-green-500"
                  type="datetime-local"
                  id="endAt"
                  name="endAt"
                  {...register("endAt", { required: "Ce champ est requis !" })}
                />
                {errors.endAt && (
                  <span className="text-red-500 text-center max-w-48 flex justify-center">
                    {errors.endAt?.message}
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  className="h-10 w-40 mt-4 font-medium tracking-wide text-white transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                  type="submit"
                >
                  Enregistrer
                </button>
              </div>
            </form>
            {estimatedPrice !== null && (
              <div className="mt-4 text-center">
                <h3 className="text-sm">Estimation du prix :</h3>
                <p>{estimatedPrice.toFixed(2)} €</p>
              </div>
            )}
            <div className="mt-6">
              <h3 className="text-center text-sm mb-4">Créneaux réservés :</h3>
              <ul>
                {reservations.map((reservation) => (
                  <li
                    className="text-sm text-center bg-teal-800 p-2 rounded-lg mb-2"
                    key={reservation.reservation_id}
                  >
                    {format(
                      new Date(reservation.start_at),
                      "yyyy-MM-dd HH:mm:ss"
                    )}{" "}
                    -{" "}
                    {format(
                      new Date(reservation.end_at),
                      "yyyy-MM-dd HH:mm:ss"
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
