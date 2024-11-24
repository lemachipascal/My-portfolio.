import React from 'react';
import './Project.css';
import Tourism from '../assets/image/Tourism.png';
import Movie from '../assets/image/movie.png';
import Bots from '../assets/image/Bots.png';

const projects = [
  {
    title: 'Project 1',
    description: 'A web application built with React.',
    image: Tourism, 
    Url:"https://kenya-tours-group-project-gmwitis-projects.vercel.app/",
  },
  {
    title: 'Project 2',
    description: 'A Node.js backend service.',
    image: Movie,
    Url:'https://courageous-daffodil-96987c.netlify.app/',
  },
  {
    title: 'Project 3',
    description: 'A full-stack app with React',
    image: Bots,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects__gallery">
        {projects.map((project, index) => (
          <div key={index} className="project__card">
            {/* Here, project.image is used directly */}
            <img src={project.image} alt={project.title} />
            <div className="project__overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
