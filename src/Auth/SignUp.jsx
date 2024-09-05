import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios

const SignUp = () => {
  const [formData, setFormData] = useState({
    collegeName: "", // Correctly initialize collegeName
    programme: "",
    fullName: "",
    yearOfPassing: "",
    enrollmentNumber: "",
    phone: "",
    email: "",
    password: "", // New password field
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to the backend API
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("User registered successfully!");
      console.log(response.data.data);
      localStorage.setItem("token", response.data.data.token);
      navigate("/"); // Redirect to home page
    } catch (error) {
      // Handle errors appropriately
      alert(error.response?.data?.message || "Registration failed");
      console.error(error);
    }
  };

  // Define years, programs, and colleges here
  const years = [];
  for (let year = 1990; year <= new Date().getFullYear(); year++) {
    years.push(year);
  }

  const programs = [
    // Core Engineering Branches
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
    "Computer Science Engineering",
    "Chemical Engineering",
    // Specialized Engineering Branches
    "Aeronautical Engineering",
    "Automobile Engineering",
    "Biotechnology Engineering",
    "Agricultural Engineering",
    "Food Technology Engineering",
    "Petroleum Engineering",
    "Mining Engineering",
    "Textile Engineering",
    "Marine Engineering",
    "Environmental Engineering",
    "Instrumentation and Control Engineering",
    "Industrial Engineering",
    "Production Engineering",
    // Emerging and Interdisciplinary Branches
    "Artificial Intelligence and Data Science",
    "Cyber Security",
    "Robotics Engineering",
    "Mechatronics Engineering",
    "Biomedical Engineering",
    "Nanotechnology Engineering",
    "Materials Science Engineering",
    // IT and Computer-Related Branches
    "Information Technology",
    "Software Engineering",
    "Computer Engineering",
    "Cloud Computing and Virtualization",
    // Infrastructure and Design Related Branches
    "Architecture Engineering",
    "Structural Engineering",
    "Construction Engineering",
    "Transportation Engineering",
    // Energy and Power Engineering
    "Power Engineering",
    "Renewable Energy Engineering",
    "Nuclear Engineering",
    // Management and Economics Related Branches
    "Engineering Management",
    "Industrial and Production Engineering",
    "Operations Research",
    // Miscellaneous Branches
    "Metallurgical Engineering",
    "Ceramic Engineering",
    "Textile Chemistry",
    "Printing Technology",
  ];

  const colleges = [
    "Kalyani Government Engineering College",
    "Government College of Engineering and Ceramic Technology",
    "Ramkrishna Mahato Government Engineering College",
    "Government College of Engineering, Jalpaiguri",
    "Government College of Engineering, Malda",
    "Heritage Institute of Technology",
    "Institute of Engineering and Management (IEM)",
    "JIS College of Engineering",
    "Techno India University",
    "Narula Institute of Technology",
    "Academy of Technology",
    "Netaji Subhash Engineering College",
    "Haldia Institute of Technology",
    "Siliguri Institute of Technology",
    "Pailan College of Management and Technology",
    "Techno India Hooghly",
    "Durgapur Institute of Advanced Technology and Management",
    "Management Institute of Durgapur",
    "Mallabhumi Institute of Technology",
    "ILEAD Institute of Leadership Entrepreneurship and Development",
    "Elite College Engineering",
    "Dr. B. C. Roy College of Pharmacy and Allied Health Sciences",
    "BCDA College of Pharmacy and Technology",
    "NSHM College of Management and Technology",
  ];

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center mt-20">
      <div className="max-w-2xl mx-auto my-10 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Alumni Registration Form
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register below if you're a new user.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="collegeName"
            >
              College / Institute
            </label>
            <select
              id="collegeName"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.collegeName}
              onChange={handleChange}
            >
              <option>Select College</option>
              {colleges.map((college) => (
                <option key={college} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="programme"
            >
              Select Programme
            </label>
            <select
              id="programme"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.programme}
              onChange={handleChange}
            >
              <option>Select Programme</option>
              {programs.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullName"
            >
              Name
            </label>
            <input
              id="fullName"
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="yearOfPassing"
            >
              Year of Passing
            </label>
            <select
              id="yearOfPassing"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.yearOfPassing}
              onChange={handleChange}
            >
              <option>Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="enrollmentNumber"
            >
              Enrollment Number
            </label>
            <input
              id="enrollmentNumber"
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your enrollment number"
              value={formData.enrollmentNumber}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Enter Mobile
            </label>
            <input
              id="phone"
              type="number"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="9999999999"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>

          <p className="text-center text-gray-500 mt-4">
            <a href="/" className="text-blue-500 hover:underline">
              Back to Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
