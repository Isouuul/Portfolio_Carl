import React from 'react';
import Navbar from './Navbar';
import bgImage from '../assets/Carl-Bryan.jpg';
import './BackgroundContent.css';

const BackgroundContent = ({ activeTab, setActiveTab }) => {
  return (
    <div className="background-outer-wrapper">
      <div className="frame-border-container">

        {/* Floating Centered Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Frame Corners */}
        <div className="frame-corner frame-corner-tl" />
        <div className="frame-corner frame-corner-tr" />
        <div className="frame-corner frame-corner-bl" />
        <div className="frame-corner frame-corner-br" />

        {/* Frame Edges */}
        <div className="frame-edge frame-edge-top" />
        <div className="frame-edge frame-edge-bottom" />
        <div className="frame-edge frame-edge-left" />
        <div className="frame-edge frame-edge-right" />

        {/* Inner Image Canvas */}
        <div 
          className="frame-canvas" 
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="frame-vignette" />
        </div>

      </div>
    </div>
  );
};

export default BackgroundContent;