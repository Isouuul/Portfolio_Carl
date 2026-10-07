import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import './Projects.css';

import mabels1 from '../../assets/ProjectsList/Mabels1.jpg';
import mabels2 from '../../assets/ProjectsList/mabels2.jpg';
import resqnow1 from '../../assets/ProjectsList/Resqnow-1.jpg';
import resqnow2 from '../../assets/ProjectsList/Resqnow-2.jpg';
import resqnow3 from '../../assets/ProjectsList/Resqnow-3.jpg';
import resqnow4 from '../../assets/ProjectsList/Resqnow-4.jpg';
import resqnowVideo from '../../assets/ProjectsList/Resqnow-video.mp4';
import eBaligyaVideo from '../../assets/ProjectsList/E-Baligya.mp4';
import freshStart1 from '../../assets/ProjectsList/FreshStart-1.jpg';
import freshStart12 from '../../assets/ProjectsList/FreshStart-12.jpg';
import freshStart13 from '../../assets/ProjectsList/FreshStart-13.jpg';
import ead1 from '../../assets/ProjectsList/EAD-1.jpg';
import ead2 from '../../assets/ProjectsList/EAD-2.jpg';
import noll1 from '../../assets/ProjectsList/NOLL-1.png';
import noll2 from '../../assets/ProjectsList/NOLL2.png';
import noll3 from '../../assets/ProjectsList/NoLL-3.png';

const PROJECTS = [
  // PERSONAL PROJECTS
  {
    id: 'mabels-restaurant',
    title: "Mabel's Restaurant",
    year: '2026',
    category: 'personal',
    categoryLabel: 'Personal Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: ['React', 'CSS', 'Node.js'],
    images: [mabels1, mabels2],
  },
  {
    id: 'todo-list',
    title: 'To-Do List',
    year: '2026',
    category: 'personal',
    categoryLabel: 'Personal Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    technologies: ['React', 'JavaScript'],
  },
  {
    id: 'resqnow',
    title: 'ResQnow',
    year: '2026',
    category: 'personal',
    categoryLabel: 'Personal Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    technologies: ['React', 'Firebase', 'Maps API'],
    images: [resqnow1, resqnow2, resqnow3, resqnow4, resqnowVideo],
  },
  {
    id: 'e-baligya',
    title: 'E-Baligya',
    year: '2026',
    category: 'personal',
    categoryLabel: 'Personal Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    images: [eBaligyaVideo],
  },

  // CLIENT-BASED PROJECTS
  {
    id: 'freshstart',
    title: 'FreshStart',
    year: '2026',
    category: 'client',
    categoryLabel: 'Client-Based Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    technologies: ['React', 'CSS', 'REST API'],
    images: [freshStart1, freshStart12, freshStart13],
  },

  // SHOPIFY PROJECTS
  {
    id: 'ead-motosport',
    title: 'EAD motoSport',
    year: '2026',
    category: 'shopify',
    categoryLabel: 'Shopify Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
    images: [ead1, ead2],
  },
  {
    id: 'noll-inc',
    title: 'Noll Inc.',
    year: '2026',
    category: 'shopify',
    categoryLabel: 'Shopify Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
    technologies: ['Shopify', 'Liquid', 'CSS'],
    images: [noll1, noll2, noll3],
  },
  {
    id: 'thermo-tec',
    title: 'Thermo Tec',
    year: '2026',
    category: 'shopify',
    categoryLabel: 'Shopify Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus.',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
  },
  {
    id: 'fat-fender-garage',
    title: 'Fat Fender Garage',
    year: '2026',
    category: 'shopify',
    categoryLabel: 'Shopify Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum.',
    technologies: ['Shopify', 'Liquid', 'CSS'],
  },
];

const PROJECT_GROUPS = [
  {
    category: 'personal',
    title: 'PERSONAL PROJECTS',
  },
  {
    category: 'client',
    title: 'CLIENT-BASED PROJECTS',
  },
  {
    category: 'shopify',
    title: 'SHOPIFY PROJECTS',
  },
];

const Projects = ({
  selectedProjectCategory = 'personal',
}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject && !dialog.open) {
      dialog.showModal();
    } else if (!selectedProject && dialog.open) {
      dialog.close();
    }
  }, [selectedProject]);

  useEffect(() => {
    setActiveSlide(0);
  }, [selectedProject]);

  const projectMedia = selectedProject?.images ?? [];
  const isCarousel = projectMedia.length > 3;

  const renderProjectMedia = (media, index) => (
    media.toLowerCase().endsWith('.mp4') ? (
      <video
        className="project-modal-media"
        key={media}
        src={media}
        controls
        preload="metadata"
        aria-label={`${selectedProject.title} project video`}
      />
    ) : (
      <img
        className="project-modal-media"
        key={media}
        src={media}
        alt={`${selectedProject.title} preview ${index + 1}`}
        loading="lazy"
      />
    )
  );

  const changeSlide = (direction) => {
    setActiveSlide((current) => (
      current + direction + projectMedia.length
    ) % projectMedia.length);
  };

  const visibleGroups = PROJECT_GROUPS.filter(
    (group) => group.category === selectedProjectCategory
  );

  return (
    <div className="tab-section">

      <div className="projects-list">
        {visibleGroups.map((group) => {
          const projects = PROJECTS.filter(
            (project) => project.category === group.category
          );

          return (
            <div className="project-group" key={group.category}>
              <div className="project-group-header">
                <h2 className="project-group-title">
                  {group.title}
                </h2>

                <span className="project-group-count">
                  {projects.length}
                </span>
              </div>

              <div className="project-cards">
                {projects.map((project, index) => (
                  <div
                    className="project-card"
                    key={project.id}
                    style={{ '--i': index }}
                  >

                    <div className="project-card-header">
                      <h3 className="project-title">
                        {project.title}
                      </h3>

                      <span className="project-year">
                        {project.year}
                      </span>
                    </div>

                    <span className="project-category">
                      {project.categoryLabel}
                    </span>

                    <p
                      className={
                        project.description
                          ? 'project-description'
                          : 'project-description is-empty'
                      }
                    >
                      {project.description || 'Details coming soon.'}
                    </p>

                    <div className="project-card-footer">
                      {project.technologies.length > 0 && (
                        <div className="project-technologies">
                          {project.technologies.map((technology) => (
                            <span
                              className="technology-tag"
                              key={technology}
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      )}

                      <button
                        className="project-link"
                        type="button"
                        aria-haspopup="dialog"
                        onClick={() => setSelectedProject(project)}
                      >
                        View project
                      </button>
                    </div>

                    <span className="project-sigil" aria-hidden="true" />
                    <span className="project-ember" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <dialog
        className="project-modal"
        ref={dialogRef}
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        aria-labelledby="project-modal-title"
      >
        {selectedProject && (
          <>
            <div className="project-modal-header">
              <div>
                <span className="project-modal-category">
                  {selectedProject.categoryLabel}
                </span>
                <h2 id="project-modal-title">{selectedProject.title}</h2>
              </div>
              <button
                className="project-modal-close"
                type="button"
                aria-label="Close project details"
                onClick={() => dialogRef.current?.close()}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {selectedProject.images?.length ? (
              <div
                className={`project-modal-gallery${isCarousel ? ' is-carousel' : ''}`}
                data-orientation={
                  selectedProject.category === 'shopify' ? 'landscape' : 'portrait'
                }
                role={isCarousel ? 'region' : undefined}
                aria-label={isCarousel ? `${selectedProject.title} media gallery` : undefined}
                aria-roledescription={isCarousel ? 'carousel' : undefined}
              >
                {isCarousel ? (
                  <>
                    <div
                      className="project-carousel-stage"
                      onKeyDown={(event) => {
                        if (event.key === 'ArrowLeft') {
                          event.preventDefault();
                          changeSlide(-1);
                        } else if (event.key === 'ArrowRight') {
                          event.preventDefault();
                          changeSlide(1);
                        }
                      }}
                    >
                      <button
                        className="project-carousel-arrow previous"
                        type="button"
                        aria-label="Previous project image"
                        onClick={() => changeSlide(-1)}
                      >
                        <ChevronLeft size={20} aria-hidden="true" />
                      </button>
                      <div
                        className="project-carousel-slide"
                        aria-live="polite"
                        aria-roledescription="slide"
                        aria-label={`${activeSlide + 1} of ${projectMedia.length}`}
                      >
                        {renderProjectMedia(projectMedia[activeSlide], activeSlide)}
                      </div>
                      <button
                        className="project-carousel-arrow next"
                        type="button"
                        aria-label="Next project image"
                        onClick={() => changeSlide(1)}
                      >
                        <ChevronRight size={20} aria-hidden="true" />
                      </button>
                    </div>

                    <div className="project-carousel-footer">
                      <span className="project-carousel-count">
                        {String(activeSlide + 1).padStart(2, '0')} / {String(projectMedia.length).padStart(2, '0')}
                      </span>
                      <div className="project-carousel-thumbnails">
                        {projectMedia.map((media, index) => (
                          <button
                            className={`project-carousel-thumbnail${index === activeSlide ? ' active' : ''}`}
                            key={media}
                            type="button"
                            aria-label={`Show project image ${index + 1}`}
                            aria-current={index === activeSlide ? 'true' : undefined}
                            onClick={() => setActiveSlide(index)}
                          >
                            {media.toLowerCase().endsWith('.mp4') ? (
                              <Play size={14} aria-hidden="true" />
                            ) : (
                              <img src={media} alt="" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  projectMedia.map(renderProjectMedia)
                )}
              </div>
            ) : (
              <div className="project-modal-empty">Project preview coming soon.</div>
            )}

            <p className="project-modal-description">
              {selectedProject.description || 'Details coming soon.'}
            </p>
            <div className="project-modal-technologies">
              {selectedProject.technologies.map((technology) => (
                <span className="technology-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </>
        )}
      </dialog>
    </div>
  );
};

export default Projects;