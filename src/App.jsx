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
    </div>
  );
}

export default App;