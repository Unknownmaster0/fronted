import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewUserJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  // Fetch jobs from the backend API when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {


        // Make the GET request with the Authorization header
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/job/userJob",
          {
            headers: {
              Authorization: `${token}`, // Include the token in the Authorization header
            },
          }
        );

        console.log(response.data.message);

        setJobs(response.data.data); // Assuming response.data contains the array of job objects
        setLoading(false);
        //alert(response.data.message);
      } catch (err) {
        setError("Failed to fetch jobs");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  
  if (!isAuthenticated) {
    return <div>Loading...</div>; // Show a loading state until authentication is checked
  }

  if (loading) {
    return <p className="text-center">Loading jobs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Job Listings</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No jobs available. Please add a job.</p>
        ) : (
          <ul>
            {jobs.map((job, index) => (
              <li key={index} className="mb-4 p-4 border rounded shadow-sm">
                <h3 className="text-xl font-bold mb-2">{job.jobTitle}</h3>
                <p className="text-gray-700">Company: {job.company}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Type: {job.jobType}</p>
                <p className="text-gray-600">Salary: {job.salary}</p>
                <p className="text-gray-600 mt-2">
                  Description: {job.description}
                </p>
                <p className="text-gray-600 mt-2">
                  Requirements: {job.requirements}
                </p>
                <p className="text-blue-500 mt-2">
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Here
                  </a>
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Posted on: {new Date(job.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ViewUserJob;
