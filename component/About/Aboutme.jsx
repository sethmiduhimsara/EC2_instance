import React from "react";
import "./Aboutme.css";
import profileimg2 from "../../assets/Profile2.png";

const Aboutme = () => {
  const skills = [
  { name: "React JS", level: "Intermediate", icon: "⚛️" },
  { name: "JavaScript", level: "Intermediate", icon: "🟨" },
  { name: "Next JS", level: "Intermediate", icon: "🚀" },
  { name: "Node JS", level: "Intermediate", icon: "🟢" },
  { name: "MongoDB", level: "Intermediate", icon: "🍃" },
  { name: "CI / CD", level: "Intermediate", icon: "🔁" }
];


  return (
    <div id="aboutid" className="about">
      <div className="about-header">
        <h1>
          <span className="about-title-highlight">
            About Me
            <div className="about-title-underline"></div>
          </span>
        </h1>
        <p className="services-subtitle">
          Transforming ideas into digital experiences with cutting-edge design
          and development
        </p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={profileimg2} alt="profile2" />
        </div>

        <div className="about-text">
          <div className="about-description">
            <p>
              I am a dedicated Full-Stack Developer and undergraduate student at
              SLIIT, specializing in Information Technology. I have hands-on
              experience in both frontend and backend development, mobile app
              creation, and building complete software solutions.
            </p>

            <p>
              My passion for software development is reflected in my continuous
              learning,project work,and commitment to delivering high-quality,
              scalable, and user-focused applications.
            </p>
          </div>

          <div className="skills-section">
            {/* <h3>My Skills</h3> */}
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
