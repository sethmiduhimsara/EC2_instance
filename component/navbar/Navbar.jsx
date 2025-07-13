import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "head" },
    { name: "About Me", id: "aboutid" },
    { name: "Services", id: "servicesid" },
    { name: "Contact", id: "contactid" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (name) => {
    setActiveItem(name);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">H I M S A R A</span>
        </div>

        {/* Desktop Navigation Items */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map(({ name, id }) => (
            <AnchorLink
              key={name}
              href={`#${id}`}
              offset="70"
              className={`anchor-link navbar-item ${
                activeItem === name ? "active" : ""
              }`}
              onClick={() => handleItemClick(name)}
            >
              {name}
              {activeItem === name && <div className="active-indicator"></div>}
            </AnchorLink>
          ))}
          
          {/* Mobile Connect Button (inside mobile menu) */}
          <AnchorLink
            href="#contactid"
            offset="50"
            className="anchor-link connect-button mobile-connect"
            onClick={() => handleItemClick("Contact")}
          >
            Connect With Me
          </AnchorLink>
        </div>

        {/* Desktop Connect Button */}
        <AnchorLink
          href="#contactid"
          offset="50"
          className="anchor-link connect-button desktop-connect"
          onClick={() => handleItemClick("Contact")}
        >
          Connect With Me
        </AnchorLink>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;