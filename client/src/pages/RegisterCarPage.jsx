import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RegisterCarPage() {
  const [cars, setCars] = useState([]);
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);
  const [showValidateButton, setShowValidateButton] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3310/api/car')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars data:', error));
  }, []);

  // Apparition du bouton valider après avoi selectionné la car
  const handleSelectCar = (index) => {
    setSelectedCarIndex(index);
    setShowValidateButton(true);
    console.info(`Car selected with index: ${index}`);
  };

  // le toastify après validation du choix de car
  const handleValidate = () => {
    toast.success('Votre inscription est finalisée !');
    setShowValidateButton(false); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-black">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-4 mb-4 text-center">
          <h1 className="text-2xl font-bold">
            Veuillez sélectionner le type de votre véhicule pour finaliser votre inscription
          </h1>
        </div>
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={`bg-gradient-to-b from-gray-300 to-white rounded-lg overflow-hidden shadow-xl border-GreenComp ${
              selectedCarIndex === index ? 'border-8' : ''
            }`}
          >
            <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-64 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{car.brand}</h2>
              <p className="text-sm mb-2">{car.model}</p>
              <p className="text-sm">{car.type}</p>
              <p className="text-sm">Type de prise : {car.socket_type} 🔌 </p>
              <button
                type="button"
                onClick={() => handleSelectCar(index)}
                className="bg-GreenComp hover:bg-yellow-600 text-white font-sm py-2 px-4 rounded mt-2 w-full block"
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
            type="submit"
            onClick={handleValidate}
            className="select-none rounded-lg bg-yellow-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-amber-600  animate-slide-up"
          >
          Valider
              </button>
        </div>
      )}
    </div>
  );
}
export default RegisterCarPage;