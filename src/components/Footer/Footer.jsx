import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media Section */}
        <div>
          <h3 className="text-white font-bold mb-2">Social Media</h3>
          <ul>
            <li className="mb-2">
              <a
                href="https://www.youtube.com/results?search_query=sraddha+khapara"
                className="hover:underline"
              >
                <FontAwesomeIcon icon={faYoutube} className="mr-2" /> YouTube
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.facebook.com/groups/185354019497946"
                className="hover:underline"
              >
                <FontAwesomeIcon icon={faFacebook} className="mr-2" /> Facebook
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/company/makaut-wb/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.instagram.com/makaut_wb/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />{" "}
                Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* About This Site Section */}
        <div>
          <h3 className="text-white font-bold mb-2">About This Site</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Go to Makaut.edu
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Admin Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4 text-xs">
        © 2024 The President and Fellows of Heritage Institute Of Technology
      </div>
    </footer>
  );
}

export default Footer;
