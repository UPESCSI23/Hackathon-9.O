import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-blue-400"> UPES-CSI</h1>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 mt-4 text-gray-300">
            <li className="hover:text-white">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-white">
              <a href="#Registration">Registration</a>
            </li>
            <li className="hover:text-white">
              <a href="#Problem">Problem Statement</a>
            </li> 
            <li className="hover:text-white">
              <a href="#Timeline">Timeline</a>
            </li>
            <li className="hover:text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>Email: upescsi@gmail.com</li>
              {/*<li>Phone: </li>*/}
              <li>Address: UPES BIDHOLI, PREM NAGAR, DEHRADUN</li>
            </ul>
          </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p> Copyright 2025 &copy;  UPES-CSI All Rights Reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
