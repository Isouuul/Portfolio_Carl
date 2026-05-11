import React, { useEffect, useRef, useState } from 'react';
import { 
  LuGithub, LuLinkedin, LuMail, 
  LuArrowUpRight, LuCpu, LuChevronUp,
  LuGlobe
} from "react-icons/lu";
import './Footer.css';
import resumePDF from '../assets/resume.pdf';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer 
        className={`premium-footer ${isVisible ? 'is-visible' : ''}`} 
        id="footer"
        ref={footerRef}
      >
        <div className="footer-mesh-gradient"></div>
        <div className="footer-grid-overlay"></div>
        
        <div className="footer-container">
          {/* CTA Section */}
          <div className="footer-top">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span className="badge-text">Available for projects</span>
            </div>

            <h2 className="footer-cta-text">
              Let's create something <span className="text-gradient">extraordinary</span>
            </h2>

            <a href="mailto:carlbryansacudit@gmail.com" className="footer-mail-btn">
              <LuMail size={20} />
              Get in touch
            </a>
          </div>

          {/* Divider */}
          <div className="footer-divider-wrapper">
            <hr className="footer-divider" />
          </div>

          {/* Main */}
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-logo">
                <LuCpu className="logo-icon" />
                <span className="logo-text">lsouuul<span>.dev</span></span>
              </div>

              <p className="brand-desc">
                Full-stack software developer specializing in high-end UI/UX and 
                scalable backend architectures.
              </p>

              <div className="location-tag">
                <LuGlobe className="tag-icon" />
                <span>La Carlota City, Negros Occidental, PH — GMT+8</span>
              </div>
            </div>

            <div className="footer-links-grid">
              <div className="link-group">
                <span className="group-title">Navigation</span>
                <ul>
                  <li><a href="#experiences">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li>
                    <a href={resumePDF} target="_blank" rel="noreferrer">
                      View CV
                    </a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <span className="group-title">Connect</span>
                <div className="social-row">
                  <a 
                    href="https://github.com/thy-carlbryan" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-card"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <LuGithub size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/carlbryan-sacudit-9b1597404/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-card"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <LuLinkedin size={20} />
                  </a>
                  <a 
                    href="mailto:carlbryansacudit@gmail.com"
                    className="social-card"
                    aria-label="Email"
                    title="Email"
                  >
                    <LuMail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <div>
              © {currentYear} — Developed by 
              <span className="name-highlight"> Carl Bryan Sacudit</span>
            </div>

            <button onClick={scrollToTop} className="back-to-top">
              Scroll to top <LuChevronUp />
            </button>
          </div>

        </div>
      </footer>

    </>
  );
};

export default Footer;