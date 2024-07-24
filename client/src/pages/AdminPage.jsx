import { useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "../components/admin/SideBar";
import AnimatedNumber from "../components/admin/AnimatedNumber";
import LoadingComponent from "../components/map/LoadingComponent";
import NavbarDesktop from "../components/NavbarDesktop";

const adminData = [
  { id: 1, title: "Utilisateurs connectés", value: 26 },
  { id: 2, title: "Bornes totales", value: 18143 },
  { id: 3, title: "Véhicules enregistrés", value: 20 },
  { id: 4, title: "Utilisateurs totaux", value: 146 },
  { id: 5, title: "Bornes réservées", value: 59 },
  { id: 6, title: "Nouvelles Inscriptions", value: 12 },
];

function AdminPage() {
  const { currentUser } = useOutletContext();
  const { loading, setLoading } = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (currentUser?.role !== "Admin") {
        navigate("/map");
      }
    }, 100);

    return () => clearTimeout(timer);
  });

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <NavbarDesktop />
      <div className="bg-bg-geocode h-screen flex text-white">
        <SideBar />
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
    </>
  );
}

export default AdminPage;
