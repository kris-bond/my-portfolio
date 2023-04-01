import './AboutMe.css'

import {SiJavascript, SiPython, SiJava, SiHtml5, SiCss3, SiCsharp,
  SiDjango, SiSpringboot, SiGit, SiGooglecloud, SiNextdotjs, SiReact,
  SiUnity} from 'react-icons/si'

function AboutMe() {

  return (
    <div id="about-me" className='page'>
      <h2 className='page-header'>About Me</h2>
      <div className='about-me-page-container'>
        <div className='content-container'>
          <h3>Profile</h3>
          <p>I am a Senior Software Engineer with an MSc in Computer Science from the University of Leeds.</p>
          <p>I am proficient with Python, Java, JavaScript, HTML & CSS which I use to create tools, apps and websites.</p>
        </div>
        <div className='content-container'>
          <h3>Languages & Technologies</h3>
          <p>Languages</p>
          <div className='langtech-container'>
            <SiJavascript className='icon-logo'/>
            <SiPython className='icon-logo'/>
            <SiJava className='icon-logo'/>
            <SiHtml5 className='icon-logo'/>
            <SiCss3 className='icon-logo'/>
            <SiCsharp className='icon-logo'/>
          </div>
          <p>Technologies</p>
          <div className='langtech-container'>
            <SiGit className='icon-logo'/>
            <SiGooglecloud className='icon-logo'/>
            <SiNextdotjs className='icon-logo'/>
            <SiReact className='icon-logo'/>
            <SiDjango className='icon-logo'/>
            <SiSpringboot className='icon-logo'/>
            <SiUnity className='icon-logo'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe