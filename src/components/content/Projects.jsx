import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Code2, Database, Play, PlugZap } from 'lucide-react';
import {
  SiAppsmith,
  SiFirebase,
  SiGooglemaps,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';
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
import thyExamify1 from '../../assets/ProjectsList/thy-examify-1.jpg';
import thyExamify2 from '../../assets/ProjectsList/thy-examify-2.jpg';

const TECHNOLOGY_ICONS = {
  'React Native': SiReact,
  Firebase: SiFirebase,
  Javascript: SiJavascript,
  JavaScript: SiJavascript,
  'Node.js': SiNodedotjs,
  React: SiReact,
  'Maps API': SiGooglemaps,
  MongoDB: SiMongodb,
  CSS: Code2,
  'REST API': PlugZap,
  'REST APIs': PlugZap,
  Appsmith: SiAppsmith,
  CRUD: Database,
};

const TechnologyTag = ({ technology }) => {
  const TechnologyIcon = TECHNOLOGY_ICONS[technology] ?? Code2;

  return (
    <span className="technology-tag">
      <TechnologyIcon className="technology-icon" aria-hidden="true" />
      {technology}
    </span>
  );
};
const PROJECTS = [
  // PERSONAL PROJECTS
  {
    id: 'mabels-restaurant',
    title: "Mabel's Restaurant",
    year: '2026',
    category: 'personal',
    categoryLabel: 'Personal Project',
    description:
    "Mabel's Restaurant is a mobile POS system built to support essential restaurant operations using Firebase for data management. It includes table reservations, menu management with create, update, and delete functionality, and receipt printing. giving me hands-on experience building a practical restaurant management application.",
    technologies: ['React Native', 'Firebase', "Javascript", "Node.js"],
    images: [mabels1, mabels2],
  },
  {
    id: 'todo-list',
    title: 'To-Do List',
    year: '2026',
    category: 'personal',
    categoryLabel: 'Personal Project',
    description:
      'A simple mobile To-Do List application and my first mobile project integrating Firebase. It implements basic CRUD functionality, allowing users to create, view, edit, and delete tasks while storing and managing task data through Firebase.',
    technologies: ['React Native', 'Firebase', "Node.js"],  },
  {
    id: 'resqnow',
    title: 'ResQnow',
    year: '2026',
    category: 'personal',
    categoryLabel: 'Personal Project',
    description:
    "ResQnow is a real-time emergency response system designed to help the DRRMO respond to and track reported incidents. The mobile application uses geofencing, Google Maps API, and pin-based location reporting to identify incident locations. Reported incidents trigger real-time alerts with a siren notification on the React/Vite web dashboard, enabling administrators to monitor and respond to incidents more efficiently.",
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
    "E-Baligya is a full-stack digital seafood marketplace built to support local vendors in Bacolod, connecting verified sellers with consumers through a centralized platform. It features AI-assisted fish freshness verification using a pretrained machine learning model through Nyckel AI, along with product listings, inventory monitoring, bulk buying, bidding, order management, and real-time order tracking. The platform supports three user roles: Super Admin, Seller, and Consumer. The Super Admin manages seller verification, monitors marketplace activity through data analytics, manages reports and user restrictions, and receives low-stock alerts. Sellers can register and undergo business permit, government ID, and identity verification before managing products, participating in bidding, and tracking orders. Consumers can purchase products individually or through bulk buying and auction-style bidding, receive notifications, and track their orders.",
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

  // INTERNSHIP PROJECTS
  {
    id: 'thy-examify',
    title: 'Thy-Examify',
    year: '2026',
    category: 'shopify',
    categoryLabel: 'Internship Project',
    description: 'An examination platform developed during my internship at Thy Web Dev Inc.',
    technologies: [],
    images: [thyExamify1, thyExamify2],
  },
  {
    id: 'employee-crud-appsmith',
    title: 'Employee CRUD Appsmith',
    year: '2026',
    category: 'shopify',
    categoryLabel: 'Internship Project',
    description: 'An employee management app built with Appsmith, supporting create, read, update, and delete workflows.',
    technologies: ['Appsmith', 'CRUD'],
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
    title: 'INTERNSHIP PROJECTS',
  },
];

const CARD_DESCRIPTION_WORD_LIMIT = 28;

const getDescriptionPreview = (description) => {
  const words = description.trim().split(/\s+/);

  return words.length > CARD_DESCRIPTION_WORD_LIMIT
    ? `${words.slice(0, CARD_DESCRIPTION_WORD_LIMIT).join(' ')}...`
    : description;
};

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
                      {getDescriptionPreview(project.description || 'Details coming soon.')}
                    </p>

                    <div className="project-card-footer">
                      {project.technologies.length > 0 && (
                        <div className="project-technologies">
                          {project.technologies.map((technology) => (
                            <TechnologyTag key={technology} technology={technology} />
                          ))}
                        </div>
                      )}

                      <button
                        className="project-link"
                        type="button"
                        aria-haspopup="dialog"
                        onClick={() => {
                          setActiveSlide(0);
                          setSelectedProject(project);
                        }}
                      >
                        See more
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

            <p className="project-modal-description">
              {selectedProject.description || 'Details coming soon.'}
            </p>
            <div className="project-modal-technologies">
              {selectedProject.technologies.map((technology) => (
                <TechnologyTag key={technology} technology={technology} />
              ))}
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

          </>
        )}
      </dialog>
    </div>
  );
};

export default Projects;