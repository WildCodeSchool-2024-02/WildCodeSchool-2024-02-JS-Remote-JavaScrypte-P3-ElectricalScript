import { useState, useEffect } from 'react';
import SideBar from './SideBar';

function Users() {
  const [users, setusers] = useState([]);


  const fetchUsers = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then(response => response.json())
      .then(data => setusers(data))
      .catch(error => console.error('Error fetching users :', error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="pl-80 pr-4 pt-4 min-h-screen flex items-center justify-center bg-black text-black">
      <SideBar />
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <div key={user.user_id} className="bg-gradient-to-b from-gray-300 to-white rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{user.first_name}</h2>
              <p className="text-sm mb-2">{user.last_name}</p>
              <p className="text-sm"> {user.email} </p>
              <p className="text-sm"> {user.role_id} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;