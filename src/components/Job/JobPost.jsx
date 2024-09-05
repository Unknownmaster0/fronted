import React, { useState } from "react";
import axios from "axios";
import { useJobs } from "../../contexts/JobContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function JobPost() {
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState({
    jobTitle: "", // Updated to match backend
    company: "",
    location: "",
    jobType: "", // Updated to match backend
    description: "",
    requirements: "",
    salary: "",
    applyLink: "",
  });

    // Simulate user authentication (e.g., using a token or user context)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token"); // Assuming token-based authentication
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate("/signin"); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/job/createJob",
        jobDetails,
        {
          headers: {
            Authorization: `${token}`,
          },
          withCredentials: true,
        }
      );

      console.log("Job posted:", response.data.data);

      addJob(jobDetails);

      setJobDetails({
        jobTitle: "",
        company: "",
        location: "",
        jobType: "",
        description: "",
        requirements: "",
        salary: "",
        applyLink: "",
      });

      navigate("/joblist");
      alert("job is posted successfully 😁😁😁😁");
    } catch (error) {
      console.error("Error posting job:", error.response || error.message);
      alert("Failed to post job. Please try again.");
    }
  };


  if (!isAuthenticated) {
    return <div>Loading...</div>; // Show a loading state until authentication is checked
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Create Job Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobTitle"
            name="jobTitle" // Updated to match backend
            type="text"
            placeholder="Enter job title"
            value={jobDetails.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        {/* Other fields remain the same, just ensure the name attributes match the backend */}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            name="company"
            type="text"
            placeholder="Enter company name"
            value={jobDetails.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            name="location"
            type="text"
            placeholder="Enter job location"
            value={jobDetails.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobType"
          >
            Job Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobType"
            name="jobType" // Updated to match backend
            type="text"
            placeholder="Full-time, Part-time, etc."
            value={jobDetails.jobType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter job description"
            value={jobDetails.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="requirements"
          >
            Requirements
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="requirements"
            name="requirements"
            placeholder="Enter job requirements"
            value={jobDetails.requirements}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="salary"
          >
            Salary
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="salary"
            name="salary"
            type="text"
            placeholder="Enter salary range"
            value={jobDetails.salary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="applyLink"
          >
            Apply Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="applyLink"
            name="applyLink"
            type="text"
            placeholder="Enter apply link"
            value={jobDetails.applyLink}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobPost;
