import Navbar from "../components/Navbar";
import admin from "../assets/images/admin.png";
import logo from "../assets/images/Logo.png";
import AnimatedNumber from "../components/AnimatedNumber";

const adminData = [
  { id: 1, title: "Utilisateur connectés", value: 26 },
  { id: 2, title: "Bornes total", value: 18143 },
  { id: 3, title: "Véhicules enregistrés", value: 20 },
  { id: 4, title: "Utilisateurs total", value: 146 },
  { id: 5, title: "Bornes réservées", value: 59 },
  { id: 6, title: "Nouvelles Inscriptions", value: 12 },
];

function AdminPage() {
  return (
    <div className="bg-black min-h-screen flex text-white">
      <Navbar />
      <div className="mt-20 mb-40 bg-GreenComp p-8 rounded-tr-large rounded-br-srounded">
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="bg-teal-800 p-2 rounded-full">
              <img
                src={admin}
                alt="Admin Avatar"
                className="bg-white p-2 rounded-full"
                style={{ width: "90px", height: "90px" }}
              />
            </div>
          </div>
          {["Voitures", "Utilisateurs", "Informations", "Stations"].map(
            (item) => (
              <div key={item} className="flex items-center space-x-2">
                <span>{item}</span>
              </div>
            )
          )}
          <img
            src={logo}
            alt="logo geocode"
            className="rounded-full w-20 h-20"
          />
        </div>
      </div>
      <div className="flex-grow bg-black flex justify-center items-center pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adminData.map((card) => (
            <div
              key={card.id}
              className="bg-teal-800 p-6 rounded-lg text-center flex flex-col justify-center items-center"
              style={{ width: "200px", height: "200px" }}
            >
              <span className="text-lg font-bold">{card.title}</span>
              <p className="text-2xl mt-2">
                <AnimatedNumber value={card.value} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
