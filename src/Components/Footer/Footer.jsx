import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-blue-400">UPES-CSI</h1>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 mt-4 text-gray-300">
            <li className="hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/signup">Registration</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/problem">Problem Statement</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/timeline">Timeline</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com/upescsi?t=1fOIJJfJp1H_R1hsg9bmbQ&s=08"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://m.facebook.com/upescsi"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/upescsi?igshid=MzRlODBiNWFlZA=="
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/computer-society-of-india-upes/"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://youtube.com/@UPESCSIOfficial?si=k3t6NWMvkzVyTQF7"
              className="p-3 bg-gray-800 rounded-full hover:bg-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>{" "}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:upescsi@gmail.com"
                className="text-blue-400 hover:text-blue-600"
              >
                upescsi@gmail.com
              </a>
            </li>
            <li>
              Address:{" "}
              <a
                href="https://www.google.com/maps?q=UPES+BIDHOLI,+PREM+NAGAR,+DEHRADUN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                UPES BIDHOLI, PREM NAGAR, DEHRADUN
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>Copyright 2025 &copy; UPES-CSI All Rights Reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a
            href="https://merchant.razorpay.com/policy/OAG5Tj7G48iTNQ/terms"
            className="hover:text-white"
          >
            Terms and Conditions
          </a>
          <a href="https://merchant.razorpay.com/policy/OAG5Tj7G48iTNQ/refund" className="hover:text-white">
          Refund Policy
          </a>
          <a href="https://merchant.razorpay.com/policy/OAG5Tj7G48iTNQ/shipping" className="hover:text-white">
          Shipping Policy
          </a>
          <a href="https://merchant.razorpay.com/policy/OAG5Tj7G48iTNQ/privacy" className="hover:text-white">
          Privacy Policy
          </a>
          <Link to="/contact" className="hover:text-white">
          Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
