import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media Section */}
        <div>
          <h3 className="text-white font-bold mb-2">Social Media</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* Get Help Section */}
        <div>
          <h3 className="text-white font-bold mb-2">Get Help</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact the Alumni Service Desk
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Claim Your HarvardKey
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Get Help Searching the Alumni Directory
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                View All Contacts
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                View All Help Pages
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                View the HAA Staff Directory
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
                Go to Harvard.edu
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
        © 2024 The President and Fellows of Harvard College
      </div>
    </footer>
  );
}

export default Footer;