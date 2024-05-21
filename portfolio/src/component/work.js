// src/WorkPage.jsx
import React, { useState } from 'react';

import project1 from './frelancer.jpg'; // Ensure you have appropriate project images in the images folder
import project2 from './webdesiner.jpg';
import project3 from './app.jpg';

const projects = [
  {
    id: 1,
    image: project1,
    title: 'Project 1',
    shortDescription: 'Work as a frelancer',
    fullDescription: 'Full description of project 1. This project involves... More details about the technologies used, challenges faced, and solutions implemented.',
  },
  {
    id: 2,
    image: project2,
    title: 'Project 2',
    shortDescription: 'Devlop website and design',
    fullDescription: 'Full description of project 2. This project involves... More details about the technologies used, challenges faced, and solutions implemented.',
  },
  {
    id: 3,
    image: project3,
    title: 'Project 3',
    shortDescription: 'Design App and Webapp',
    fullDescription: 'Full description of project 3. This project involves... More details about the technologies used, challenges faced, and solutions implemented.',
  },
];

const WorkPage = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setExpandedProject((prevExpanded) => (prevExpanded === projectId ? null : projectId));
  };

  return (
    <div className="work-page">
      <h1 className="page-title">My Work</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-short-description">{project.shortDescription}</p>
              {expandedProject === project.id && (
                <div className="project-full-description">
                  <p>{project.fullDescription}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
