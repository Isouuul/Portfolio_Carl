import React, { useState, useEffect } from 'react';
import './MainContentContainer.css';

import About from './content/About';
import Projects from './content/Projects';
import Contact from './content/Contact';
import Experience from './content/Experience';
import Internship from './content/Internship';
import TechTools from './content/TechTools';

const TABS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'experience', label: 'WORK EXPERIENCE' },
  { id: 'internship', label: 'INTERNSHIP' },
  { id: 'tech-tools', label: 'TECH TOOLS' },
];

const TAB_COMPONENTS = {
  about: About,
  projects: Projects,
  contact: Contact,
  experience: Experience,
  internship: Internship,
  'tech-tools': TechTools,
};

const MainContentContainer = () => {
  const [activeContentTab, setActiveContentTab] = useState('about');
  const [currentTime, setCurrentTime] = useState('');

  // Live clock updating every second
  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Dynamically resolve the active component
  const ActiveTabComponent = TAB_COMPONENTS[activeContentTab] || About;

  return (
    <div className="main-content-container">
      {/* Wooden Frame Corners */}
      <div className="frame-corner frame-corner-tl" />
      <div className="frame-corner frame-corner-tr" />
      <div className="frame-corner frame-corner-bl" />
      <div className="frame-corner frame-corner-br" />

      {/* Wooden Frame Edges */}
      <div className="frame-edge frame-edge-top" />
      <div className="frame-edge frame-edge-bottom" />
      <div className="frame-edge frame-edge-left" />
      <div className="frame-edge frame-edge-right" />

      {/* Inner Recessed Canvas Container */}
      <div className="content-body-wrapper">
        {/* Sub-Navigation Bar / Tabs */}
        <div className="content-tabs-bar">
          <div className="tabs-group">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeContentTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveContentTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tabs-extra-info">
            <span>{currentTime}</span>
          </div>
        </div>

        {/* Content Area Grid */}
        <div className="content-body">
          {/* Left Main Panel */}
          <div className="content-left-panel">
            <ActiveTabComponent />
          </div>

          {/* Right Sidebar */}
          <div className="content-right-sidebar">
            <h3 className="sidebar-title">PROFILE</h3>
            <ul className="sidebar-list">
              <li>
                <span className="stat-name">Internship</span>
                <span className="stat-val">Thy Web Dev Inc.</span>
              </li>
              <li>
                <span className="stat-name">Work At</span>
                <span className="stat-val">Freelance Shopify Developer</span>
              </li>
              <li>
                <span className="stat-name">Went to</span>
                <span className="stat-val">STI West Negros University</span>
              </li>
              <li>
                <span className="stat-name">Lives in</span>
                <span className="stat-val">La Carlota City</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentContainer;