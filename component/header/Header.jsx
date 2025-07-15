import React, { useState } from "react";
import "./header.css";
import profileimg from "../../assets/Profilepic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");
  
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const nItems = [{ name: "Contact", id: "contactid" }];

  return (
    <div id="head" className="head">
      <img src={profileimg} alt="Profile" />
      <h1>
        I'm Himsara, Full-stack developer From <br></br>Sri Lanka.
      </h1>
      <p>
        I'm an undergraduate student at SLIIT, specializing in Information
        Technology. Passionate about web development.
      </p>

      <div className="buttons-container">
           <AnchorLink
                    href="#contactid"
                    offset="50"
                    className="anchor-link connect-button2 mobile-connect"
                    onClick={() => handleItemClick("Contact")}
                  >
                    Connect With Me
                  </AnchorLink>
        <AnchorLink
          href="#contactid"
          offset="50"
          className="anchor-link connect-button2 desktop-connect"
          onClick={() => handleItemClick("Contact")}
        >
          Connect With Me
        </AnchorLink>
        <button className="resume-button">My resume</button>
      </div>
    </div>
  );
};

export default Header;