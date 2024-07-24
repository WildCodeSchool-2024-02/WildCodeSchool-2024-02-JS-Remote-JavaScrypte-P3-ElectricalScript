import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function RegisterCarPage() {
  const [cars, setCars] = useState([]);
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);
  const [showValidateButton, setShowValidateButton] = useState(false);
  const { currentUser } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/car`
        );
        setCars(response.data);
      } catch (e) {
        toast.error("Une erreur s'est produite");
      }
    };
    fetchData();
  }, []);

  const submit = async () => {
    try {
      const carTypeId = cars[selectedCarIndex]?.car_type_id;
      const userId = currentUser?.user_id;

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          carTypeId,
          userId,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Votre véhicule a été modifié");
      navigate("/profil");
    } catch (e) {
      toast.error("Une erreur s'est produite");
    }
  };

  const handleSelectCar = (index) => {
    setSelectedCarIndex(index);
    setShowValidateButton(true);
  };

  return (
    <div className="min-h-screen bg-bg-geocode bg-cover bg-center flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 p-8">
        <div className="col-span-2 md:col-span-4 mb-2 text-center">
          <h1 className="text-2xl font-bold text-white">
            Veuillez sélectionner le type de votre véhicule :
          </h1>
        </div>
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={`bg-gradient-to-b from-gray-300 to-white rounded-lg overflow-hidden shadow-xl border-GreenComp ${
              selectedCarIndex === index ? "border-8" : ""
            } flex flex-col ${selectedCarIndex === index ? "border-8" : ""}`}
          >
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-40 sm:h-48 object-contain"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{car.brand}</h2>
                <p className="text-sm mb-2">{car.model}</p>
                <p className="text-sm">{car.type}</p>
                <p className="text-sm">Type de prise : {car.socket_type} 🔌 </p>
              </div>
              <button
                type="button"
                onClick={() => handleSelectCar(index)}
                className="bg-GreenComp hover:bg-yellow-600 text-white font-sm py-2 px-4 rounded mt-2 w-full"
              >
                Sélectionner
              </button>
            </div>
          </div>
        ))}
      </div>
      {showValidateButton && (
        <div className="fixed bottom-10 left-0 right-0 flex justify-center">
          <button
            type="button"
            className="select-none rounded-lg bg-yellow-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-amber-600 animate-slide-up"
            onClick={submit}
          >
            Valider
          </button>
        </div>
      )}
    </div>
  );
}

export default RegisterCarPage;
