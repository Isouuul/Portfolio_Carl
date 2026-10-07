import React, { useState, useEffect } from 'react';
import './MainContentContainer.css';

import About from './content/About';
import Projects from './content/Projects';
import Contact from './content/Contact';
import Experience from './content/Experience';
import TechTools from './content/TechTools';

const TABS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'experience', label: 'WORK EXPERIENCE' },
  { id: 'tech-tools', label: 'TECH TOOLS' },
];

const TAB_COMPONENTS = {
  about: About,
  projects: Projects,
  contact: Contact,
  experience: Experience,
  'tech-tools': TechTools,
};

const PROJECT_SIDEBAR_CONTENT = [
  { id: 'personal', label: 'Self Projects', value: 'Personal' },
  { id: 'client', label: 'Client-Based Projects', value: 'Freelance' },
  { id: 'shopify', label: 'Internship Projects', value: 'Thy Web Dev Inc.' },
];

const MainContentContainer = () => {
  const [activeContentTab, setActiveContentTab] = useState('about');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('personal');
  const [currentTime, setCurrentTime] = useState('');

  // Live clock updating every second
  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  // Dynamically resolve the active component
  const ActiveTabComponent =
    TAB_COMPONENTS[activeContentTab] || About;

  const showSidebar =
    activeContentTab === 'about' ||
    activeContentTab === 'projects';

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
                className={`tab-button ${
                  activeContentTab === tab.id ? 'active' : ''
                }`}
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
        <div
          className={`content-body ${
            !showSidebar ? 'content-body-full' : ''
          }`}
        >

          {/* Left Main Panel */}
          <div
            className={`content-left-panel ${
              !showSidebar ? 'content-left-panel-full' : ''
            }`}
          >
            <ActiveTabComponent
              selectedProjectCategory={selectedProjectCategory}
            />
          </div>

          {/* Right Sidebar */}
          {showSidebar && (
            <div className="content-right-sidebar" key={activeContentTab}>
              {activeContentTab === 'about' && (
                <>
                  <h2 className="sidebar-title">PROFILE</h2>

                  <ul className="sidebar-list profile-sidebar-list">
                    <li>
                      <span className="stat-name">Internship</span>
                      <span className="stat-val">Thy Web Dev Inc.</span>
                    </li>

                    <li>
                      <span className="stat-name">Work At</span>
                      <span className="stat-val">
                        Freelance Shopify Developer
                      </span>
                    </li>

                    <li>
                      <span className="stat-name">Went to</span>
                      <span className="stat-val">
                        STI West Negros University
                      </span>
                    </li>

                    <li>
                      <span className="stat-name">Lives in</span>
                      <span className="stat-val">
                        Purok Magayon, Brgy. R.S.B., La Carlota City
                      </span>
                    </li>
                  </ul>
                </>
              )}

              {activeContentTab === 'projects' && (
                <>
                  <h2 className="sidebar-title">PROJECT CATEGORIES</h2>

                  <ul className="sidebar-list project-sidebar-list">
                    {PROJECT_SIDEBAR_CONTENT.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          className={`project-sidebar-button ${
                            selectedProjectCategory === item.id ? 'active' : ''
                          }`}
                          onClick={() => setSelectedProjectCategory(item.id)}
                        >
                          <span className="stat-name">{item.label}</span>
                          <span className="stat-val">{item.value}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MainContentContainer;