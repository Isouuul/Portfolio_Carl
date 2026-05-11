import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isOpen ? "nav-open" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          C<span>B</span>
        </Link>

        {/* Mobile Overlay Backdrop */}
        <div className={`nav-overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}></div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)} style={{ "--i": 1 }}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} style={{ "--i": 2 }}>About</Link>
          <Link to="/experiences" onClick={() => setIsOpen(false)} style={{ "--i": 3 }}>Experiences</Link>
          <Link to="/Projects" onClick={() => setIsOpen(false)} style={{ "--i": 4 }}>Projects</Link>
          
          {/* Mobile-only CTA in the menu */}
          <button className="mobile-cta">Hire Me</button>
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="nav-cta">Hire Me</button>
          
          <div 
            className={`nav-hamburger ${isOpen ? "toggle" : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;