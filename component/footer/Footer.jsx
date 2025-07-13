import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <span className="footer-logo-text">
            HIMSARA<span className="footer-logo-dot"> G.W.S</span>
          </span>
          <p className="footer-description">
           I'm an undergraduate student at SLIIT, specializing in Information Technology. Passionate about web development.
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copy">© 2025. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Term of Services
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Connect with me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
