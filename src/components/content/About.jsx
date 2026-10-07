import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile-picture.jpg';

const About = () => {
  return (
    <div className="about-wrapper">

      {/* Profile Header */}
      <div className="about-profile-header">
        <div className="profile-picture-wrapper">
          <div className="profile-pulse-ring"></div>

          <img
            src={profilePicture}
            alt="Carl Bryan"
            className="profile-picture"
          />
        </div>

        <h1 className="profile-name">CARL BRYAN T. SACUDIT</h1>
        <p className="profile-role">
          Full Stack Developer | BSIT Graduate
        </p>
      </div>

      {/* About Content */}
      <div className="about-main">

        <section className="about-section-block">
          <h2 className="section-title">ABOUT ME</h2>

          <p className="section-text">
            I'm a <strong>Full Stack Developer</strong> and{' '}
            <strong>BSIT Graduate</strong> from{' '}
            <strong>STI West Negros University</strong>. I bridge the gap
            between user needs and technical implementation by building
            accessible, pixel-perfect user interfaces that blend art with
            code, rooted in clean architecture and performance optimization.
          </p>
        </section>

        <section className="about-section-block beyond-coding">
          <h3 className="sub-title">BEYOND CODING</h3>

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