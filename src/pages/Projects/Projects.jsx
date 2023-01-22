import './Projects.css'

import { projects } from './ProjectData';

function Projects() {

  return (
    <div id="projects" className='page'>
      <h2 className='page-header'>Projects</h2>

      <div className='page-container'>

        <div className='projects-container'>

        {projects.map((p, i) => {
              return (
                <div className='project-card' key={i}>
                  <img className='project-img' src={p.image}></img>
                  <p className='project-title'>{p.title}</p>
                  <p className='project-desc'>{p.description}</p>
                  <p className='project-tags'>
                    {p.tags.map((t, i) => {
                      return <li key={i}>{t}</li>;
                    })}
                  </p>
                  <button className='project-link' href={p.source}>View Source Code</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default Projects