import './Projects.css';

import { projects } from './ProjectData';

import { AiFillGithub } from 'react-icons/ai';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

function Projects() {
  return (
    <div id="projects" className="page">
      <h2 className="page-header">Projects</h2>

      <div className="page-container">
        <div className="projects-container">
          {projects.map((p, i) => {
            const nextSilde = i + 1;
            const nextSlideStr = '#' + nextSilde;
            const prevSlide = i - 1;
            const prevSlideStr = '#' + prevSlide;
            return (
              <div className="carousel">
                <div className="arrow-holder">
                  <a href={prevSlideStr} className="arrow prev-slide">
                    <BsFillArrowLeftSquareFill className="arrow-icon" />
                  </a>
                </div>
                <div className="slide-container">
                  <div id={i} className="project-card" key={i}>
                    <img className="project-img" src={p.image}></img>
                    <p className="project-title">{p.title}</p>
                    <p className="project-desc">{p.description}</p>
                    <p className="project-tags">
                      {p.tags.map((t, i) => {
                        return <li key={i}>{t}</li>;
                      })}
                    </p>
                    <a className="project-link" href={p.source}>
                      <AiFillGithub /> View Source Code
                    </a>
                  </div>
                </div>
                <div className="arrow-holder">
                  <a href={nextSlideStr} className="arrow next-slide">
                    <BsFillArrowRightSquareFill className="arrow-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
