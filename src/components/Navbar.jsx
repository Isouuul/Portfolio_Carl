import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { 
      label: 'GitHub', 
      value: 'github', 
      url: 'https://github.com/Isouuul', 
      icon: <FaGithub /> 
    },
    { 
      label: 'LinkedIn', 
      value: 'linkedin', 
      url: 'https://www.linkedin.com/in/carl-bryan-sacudit-9b1597404', 
      icon: <FaLinkedin /> 
    },
    { 
      label: 'Facebook', 
      value: 'facebook', 
      url: 'https://www.facebook.com/hesoyam123099', 
      icon: <FaFacebook /> 
    },
    { 
      label: 'Instagram', 
      value: 'instagram', 
      url: 'https://www.instagram.com/_hue_forya/', 
      icon: <FaInstagram /> 
    },
  ];

  const handleClick = (item) => {
    if (setActiveTab) setActiveTab(item.value);
  };

  return (
    <nav className="neo-navbar-container">

      {/* Social Links with Icon + Label */}
      <ul className="neo-navbar-list">
        {navItems.map((item) => (
          <li key={item.value} className="neo-navbar-item">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`neo-navbar-btn ${activeTab === item.value ? 'active' : ''}`}
              onClick={() => handleClick(item)}
            >
              <span className="neo-navbar-icon">{item.icon}</span>
              <span className="neo-navbar-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;