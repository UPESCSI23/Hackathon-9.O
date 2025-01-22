import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/csiLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faUserPlus, faQuestionCircle, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [visiblityStatus, setVisiblityStatus] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setVisiblityStatus(!visiblityStatus);
  };

  // Close the mobile menu
  const closeMenu = () => {
    setVisiblityStatus(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Brand Logo" className="logo-img" />
          <span className="logo-text">UPES-CSI</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <Link to="/">
            <b>Home</b>
          </Link>
          <Link to="/about">
            <b>About</b>
          </Link>
          <Link to="/login">
            <b>Registration</b>
          </Link>
          <Link to="/problem">
            <b>Problem Statement</b>
          </Link>
          <Link to="/timeline">
            <b>Timeline</b>
          </Link>
          <Link to="/contact">
            <b>Contact</b>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <button onClick={toggleMenu} className="menu-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`hamburger-icon ${visiblityStatus ? "open" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Sliding in from the right */}
      <div className={`mobile-menu ${visiblityStatus ? "open" : ""}`}>
        <div className="mt-11 flex flex-col justify-center items-center space-y-4">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2" />
            <b>Home</b>
          </Link>
          <Link to="/about" className="flex items-center" onClick={closeMenu}>
            <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5 mr-2" />
            <b>About</b>
          </Link>
          <Link to="/login" className="flex items-center" onClick={closeMenu}>
            <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5 mr-2" />
            <b>Registration</b>
          </Link>
          <Link to="/problem" className="flex items-center" onClick={closeMenu}>
            <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5 mr-2" />
            <b>Problem Statement</b>
          </Link>
          <Link to="/timeline" className="flex items-center" onClick={closeMenu}>
            <FontAwesomeIcon icon={faClock} className="w-5 h-5 mr-2" />
            <b>Timeline</b>
          </Link>
          <Link to="/contact" className="flex items-center" onClick={closeMenu}>
            <FontAwesomeIcon icon={faPhoneAlt} className="w-5 h-5 mr-2" />
            <b>Contact</b>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
