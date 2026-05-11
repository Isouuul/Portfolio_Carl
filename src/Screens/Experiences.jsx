import React from 'react';
import './Experiences.css';
import { 
  LuLayoutTemplate, LuPaintbrush, LuDatabase, 
  LuServer, LuShieldCheck, LuWrench, LuArrowRight 
} from "react-icons/lu";

const Experiences = () => {
  const primarySkills = [
    {
      title: "Frontend",
      icon: <LuLayoutTemplate />,
      items: ["HTML5", "CSS3", "JavaScript"],
      color: "blue"
    },
    {
      title: "Frameworks",
      icon: <LuPaintbrush />,
      items: ["React", "React Native", "Next.js"],
      color: "purple"
    },
    {
      title: "Backend",
      icon: <LuDatabase />,
      items: ["Node.js", "Express", "PostgreSQL"],
      color: "green"
    }
  ];

  const secondarySkills = [
    {
      title: "Database",
      icon: <LuServer />,
      items: ["Firebase", "MySQL"],
      color: "orange"
    },
    {
      title: "Principles",
      icon: <LuShieldCheck />,
      items: ["System Design", "Clean Architecture"],
      color: "red"
    },
    {
      title: "Tools",
      icon: <LuWrench />,
      items: ["Git", "GitHub", "VS Code", "Cursor"],
      color: "cyan"
    }
  ];

  const handleCardClick = (title) => {
    console.log(`Navigating to ${title} details...`);
  };

  return (
    <section className="exp-section" id="experiences">
      <div className="exp-container">
        <header className="exp-header">
          <span className="sub-title">Expertise</span>
          <h1>Elevating Digital Experiences</h1>
          <p>
            I bridge the gap between complex logic and human-centric design, 
            crafting seamless applications from the core to the surface.
          </p>
        </header>

        {/* Main Skills Grid */}
        <div className="exp-grid">
          {primarySkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} onClick={() => handleCardClick(skill.title)} />
          ))}
        </div>

        {/* Secondary Skills Grid */}
        <div className="exp-grid secondary-grid">
          {secondarySkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} onClick={() => handleCardClick(skill.title)} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Simplified Premium SkillCard
const SkillCard = ({ skill, onClick }) => (
  <button className={`exp-card ${skill.color}-theme`} onClick={onClick} aria-label={`View ${skill.title} details`}>
    <div className="card-border-gradient"></div>
    <div className="card-badge">
      <div className="card-icon-inner">{skill.icon}</div>
    </div>
    <div className="card-content">
      <div className="card-title-row">
        <h3>{skill.title}</h3>
        <LuArrowRight className="card-arrow-icon" />
      </div>
      <div className="tech-stack">
        {skill.items.map((item, i) => (
          <span key={i} className="tech-tag">{item}</span>
        ))}
      </div>
    </div>
    <div className="card-bg-glow"></div>
  </button>
);

export default Experiences;