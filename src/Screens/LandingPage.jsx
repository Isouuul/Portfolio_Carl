import React from "react";
import Button from "../components/Button";
import "./LandingPage.css";
import profileImg from "../../src/assets/profile.png"; 

function LandingPage() {
  return (
    <div className="portfolio-wrapper">
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      
      <section className="hero-section" id="home">
        <div className="hero-container">
          {/* Left Side: Text Content */}
          <div className="hero-content">
            <span className="hero-intro">I'M</span>
            <h1 className="hero-name">
              Carl Bryan <span className="surname">Sacudit</span>
            </h1>
            <p className="hero-role">Entry-level Full-Stack Developer</p>
            
            <div className="hero-actions">
              <Button text="Contact Me" className="btn-outline-gold" />
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="hero-image-container">
            <img src={profileImg} alt="Carl Bryan" className="hero-photo" />
          </div>


        </div>
      </section>
    </div>
  );
}

export default LandingPage;