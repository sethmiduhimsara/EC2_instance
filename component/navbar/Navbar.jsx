import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { name: "Home", id: "head" },
    { name: "About Me", id: "aboutid" },
    { name: "Services", id: "servicesid" },
    // { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contactid" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">H I M S A R A</span>
          {/* <div className="logo-dot"></div> */}
        </div>

        {/* Navigation Items */}
        <div className="navbar-menu">
          {navItems.map(({ name, id }) => (
            <AnchorLink
              key={name}
              href={`#${id}`}
              offset="70"
              className={`anchor-link navbar-item ${
                activeItem === name ? "active" : ""
              }`}
              onClick={() => setActiveItem(name)}
            >
              {name}
              {activeItem === name && <div className="active-indicator"></div>}
            </AnchorLink>
          ))}
        </div>

      
        {/* Connect Button */}
        <AnchorLink
          href="#contactid"
          offset="50"
          className="anchor-link connect-button"
          onClick={() => setActiveItem("Contact")}
        >
          Connect With Me
        </AnchorLink>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button">
          <svg
            className="hamburger-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
