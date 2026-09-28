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
            <span className="hero-intro">Hello, I'M</span>
            <h1 className="hero-name">
              Carl Bryan <span className="surname">Sacudit</span>
            </h1>
            <p className="hero-role">Entry-level Full-Stack Developer</p>
            <p className="hero-subtext">
              I build clean, functional web experiences from front to back —
              currently looking for opportunities to grow and contribute.
            </p>

            <div className="hero-actions">
              <Button text="Contact Me" className="btn-outline-gold" />
              <a href="#projects" className="btn-ghost">
                View Work →
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Isouuul" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/carl-bryan-sacudit-9b1597404" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/_hue_forya/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="hero-image-container">
            <div className="image-ring"></div>
            <img src={profileImg} alt="Carl Bryan Sacudit" className="hero-photo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;