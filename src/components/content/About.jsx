import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile-picture.jpg';

const About = () => {
  return (
    <div className="about-wrapper">

      {/* Profile Header */}
      <header className="about-profile-header">
        <div className="profile-picture-wrapper">
          {/* Spinning arc with a gold diamond at its head */}
          <div className="profile-pulse-ring" aria-hidden="true"></div>

          <img
            src={profilePicture}
            alt="Carl Bryan"
            className="profile-picture"
          />
        </div>

        <h1 className="profile-name">CARL BRYAN T. SACUDIT</h1>
        <p className="profile-role">
          Entry-Level Full-Stack Developer | BSIT Graduate
        </p>
      </header>

      {/* About Content */}
      <div className="about-main">

        <section className="about-section-block" aria-labelledby="about-me-title">
          <div className="section-header">
            <h2 id="about-me-title" className="section-title">ABOUT ME</h2>
            <span className="section-rule" aria-hidden="true"></span>
          </div>

          <p className="section-text">
            I'm a <strong>Entry-Level Full-Stack Developer</strong> and{' '}
            <strong>BSIT Graduate</strong> from{' '}
            <strong>STI West Negros University</strong>. I bridge the gap
            between user needs and technical implementation by building
            accessible, pixel-perfect user interfaces that blend art with
            code, rooted in clean architecture and performance optimization.
          </p>
        </section>

        <section
          className="about-section-block beyond-coding"
          aria-labelledby="beyond-coding-title"
        >
          <div className="section-header">
            <h3 id="beyond-coding-title" className="sub-title">BEYOND CODING</h3>
            <span className="section-rule" aria-hidden="true"></span>
          </div>

          <p className="section-text">
            When I'm not at my computer, I'm usually exploring the latest
            tech trends, experimenting with new frameworks, or gaming. I
            believe that staying curious and maintaining a healthy work-life
            balance is key to sustained creativity and productivity.
          </p>
        </section>

      </div>

    </div>
  );
};

export default About;