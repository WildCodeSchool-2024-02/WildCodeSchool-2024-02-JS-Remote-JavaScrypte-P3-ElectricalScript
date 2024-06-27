import  { useEffect, useState } from 'react';

function RegisterCarPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3310/api/car')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars data:', error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-4 mb-4 text-center">
          <h1 className="text-2xl font-bold">
            Veuillez sélectionner le type de votre véhicule pour finaliser votre inscription
          </h1>
        </div>
        {cars.map(car => (
          <div key={car.id} className="bg-GreenComp rounded-lg overflow-hidden shadow-xl">
            <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-64 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{car.brand}</h2>
              <p className="text-sm mb-2">{car.model}</p>
              <p className="text-sm">{car.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisterCarPage;