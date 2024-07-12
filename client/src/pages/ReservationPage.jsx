import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReservationPage() {
  const location = useLocation();
  const { name, address, power } = location.state;
  const [formDataReservation, setFormDataReservation] = useState({});

  function handleAll(e, contentTarget) {
    setFormDataReservation((prevFormData) => ({
      ...prevFormData,
      [contentTarget]: e.target.value,
    }));
  }

  const handleSubmitReservation = async () => {
    if (formDataReservation.startAt >= formDataReservation.endAt) {
      toast.error("L'heure ou la date ne correspondent pas.");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/reservation`, {
        status: "Réservé",
        price: 10,
        startAt: formDataReservation.startAt,
        endAt: formDataReservation.endAt,
        userId: 1,
      });

      toast.success("Votre réservation est prise en compte!");

      setFormDataReservation({
        startAt: "",
        endAt: "",
      });
    } catch (error) {
      toast.error("Erreur lors de la réservation.");
    }
  };

  return (
    <main className="bg-black">
      <section className="bg-gray-800 lg:py-12 lg:flex lg:justify-center ">
        <div className="overflow-hidden bg-gray-900 lg:shadow-md lg:rounded-xl">
          <img
            className="w-full object-cover"
            src="/static/image/borneimg.jpg"
            alt="borne de recharge"
          />
        </div>
        <div className="m-8 flex justify-center">
          {name && (
            <div>
              <h2 className="text-center text-xl">{name}</h2>
              <h2 className="text-center text-lg">Adresse:{address}</h2>
              <h2 className="text-center text-lg">
                Puissance de charge:{power}
              </h2>
              <button
                className="h-10 w-40 ml-4 mt-14
                      font-medium tracking-wide text-white transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                onClick={handleSubmitReservation}
                type="button"
              >
                Enregistrer
              </button>
            </div>
          )}
        </div>
        <div className="m-4">
          <h1 className="p-2 mt-16">Début de la réservation</h1>

          <input
            className="input bg-green-600 text-white focus:border-none m-2"
            type="datetime-local"
            id="startAt"
            name="startAt"
            value={formDataReservation.startAt}
            onChange={(e) => handleAll(e, "startAt")}
            required
          />
          <h1 className="p-2">Fin de la réservation</h1>
          <input
            className="input bg-green-600 text-white focus:border-none m-2"
            type="datetime-local"
            id="endAt"
            name="endAt"
            value={formDataReservation.endAt}
            onChange={(e) => handleAll(e, "endAt")}
            required
          />
        </div>
      </section>
    </main>
  );
}
