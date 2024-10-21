import React, { useState } from "react";
import axios from "axios";

const UpdateProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    profilePicture: null,
    gender: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    enrollmentNo: "",
    yearOfPassing: "",
    programme: "",
    branch: "",
    college: "",
    cgpa: "",
    currentJobTitle: "",
    companyName: "",
    experience: "",
    linkedinProfile: "",
    skills: "",
    hobbies: "",
    otpEmail: "",
    otpPhone: "",
    isEmailVerified: false,
    isPhoneVerified: false,
  });

  // const [otpSentToEmail, setOtpSentToEmail] = useState(false);
  // const [otpSentToPhone, setOtpSentToPhone] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  // const sendOtpToEmail = async () => {
  //   try {
  //     await axios.post("/api/send-email-otp", { email: formData.email });
  //     setOtpSentToEmail(true);
  //   } catch (error) {
  //     console.error("Error sending OTP to email:", error);
  //   }
  // };

  // const verifyEmailOtp = async () => {
  //   try {
  //     const response = await axios.post("/api/verify-email-otp", {
  //       email: formData.email,
  //       otp: formData.otpEmail,
  //     });
  //     if (response.data.success) {
  //       setFormData({ ...formData, isEmailVerified: true });
  //     }
  //   } catch (error) {
  //     console.error("Error verifying email OTP:", error);
  //   }
  // };

  // const sendOtpToPhone = async () => {
  //   try {
  //     await axios.post("/api/send-otp-phone", { phone: formData.phone });
  //     setOtpSentToPhone(true);
  //   } catch (error) {
  //     console.error("Error sending OTP to phone:", error);
  //   }
  // };

  // const verifyPhoneOtp = async () => {
  //   try {
  //     const response = await axios.post("/api/verify-phone-otp", {
  //       phone: formData.phone,
  //       otp: formData.otpPhone,
  //     });
  //     if (response.data.success) {
  //       setFormData({ ...formData, isPhoneVerified: true });
  //     }
  //   } catch (error) {
  //     console.error("Error verifying phone OTP:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!formData.isEmailVerified || !formData.isPhoneVerified) {
    //   alert("Please verify your email and phone number.");
    //   return;
    // }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.post(
        "http://localhost:8000/api/v1/users/update",
        formDataToSend
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="mt-20 container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
          {otpSentToEmail ? (
            <div>
              <input
                type="text"
                name="otpEmail"
                value={formData.otpEmail}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className="border border-gray-300 p-2 w-full mt-2"
              />
              <button
                type="button"
                onClick={verifyEmailOtp}
                className="bg-blue-500 text-white p-2 mt-2"
              >
                Verify Email OTP
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={sendOtpToEmail}
              className="bg-blue-500 text-white p-2 mt-2"
            >
              Send OTP to Email
            </button>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
          {otpSentToPhone ? (
            <div>
              <input
                type="text"
                name="otpPhone"
                value={formData.otpPhone}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className="border border-gray-300 p-2 w-full mt-2"
              />
              <button
                type="button"
                onClick={verifyPhoneOtp}
                className="bg-blue-500 text-white p-2 mt-2"
              >
                Verify Phone OTP
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={sendOtpToPhone}
              className="bg-blue-500 text-white p-2 mt-2"
            >
              Send OTP to Phone
            </button>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Enrollment Number</label>
          <input
            type="text"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Year of Passing</label>
          <input
            type="text"
            name="yearOfPassing"
            value={formData.yearOfPassing}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Programme</label>
          <input
            type="text"
            name="programme"
            value={formData.programme}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Branch/Specialization</label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">College/University</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">CGPA/Marks (Optional)</label>
          <input
            type="text"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Current Job Title</label>
          <input
            type="text"
            name="currentJobTitle"
            value={formData.currentJobTitle}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Years of Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">LinkedIn Profile</label>
          <input
            type="text"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Hobbies and Interests</label>
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <button type="submit" className="bg-green-500 text-white p-3">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
