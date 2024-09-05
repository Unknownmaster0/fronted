import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation

function Header() {
  return (
    <header className="fixed top-0 w-full bg-red-800 ">
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
      <div className="bg-red-700 h-12">
        <div className="flex justify-between items-center h-full px-4">
          <div className="flex items-center space-x-4">
            <img src="/heritagelogo.jpeg" alt="Harvard Logo" className="h-8" />
            <span className="text-white text-sm font-bold">HARVARD ALUMNI</span>
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
            <Link to="/storyform" className="hover:underline">
              Stroy Form
            </Link>
            <Link to="/events" className="hover:underline">
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
