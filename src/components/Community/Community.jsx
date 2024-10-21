import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Example of retrieving token from local storage

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/community",
          {
            headers: {
              Authorization: `${token}`, // Correctly format the token
            },
          }
        );
        console.log(response.data.data);
        setUsers(response.data.data); // Assuming data is inside response.data.data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]); // Add token as a dependency if it changes

  const handleEmailClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Alumni Community
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-4 px-6 text-left">Full Name</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-left">Year of Passing</th>
              <th className="py-4 px-6 text-left">Current Job</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors duration-200`}
                >
                  <td className="py-4 px-6">{user.fullName}</td>
                  <td
                    className="py-4 px-6 text-blue-500 hover:underline cursor-pointer"
                    onClick={() => handleEmailClick(user._id)}
                  >
                    {user.email}
                  </td>
                  <td className="py-4 px-6">{user.yearOfPassing}</td>
                  <td className="py-4 px-6">{user.currentJob}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Community;
