import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import { projects } from './ProjectData';
import { AiFillGithub } from 'react-icons/ai';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const slideRef = useRef(null); // Reference to the slides container

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(projects.length - 1); // Loop to the last slide
    }
  };

  // Scroll to the current slide when currentSlide changes
  useEffect(() => {
    const slides = slideRef.current;
    if (slides) {
      slides.scrollTo({
        left: slides.offsetWidth * currentSlide,
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <div id="projects" className="page">
      <div className="page-container">
        <div className="projects-container">
          <div className="product">
            <div className="slide-show">
              <nav className="slider__nav">
                <button
                  title="Previous slide"
                  data-prev
                  onClick={goToPrevSlide}
                >
                  &larr;
                </button>
                <button title="Next slide" data-next onClick={goToNextSlide}>
                  &rarr;
                </button>
              </nav>
              <div className="slide-show-slides" ref={slideRef}>
                {projects.map((p, i) => (
                  <div key={i} className="slide-show-slide">
                    <img className="project-img" src={p.image} alt={p.title} />
                    <p className="project-title">{p.title}</p>
                    <p className="project-desc">{p.description}</p>
                    <ul className="project-tags">
                      {p.tags.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                    <a className="project-link" href={p.source}>
                      <AiFillGithub /> View Source Code
                    </a>
                  </div>
                ))}
              </div>
              <div className="slide-show-indicators">
                {projects.map((_, i) => (
                  <span
                    key={i}
                    className={i === currentSlide ? 'active' : ''}
                    onClick={() => setCurrentSlide(i)} // Allow clicking on an indicator to go to slide
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
