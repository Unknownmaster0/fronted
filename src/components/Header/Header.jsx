import React from "react";
import { Link, useNavigate } from "react-router-dom"; // If you're using React Router for navigation

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Navigate to home
    window.location.reload(); // Refresh the page
  };

  return (
    <header className="fixed top-0 w-full bg-orange-700 ">
      {/* Top Section: Sign In and Sign Up */}
      <div className="flex justify-end items-center h-8 px-4">
        <Link to="/signin" className="text-white text-sm hover:underline mr-4">
          Sign In
        </Link>
        <Link to="/signup" className="text-white text-sm hover:underline">
          Sign Up
        </Link>
      </div>

      {/* Bottom Section: Navigation and Logo */}
      <div className="bg-orange-600 h-12">
        <div className="flex justify-between items-center h-full px-4">
          <div className="flex items-center space-x-4">
            <img src="/heritagelogo.jpeg" alt="Harvard Logo" className="h-8" />
            {/* Make the college name clickable */}
            <span
              onClick={handleHomeClick}
              className="cursor-pointer text-white text-sm font-bold"
            >
              Maakut Alumni
            </span>
          </div>
          <nav className="flex space-x-6 text-white text-sm">
            <Link to="/community" className="hover:underline">
              Community
            </Link>
            <Link to="/giving" className="hover:underline">
              Giving
            </Link>
            <Link to="/programs-events" className="hover:underline">
              Programs & Events
            </Link>
            <Link to="/createStory" className="hover:underline">
              Create story
            </Link>
            <Link to="/event" className="hover:underline">
              Events
            </Link>
            <Link to="/stories" className="hover:underline">
              Stories
            </Link>
            <a href="#" className="hover:underline">
              <i className="fas fa-search"></i>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
