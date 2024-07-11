import { useEffect, useState } from 'react';
import SideBar from './SideBar';

function Cars() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    socket_type: ''
  });

  const fetchCars = () => {
    fetch('http://localhost:3310/api/car')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars data:', error));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCar({
      ...newCar,
      [name]: value
    });
  };

  const handleAddCar = () => {
    console.info('Adding car:', newCar);
  
    fetch('http://localhost:3310/api/car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCar)
    })
      .then(response => {
        if (response.ok) {
          console.info('Car added successfully');
          setNewCar({
            brand: '',
            model: '',
            socket_type: ''
          });
          fetchCars(); 
          return response.json(); 
        }
        return response.json().then(err => {
          console.error('Failed to add car:', err);
          throw new Error('Failed to add car');
        });
      })
      .catch(error => {
        console.error('Error adding car:', error);
      });
  };
  

  return (
    <div className="pl-80 pr-4 pt-4 min-h-screen flex items-center justify-center bg-black text-black">
      <SideBar />
      <div className="grid grid-cols-3 gap-5">
        {/* Formulaire pour ajouter une nouvelle voiture ( sans image just infos de) */}
        <div className="bg-gradient-to-b from-gray-300 to-white rounded-lg">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Ajouter une voiturr</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAddCar();
            }}>
              <div className="mb-4">
                <label htmlFor="brand" className=" text-sm font-medium text-gray-700">Marque : </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={newCar.brand}
                  onChange={handleInputChange}
                  className="mt-1 p-2  w-full shadow-sm sm:text-sm rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="model" className=" text-sm font-medium text-gray-700">Modèle : </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={newCar.model}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full shadow-sm sm:text-sm rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="socket_type" className=" text-sm font-medium text-gray-700">Type de prise : </label>
                <input
                  type="text"
                  id="socket_type"
                  name="socket_type"
                  value={newCar.socket_type}
                  onChange={handleInputChange}
                  className="mt-1 p-2  w-full shadow-sm sm:text-sm rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-GreenComp text-white rounded-lg shadow-md hover:bg-teal-800 "
              >
                Ajouter
              </button>
            </form>
          </div>
        </div>

        {/* la liste des voitures initiales qu'on a sur register page */}
        {cars.map((car) => (
          <div
            key={car.car_type_id}
            className="bg-gradient-to-b from-gray-300 to-white rounded-lg"
          >
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-64 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{car.brand}</h2>
              <p className="text-sm mb-2">{car.model}</p>
              <p className="text-sm">Type de prise : {car.socket_type} 🔌</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;



