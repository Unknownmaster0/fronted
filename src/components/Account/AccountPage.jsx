import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  // Simulate user authentication (e.g., using a token or user context)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token"); // Assuming token-based authentication
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate("/signin"); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  useEffect(() => {
    // Fetch user data from backend
    axios
      .get("http://localhost:8000/api/v1/user/")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");

    // Navigate to home page after logout
    navigate("/");
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>; // Show a loading state until authentication is checked
  }

  return (
    <div className="mt-20 min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2">
        {/* Profile Section */}
        <div className="p-8 flex items-center justify-center">
          {/* Placeholder for Profile Image */}
          <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-indigo-500 flex items-center justify-center">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-600 text-lg">No Photo</span>
            )}
          </div>
          <div className="ml-6 text-center">
            {/* Placeholder for User Info */}
            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.name || "Name Not Available"}
            </h2>
            <p className="text-gray-600">
              Email: {user?.email || "Email Not Available"}
            </p>
            <p className="text-gray-600">
              Gender: {user?.gender || "Gender Not Available"}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 gap-4 p-8 border-t border-gray-200">
          <Button
            title="Job Portal"
            color="rgb(76, 175, 80)"
            path="/job-portal"
          />
          <Button
            title="Create Story"
            color="rgb(76, 175, 80)"
            path="/create-story"
          />
          <Button
            title="Create Event"
            color="rgb(76, 175, 80)"
            path="/create-event"
          />
          <Button title="Donation" color="rgb(76, 175, 80)" path="/donation" />
          <Button
            title="Contact to Principal"
            color="rgb(76, 175, 80)"
            path="/contact"
          />
          <Button
            title="View Your Jobs"
            color="rgb(76, 175, 80)"
            path="/userjob"
          />
          <Button
            title="View Your Events"
            color="rgb(76, 175, 80)"
            path="/view-events"
          />
          <Button
            title="View Your Stories"
            color="rgb(76, 175, 80)"
            path="/view-stories"
          />
          <Button
            title="View Profile"
            color="rgb(76, 175, 80)"
            path="/profile"
          />
          <Button
            title="Logout"
            color="rgb(76, 175, 80)"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

const Button = ({ title, color, path, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick if passed (for example, handleLogout)
    } else if (path) {
      navigate(path); // Navigate to the path if it exists
    }
  };

  return (
    <button
      className="text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-200 shadow-md text-sm mx-auto"
      style={{ backgroundColor: color, width: "150px" }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default AccountPage;
