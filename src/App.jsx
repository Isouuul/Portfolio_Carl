import React, { useState } from 'react';
import BackgroundContent from './components/BackgroundContent';
import MainContentContainer from './components/MainContentContainer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('github');

  return (
    <div className="app-layout">
      {/* Background Hero Area */}
      <BackgroundContent activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Overlapping Content Section below/overlaying BackgroundContent */}
      <MainContentContainer activeTab={activeTab} />

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <span className="site-footer-mark" aria-hidden="true" />
            <div>
              <p className="site-footer-name">Carl Bryan Sacudit</p>
              <p className="site-footer-role">Entry-Level Full-Stack Developer</p>
            </div>
          </div>
          <p className="site-footer-copy">
            Copyright &copy; {new Date().getFullYear()} Carl Bryan Sacudit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;