import React from 'react';
import "./header.css";
import profileimg from '../../assets/Profilepic.png';

const Header = () => {
  return (
    <div id='head' className='head'>
      <img src={profileimg} alt="Profile" />
      <h1>I'm Himsara, Full-stack developer From  <br></br>Sri Lanka.</h1>
      <p>I'm an undergraduate student at SLIIT, specializing in Information Technology. Passionate about web development.</p>
      
      <div className="buttons-container">
        <button className="connect-button2">Connect with me</button>
        <button className="resume-button">My resume</button>
      </div>
    </div>
  );
}

export default Header;