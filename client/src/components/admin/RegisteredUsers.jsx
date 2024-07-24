import { useState, useEffect } from "react";
import SideBar from "./SideBar";

import NavbarDesktop from "../NavbarDesktop";

function RegisteredUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <NavbarDesktop />
      <div className="pl-60 pr-4 pt-4 min-h-screen flex flex-col items-center bg-black">
        <SideBar />
        <table className="table-auto w-full text-white bg-GreenComp mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Prénom</th>
              <th className="border px-4 py-2">Nom</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Rôle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id} className="bg-gray-100 text-black">
                <td className="border px-4 py-2">{user.first_name}</td>
                <td className="border px-4 py-2">{user.last_name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RegisteredUsers;
