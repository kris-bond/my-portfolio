import './Projects.css'

import { projects } from './ProjectData';

function Projects() {

  return (
    <div id="projects" className='page'>
      <h2 className='page-header'>Projects</h2>

      <div className='projects-container'></div>

      {projects.map((p, i) => {
            return (
              <div className='project-card' key={i}></div>
              // <BlogCard key={i}>
              // <Img src={p.image} />
              //   <TitleContent>
              //     <CardTitle>{p.title}</CardTitle>
              //     <Hr />
              //   </TitleContent>
              //   <CardInfo className="card-info">{p.description}</CardInfo>
              //   <div>
              //     <TitleContent>Tags:</TitleContent>
              //     <TagList>
              //       {p.tags.map((t, i) => {
              //         return <Tag key={i}>{t}</Tag>;
              //       })}
              //     </TagList>
              //   </div>
              //   <UtilityList>
              //     <ExternalLinks href={p.source}><AiFillGithub/> View Source Code</ExternalLinks>
              //   </UtilityList>
              // </BlogCard>
            );
          })}
    </div>
  )
}

export default Projects