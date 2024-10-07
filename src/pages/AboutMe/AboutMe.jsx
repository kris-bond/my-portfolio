import './AboutMe.css';
import { SVG } from '../../assets/logos/logos';

function AboutMe() {
  return (
    <div id="about-me" className="page">
      <h2 className="page-header">About Me</h2>
      <div className="about-me-page-container">
        <div className="content-container">
          <h3>Profile</h3>
          <p>
            I am a Senior Software Engineer with an MSc in Computer Science from
            the University of Leeds. I specialize in building scalable
            applications and automation tools using a wide range of technologies
            including Java, Python, and JavaScript.
          </p>
          <p>
            I enjoy working with teams, finding creative solutions, and
            constantly improving how things are done. My goal is to create
            user-friendly, reliable software that makes life easier for people
            and businesses.
          </p>
        </div>
        <div className="content-container">
          <h3>Languages & Technologies</h3>
          <p>Languages</p>
          <div className="langtech-container">
            <SVG.JavaIcon />
            <SVG.PythonIcon />
            <SVG.JavaScriptIcon />
            <SVG.HTMLIcon />
            <SVG.CSSIcon />
          </div>
          <p>Technologies</p>
          <div className="langtech-container">
            <SVG.GCPIcon />
            <SVG.GitIcon />
            <SVG.DockerIcon />
            <SVG.JenkinsIcon />
            <SVG.KubernetesIcon />
            <SVG.NextJSIcon />
            <SVG.ReactIcon />
            <SVG.SpringIcon />
            <SVG.TerraformIcon />
          </div>
          <svg style={{ display: 'none' }}>
            <filter
              id="blur-and-scale"
              y="-50%"
              x="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="20"
                result="blurred"
              />
              <feColorMatrix type="saturate" in="blurred" values="4" />
              <feComposite in="SourceGraphic" operator="over" />
            </filter>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
