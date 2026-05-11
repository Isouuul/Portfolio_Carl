import React, { useRef, useState, useEffect } from 'react';
import './Projects.css';

// --- IMAGE & VIDEO IMPORTS ---

// FreshStart Assets
import freshStart1 from '../assets/ProjectsList/FreshStart-1.jpg';
import freshStart12 from '../assets/ProjectsList/FreshStart-12.jpg';
import freshStart13 from '../assets/ProjectsList/FreshStart-13.jpg';

// Thy-Examify Assets (New Imports)
import thyExamify1 from '../assets/ProjectsList/thy-examify-1.jpg';
import thyExamify2 from '../assets/ProjectsList/thy-examify-2.jpg';

// ResQNow Assets
import resqnow1 from '../assets/ProjectsList/Resqnow-1.jpg';
import resqnow2 from '../assets/ProjectsList/Resqnow-2.jpg';
import resqnow3 from '../assets/ProjectsList/Resqnow-3.jpg';
import resqnow4 from '../assets/ProjectsList/Resqnow-4.jpg';
import resqnowVideo from '../assets/ProjectsList/Resqnow-video.mp4';

// EAD Motorsport Assets
import ead1 from '../assets/ProjectsList/EAD-1.jpg';
import ead2 from '../assets/ProjectsList/EAD-2.jpg';

// Noll Inc. Assets
import noll1 from '../assets/ProjectsList/NOLL-1.png';
import noll2 from '../assets/ProjectsList/NOLL2.png';
import noll3 from '../assets/ProjectsList/NoLL-3.png';

// E-Baligya Assets 
import eBaligyaVideo from '../assets/ProjectsList/E-baligya.mp4';

// Mabel's Restaurant Assets
import mabel1 from '../assets/ProjectsList/Mabels1.jpg';
import mabel2 from '../assets/ProjectsList/mabels2.jpg';

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const projectData = [
    { 
      id: 1, 
      title: "FreshStart", 
      category: "Full-Stack Solution",
      description: "A digital laundry service platform featuring real-time geofence tracking and automated workflow management.",
      tags: ["React Native", "Node.js", "Firebase"],
      link: "#",
      images: [freshStart1, freshStart12, freshStart13]
    },
    { 
      id: 2, 
      title: "Thy-Examify", 
      category: "EdTech Portal",
      description: "Comprehensive examination system with automated proctoring notifications and assessment reviews.",
      tags: ["Vite", "Express", "MongoDB"],
      link: "#",
      images: [thyExamify1, thyExamify2] // Added new image assets here
    },
    { 
      id: 3, 
      title: "ResQNow", 
      category: "Web Application",
      description: "A premium emergency response interface designed for critical user communication and high-speed dispatch.",
      tags: ["React", "Framer Motion", "CSS3"],
      link: "#",
      video: resqnowVideo,
      images: [resqnow1, resqnow2, resqnow3, resqnow4]
    },
    { 
      id: 4, 
      title: "EAD Motorsport", 
      category: "Shopify / Custom",
      description: "Advanced automotive retail experience using custom liquid logic for chassis-specific navigation.",
      tags: ["Shopify", "Liquid", "JS"],
      link: "#",
      images: [ead1, ead2]
    },
    { 
      id: 5, 
      title: "Thermo-Tec", 
      category: "Shopify / Store",
      description: "High-performance storefront engineered for thermal insulation product marketing and conversion optimization.",
      tags: ["Shopify", "Liquid", "UI/UX"],
      link: "#"
    },
    { 
      id: 6, 
      title: "Noll Inc.", 
      category: "Shopify / Brand",
      description: "Minimalist fashion experience optimized for asset delivery and intuitive high-end brand presentation.",
      tags: ["Shopify", "Liquid", "Responsive"],
      link: "#",
      images: [noll1, noll2, noll3]
    },
    { 
      id: 7, 
      title: "E-Baligya", 
      category: "Marketplace",
      description: "Localized multi-vendor platform with integrated GCash/Maya payments and real-time inventory.",
      tags: ["React", "Node.js", "Express"],
      link: "#",
      video: eBaligyaVideo,
      images: [] 
    },
    { 
      id: 8, 
      title: "Mabel's Restaurant", 
      category: "Hospitality",
      description: "Digital menu and reservation system featuring frictionless ordering and table booking management.",
      tags: ["React", "Vite", "CSS Modules"],
      link: "#",
      images: [mabel1, mabel2]
    },
    { 
      id: 9, 
      title: "Todo List", 
      category: "Utility",
      description: "Minimalist productivity manager utilizing local caching for instant response and offline-first tracking.",
      tags: ["React", "LocalStorage", "CSS3"],
      link: "#"
    }
  ];

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.project-card').offsetWidth;
      const gap = 30; 
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      setActiveProject(null);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Works</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Systems engineered for performance and user experience.</p>
        </div>

        <div className="carousel-outer-wrapper">
          
          <button className="nav-btn prev" onClick={() => handleScroll('left')} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="carousel-window">
            <div className="projects-carousel" ref={scrollContainerRef}>
              {projectData.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => setActiveProject(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <span className="project-link">
                    View Gallery & Details
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn next" onClick={() => handleScroll('right')} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

        </div>
      </div>

      {/* Modern Overlay Collage Modal */}
      {activeProject && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="close-modal-btn" onClick={() => setActiveProject(null)} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="modal-inner">
              <div className="modal-info">
                <span className="modal-category">{activeProject.category}</span>
                <h2 className="modal-title">{activeProject.title}</h2>
                <p className="modal-description">{activeProject.description}</p>
                <div className="modal-tags">
                  {activeProject.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {activeProject.link !== "#" && (
                  <a href={activeProject.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Visit Project Live
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                )}
              </div>

              <div className="modal-gallery">
                {(activeProject.video || (activeProject.images && activeProject.images.length > 0)) ? (
                  <div className={`image-collage ${activeProject.video ? 'has-video' : ''} count-${activeProject.images ? activeProject.images.length : 0}`}>
                    
                    {/* Render video if present */}
                    {activeProject.video && (
                      <div className="collage-item video-item">
                        <video 
                          src={activeProject.video} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          controls
                        />
                      </div>
                    )}

                    {/* Render static images collage */}
                    {activeProject.images && activeProject.images.map((img, index) => (
                      <div className="collage-item" key={index}>
                        <img src={img} alt={`${activeProject.title} interface capture ${index + 1}`} />
                      </div>
                    ))}

                  </div>
                ) : (
                  <div className="no-images-placeholder">
                    <p>No preview screenshots available for this project yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;