import React from 'react';
import './service.css'; // Import the CSS file

const Service = () => {
  const services = [
    {
      id: "01",
      title: "Web design",
      description: "Building fast, secure, and responsive websites using modern frontend and backend technologies(React, Node.js, etc).",
      gradientClass: "gradient-1",
    //   titleClass: "title-1",
      iconClass: "icon-1"
    },
    {
      id: "02", 
      title: "Mobile App Development",
      description: "Crafting visual identities, logos, and brand materials that communicate your message with impact and creativity.",
      gradientClass: "gradient-2",
    //   titleClass: "title-2",
      iconClass: "icon-2"
    },
    {
      id: "03",
      title: " Portfolio & Branding Websites",
      description: "Creating clean, personal, or business websites that reflect your brand and help you grow your online presence.",
      gradientClass: "gradient-3",
    //   titleClass: "title-3",
      iconClass: "icon-3"
    },
    {
      id: "04",
      title: " Full-Stack Solutions",
      description: "Delivering complete software systems from frontend to backend, with scalable architecture and optimized performance.",
      gradientClass: "gradient-4",
    //   titleClass: "title-4",
      iconClass: "icon-4"
    },
    {
      id: "05",
      title: "UI/UX & App Design",
      description: "Designing beautiful and intuitive interfaces that enhance user engagement and experience.",
      gradientClass: "gradient-5",
    //   titleClass: "title-5",
      iconClass: "icon-5"
    },
    {
      id: "06",
      title: "DevOps & CI/CD",
      description: "Implementing automated deployment pipelines and development workflows for faster delivery and error-free releases.",
      gradientClass: "gradient-6",
    //   titleClass: "title-6",
      iconClass: "icon-6"
    }
  ];

  return (
    <div id='servicesid' className="services-container">
      <div className="services-wrapper">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">
            My{' '}
            <span className="services-title-highlight">
              Services
              <div className="services-title-underline"></div>
            </span>
          </h2>
          <p className="services-subtitle">
            Transforming ideas into digital experiences with cutting-edge design and development
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.gradientClass}`}
            >
              <div className="service-content">
                {/* Service Header */}
                <div className="service-header">
                  <span className="service-number">
                    {service.id}
                  </span>
                  <div className={`service-icon ${service.iconClass}`}></div>
                </div>

                {/* Service Title */}
                <h3 className={`service-title ${service.titleClass}`}>
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="service-description">
                  {service.description}
                </p>

                {/* Read More Button */}
                <button className="read-more-btn">
                  <span>Read More</span>
                  <svg 
                    className="read-more-icon" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <button className="cta-button">
            <span>Let's Work Together</span>
            <svg 
              className="cta-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;