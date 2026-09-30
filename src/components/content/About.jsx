import React from 'react';
import './About.css'; // Importing the CSS styling

const About = () => {
  return (
    <div className="tab-section">
      <h2 className="section-title">ABOUT ME</h2>
      
      <p className="section-text">
        I'm a <strong>Full Stack Developer</strong> and <strong>BSIT Graduate</strong> from <strong>STI West Negros University</strong>. 
        I bridge the gap between user needs and technical implementation by building accessible, 
        pixel-perfect user interfaces that blend art with code, rooted in clean architecture 
        and performance optimization.
      </p>

      <div className="about-sub-section">
        <h3 className="sub-title">Beyond Coding</h3>
        <p className="section-text">
          When I'm not at my computer, I'm usually exploring the latest tech trends, 
          experimenting with new frameworks, or gaming. I believe that staying curious and 
          maintaining a healthy work-life balance is key to sustained creativity and productivity.
        </p>
      </div>
    </div>
  );
};

export default About;