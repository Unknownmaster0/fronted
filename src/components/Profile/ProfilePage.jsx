import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/viewProfile",
          {
            headers: {
              Authorization: `${token}`, // Add token to headers
            },
          }
        );
        console.log(response.data.data);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleEditProfile = () => {
    navigate("/updateprofile"); // Navigate to the update profile page
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center space-x-6">
          <img
            src={profileData.profilePicture || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{profileData.fullName || 'N/A'}</h1>
            <p className="text-gray-600">{profileData.currentJobTitle  || 'N/A'}</p>
            <p className="text-gray-500">{profileData.companyName || 'N/A'}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>Gender:</strong> {profileData.gender || "Not specified"}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Date of Birth:</strong> {profileData.dob || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Email:</strong> {profileData.email || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Phone:</strong> {profileData.phone || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Address:</strong>{" "}
                {profileData.address || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Academic Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>Enrollment No:</strong> {profileData.enrollmentNo || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Year of Passing:</strong> {profileData.yearOfPassing || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Programme:</strong> {profileData.programme || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Branch:</strong> {profileData.branch || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>College/University:</strong> {profileData.college || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>CGPA/Marks:</strong>{" "}
                {profileData.cgpa || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Professional Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>Current Job Title:</strong>{" "}
                {profileData.currentJobTitle || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Company Name:</strong> {profileData.companyName || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Years of Experience:</strong> {profileData.experience}{" "}
                years
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>LinkedIn Profile:</strong>{" "}
                <a
                  href={profileData.linkedinProfile || 'N/A'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Additional Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>Skills:</strong> {profileData.skills}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Hobbies and Interests:</strong> {profileData.hobbies}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Engagement with Alma Mater
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>Mentorship Interest:</strong>{" "}
                {profileData.mentorshipInterest ? "Yes" : "No"}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Events Participation:</strong>{" "}
                {profileData.eventsParticipation ? "Active" : "Not Active"}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Donations/Contributions:</strong>{" "}
                {profileData.donations || "No donations made"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            className="bg-blue-500 text-white p-3 rounded"
            onClick={handleEditProfile} // Trigger navigation on click
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
