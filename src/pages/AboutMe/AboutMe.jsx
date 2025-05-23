import './AboutMe.css';
import { SVG } from '../../assets/logos/logos';

function AboutMe() {
  return (
    <div id="about-me" className="page">
      <div className="about-me-page-container">
        <div className="content-container">
          <h3>Profile</h3>
          <p>
            I am a Senior Software Engineer with an MSc in Computer Science from
            the University of Leeds. I specialise in building scalable
            applications and automation tools using a wide range of technologies
            including Java, Python, and JavaScript.
          </p>
          <p>
            I enjoy working with teams, finding creative solutions, and
            constantly improving how things are done. My goal is to create
            user-friendly, reliable software solutions that makes life easier
            for people and businesses.
          </p>
        </div>
        <div className="content-container">
          <h3>Languages & Technologies</h3>
          <div className="langtech-container">
            <div className="svg-container" data-description="Java">
              <SVG.JavaIcon />
            </div>
            <div className="svg-container" data-description="Python">
              <SVG.PythonIcon />
            </div>
            <div className="svg-container" data-description="JavaScript">
              <SVG.JavaScriptIcon />
            </div>
            <div className="svg-container" data-description="HTML">
              <SVG.HTMLIcon />
            </div>
            <div className="svg-container" data-description="CSS">
              <SVG.CSSIcon />
            </div>
            <div className="svg-container" data-description="GCP">
              <SVG.GCPIcon />
            </div>
            <div className="svg-container" data-description="Git">
              <SVG.GitIcon />
            </div>
            <div className="svg-container" data-description="Docker">
              <SVG.DockerIcon />
            </div>
            <div className="svg-container" data-description="Jenkins">
              <SVG.JenkinsIcon />
            </div>
            <div className="svg-container" data-description="Kubernetes">
              <SVG.KubernetesIcon />
            </div>
            <div className="svg-container" data-description="NextJS">
              <SVG.NextJSIcon />
            </div>
            <div className="svg-container" data-description="React">
              <SVG.ReactIcon />
            </div>
            <div className="svg-container" data-description="Spring">
              <SVG.SpringIcon />
            </div>
            <div className="svg-container" data-description="Terraform">
              <SVG.TerraformIcon />
            </div>
            <div className="svg-container" data-description="SQLite">
              <SVG.SQLLiteIcon />
            </div>
            <div className="svg-container" data-description="Godot">
              <SVG.GodotIcon />
            </div>
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
