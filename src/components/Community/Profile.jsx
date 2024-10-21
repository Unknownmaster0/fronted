import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/users/${id}`, // Fetch user by ID
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleMessageClick = () => {
    navigate(`/message/${id}`); // Navigate to the messaging interface
  };

  return (
    <div className="mt-20 container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            alt={`${user.fullName}'s profile`}
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 mr-6" />
        )}
        <div>
          <h1 className="text-3xl font-bold">{user.fullName}</h1>
          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={handleMessageClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
          >
            Message
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div>
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <p>
            <strong>Gender:</strong> {user.gender || "N/A"}
          </p>
          <p>
            <strong>Date of Birth:</strong> {user.dob || "N/A"}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {user.address || "N/A"}
          </p>
        </div>
        {/* Academic Information */}
        <div>
          <h2 className="text-xl font-semibold">Academic Information</h2>
          <p>
            <strong>Enrollment No:</strong> {user.enrollmentNumber || "N/A"}
          </p>
          <p>
            <strong>Year of Passing:</strong> {user.yearOfPassing || "N/A"}
          </p>
          <p>
            <strong>Programme:</strong> {user.programme || "N/A"}
          </p>
          <p>
            <strong>Branch:</strong> {user.branch || "N/A"}
          </p>
          <p>
            <strong>College:</strong> {user.collegeName || "N/A"}
          </p>
          <p>
            <strong>CGPA:</strong> {user.cgpa || "N/A"}
          </p>
        </div>
        {/* Professional Information */}
        <div>
          <h2 className="text-xl font-semibold">Professional Information</h2>
          <p>
            <strong>Current Job Title:</strong> {user.currentJobTitle || "N/A"}
          </p>
          <p>
            <strong>Company Name:</strong> {user.companyName || "N/A"}
          </p>
          <p>
            <strong>Experience:</strong> {user.experience || "N/A"}
          </p>
        </div>
        {/* Additional Information */}
        <div>
          <h2 className="text-xl font-semibold">Additional Information</h2>
          <p>
            <strong>LinkedIn Profile:</strong>{" "}
            {user.linkedinProfile ? (
              <a
                href={user.linkedinProfile}
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            ) : (
              "N/A"
            )}
          </p>
          <p>
            <strong>Skills:</strong> {user.skills || "N/A"}
          </p>
          <p>
            <strong>Hobbies:</strong> {user.hobbies || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
