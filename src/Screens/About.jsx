
import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Firebase",
    "MySQL",
    "Git",
    "GitHub",
    "VS Code",
    "Cursor",
    "iCodex",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Header Section */}
        <div className="about-header">
          <p className="sub-title">Introduction</p>
          <h1>About Me</h1>
          <div className="about-underline"></div>
        </div>

        <div className="about-main-layout">

          {/* Left Side: Bio Content */}
          <div className="about-content">
            <h3>Building systems, solving problems.</h3>

            <p>
              I am a passionate Full-Stack Developer focused on building
              modern, responsive, and user-friendly web and mobile
              applications. With a strong focus on React, I build complete
              solutions by connecting intuitive interfaces with reliable
              backend services using Node.js, Firebase, and MySQL.
            </p>

            <p className="italic">
              "I focus on turning ideas into practical, maintainable, and
              user-focused digital solutions."
            </p>

            {/* Skills */}
            <div className="about-skills">
              <div className="skills-heading">
                <span></span>
                <h4>Technologies I Work With</h4>
              </div>

              <div className="skills-list">
                {skills.map((skill) => (
                  <button
                    type="button"
                    className="skill-button"
                    key={skill}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Timeline Experience */}
          <div className="about-timeline">
            <div className="timeline-header">
              <h4>Experience</h4>
            </div>

            <div className="timeline-items">

              {/* Active Item */}
              <div className="timeline-item active">
                <div className="dot"></div>

                <div className="item-content">
                  <h5>Shopify Developer</h5>
                  <p>Freelance / Self-Employed</p>
                  <span className="year-badge">
                    Feb - August 2026
                  </span>
                </div>
              </div>

              {/* Past Item 1 */}
              <div className="timeline-item">
                <div className="dot"></div>

                <div className="item-content">
                  <h5>Software Engineer Intern</h5>
                  <p>Thy Web Development Inc.</p>
                  <span className="year-badge">
                    Jan - May 2026
                  </span>
                </div>
              </div>

              {/* Past Item 2 */}
              <div className="timeline-item">
                <div className="dot"></div>

                <div className="item-content">
                  <h5>Freelance Full Stack Developer</h5>
                  <p>Remote / Project Based</p>
                  <span className="year-badge">
                    2023 - 2026
                  </span>
                </div>
              </div>

              {/* Education */}
              <div className="timeline-item">
                <div className="dot"></div>

                <div className="item-content">
                  <h5>BS Information Technology</h5>
                  <p>STI West Negros University</p>
                  <span className="year-badge">
                    2022 - 2026 (Graduate)
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
