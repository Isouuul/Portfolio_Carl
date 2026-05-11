import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle-switch ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="toggle-track">
        <div className="toggle-icons">
          <span className="icon sun-icon">☀️</span>
          <span className="icon moon-icon">🌙</span>
        </div>
        <div className="toggle-thumb"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
