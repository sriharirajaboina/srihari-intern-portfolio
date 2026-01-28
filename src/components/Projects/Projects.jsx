import { useState, useEffect, useRef } from 'react'
import Nexcent from "../../assets/nexcent1.png"
import Hydra from "../../assets/hydra.png"
import workflowImg from "../../assets/work-flow.jpg";
import './Projects.css'

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "Nexcent",
      subtitle: "Figma to Responsive Website",
      description: "Converted Figma design into a fully responsive and pixel-perfect website using Tailwind CSS.",
      image: [Nexcent],
      technologies: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "Figma"
      ],
      role: "UI Developer ",
      duration: "Aug 6 to Aug 16",
      features: [
        "Pixel-perfect UI development from Figma",
        "Fully responsive design (mobile, tablet, desktop)",
        "Reusable and scalable UI components",
        "Optimized layout using Tailwind utility classes",
        "Cross-browser compatible UI"
      ],
    },
    {
      title: "Hydra",
      subtitle: "Figma to Responsive Website",
      description: "Converted Figma design into a fully responsive and pixel-perfect website using BootStrap.",
      image: [Hydra],
      technologies: [
        "HTML5",
        "CSS3",
        "BootStrap",
        "Responsive Design",
        "Figma"
      ],
      role: "UI Developer ",
      duration: "Aug 18 to Aug 30",
      features: [
        "Pixel-perfect UI development from Figma",
        "Fully responsive design (mobile, tablet, desktop)",
        "Reusable and scalable UI components",
        "Optimized layout using BootStrap utility classes",
        "Cross-browser compatible UI"
      ],
    },
    {
      title: "Work Flow",
      description: "A comprehensive workflow management system built with React 16+ and modern web technologies.",
      image: [workflowImg],
      technologies: ["React", "JavaScript ES6", "CSS3", "HTML5", "TailWind","MUI"],
      role: "Team Member",
      duration: "Sep 2024 - Present",
      features: [
        "Administering front-end development using React while concurrently developing and integrating APIs",
        "Resolving high-priority bugs through efficient bug-fixing techniques",
        "Participated in sustained engineering analysis to conduct root cause analysis for persistent issues",
        "Assisting new team members with local environment setup and provided guidance on application functionalities"
      ]
    }, 
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };


  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
            <p className="projects-description">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          <div className="carousel-container">
            <div className="carousel">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="project-slide">
                    <div className="project-card">
                      <div className="project-image">
                        <img src={project.image[0]} alt={project.title} />
                      </div>
                      
                      <div className="project-info">
                        <div className="project-meta">
                          <h3 className="project-role">{project.role}</h3>
                        </div>
                        <h5 className="project-duration">{project.duration}</h5>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.subtitle}</p>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="technologies">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        
                        <div className="features">
                          <h4>Key Features:</h4>
                          <ul>
                            {project.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn prev-btn" onClick={prevProject}>
                &#8249;
              </button>
              <button className="carousel-btn next-btn" onClick={nextProject}>
                &#8250;
              </button>
            </div>

         <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentProject === index ? "active" : ""}`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects