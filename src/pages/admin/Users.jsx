import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/api/users/all")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user._id}
            className="flex items-center justify-between p-4 bg-white rounded-md shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.photo || "https://via.placeholder.com/100"}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{user.name || "No Name"}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
              {user.role || "user"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
