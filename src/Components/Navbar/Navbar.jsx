import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/csiLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visiblityStatus, setvisiblityStatus] = useState(false);
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

  const toggleMenu = () => {
    setvisiblityStatus(!visiblityStatus);
  };
  // console.log(visiblityStatus);
  // console.log(isScrolled);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Brand Logo" className="logo-img" />
          <span className="logo-text">UPES-CSI</span>
        </div>
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

        {/* this is for mobile interface as we need a hamburger icon*/}
        {/* creased 2 divs [1 hamburger, 1 links] */}

        <button onClick={toggleMenu} className="menu-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="hamburger-icon"
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

      <div className={`mobile-menu ${visiblityStatus ? "open" : ""}`}>
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
    </nav>
  );
};

export default Navbar;
