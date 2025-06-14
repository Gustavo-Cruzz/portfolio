import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS for this component

// Add theme and toggleTheme props to the Header component
const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <h1>Gustavo Cruz</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Connect</a></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle-button">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src="images/profile/profile.jpg" alt="Profile Picture" className="hero-profile-image" />
      <div className="hero-content">
        <h2>Hi, I'm Gustavo Cruz</h2>
        <p>A passionate AI Developer</p>
        {/* <button>View My Projects</button> */}
      </div>
    </section>
  );
};


const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I am a Computer Engineering graduate candidate at SENAI CIMATEC, with a strong foundation in Artificial Intelligence gained through research and development since 2021. My experience lies in creating innovative applications within Computer Vision and Natural Language Processing. I've also had the valuable opportunity to contribute to Research, Development, and Innovation (R&D&I) projects focused on Large Language Models (LLMs) as a scholarship recipient.</p>
      <p>My primary areas of interest and expertise include the exciting fields of Artificial Intelligence, Machine Learning, Deep Learning, and Data Science. I am passionate about continuously expanding my technical and analytical skills, which is why I actively participate in hackathons and competitive programming events.</p>
      <p>Beyond my technical skills, I have practical experience leading small teams and developing end-to-end AI pipelines. My backend project work includes tackling critical challenges such as identifying and mitigating bias and unfairness in machine learning systems, reducing model complexity for edge prediction, and exploring the creation of 3D data using generative architectures.</p>

    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>Deep Learning</li>
        <li>NLP</li>
        <li>JavaScript</li>
        <li>Tensorflow</li>
        <li>Pytorch</li>
        <li>HuggingFace</li>
        <li>SQL</li>
        <li>React</li>
      </ul>
      <ul>        
        <li style={{ backgroundColor: '#fce4ec', color: '#880e4f', borderColor: '#f8bbd0' }}>Communication</li> 
        <li style={{ backgroundColor: '#fce4ec', color: '#880e4f', borderColor: '#f8bbd0' }}>Teamwork</li>
        <li style={{ backgroundColor: '#fce4ec', color: '#880e4f', borderColor: '#f8bbd0' }}>Problem Solving</li>
        <li style={{ backgroundColor: '#fce4ec', color: '#880e4f', borderColor: '#f8bbd0' }}>Leadership</li> 
        <li style={{ backgroundColor: '#fce4ec', color: '#880e4f', borderColor: '#f8bbd0' }}>Teaching</li> 
        </ul>
    </section>
    
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Senai CIMATEC",
      position: "R&D Data Science and AI",
      startDate: "Jan 2021",
      endDate: "Jan 2023",
      description:
        "Developed a methodology to identify bias and unfairness in AI classification systems and mitigate their harm when dealing with sensitive attributes",
      // imageUrl: "images/experience/tech-solutions.png", 
      // link: "https://dataanalytics.example.com", 
      technologies: ["Python", "Tensorflow", "Torch", "MySQL"],
    },
    {
      company: "Senai CIMATEC",
      position: "R&D LLM Developer",
      startDate: "Jan 2023",
      endDate: "Dec 2024",
      description:
        "Developed a pipeline to prepare and evaluate LLMs using real world data combined with Fine-Tuning, RAG and Quantization",
      // imageUrl: "images/experience/data-analytics.png", 
      // link: "https://dataanalytics.example.com", 
      technologies: ["Python", "SQL", "HuggingFace", "Docker", "MLFlow"],
    },
    {
      company: "Senai CIMATEC",
      position: "R&D LLM Developer",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      description:
        "Developed a Multi-model application to chat with a user while generating images",
      // imageUrl: "images/experience/data-analytics.png", 
      // link: "https://dataanalytics.example.com", 
      technologies: ["Python", "HuggingFace", "StableDiffusion", "Docker"],
    },
    {
      company: "Senai CIMATEC",
      position: "Data Cientist Intern",
      startDate: "Apr 2025",
      endDate: "Present",
      description:
        "Starts soon",
      // imageUrl: "images/experience/data-analytics.png", 
      // link: "https://dataanalytics.example.com", 
      technologies: ["Python", "SQL", "Pandas", "Matplotlib"],
    },
  
  ];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>

      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <img
              src={experience.imageUrl}
              alt={experience.company}
              className="experience-image"
            />
            <h3>{experience.company}</h3>
            <h4>{experience.position}</h4>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <p>{experience.description}</p>
            {/* <a href={experience.link}>View Details</a> */}
            <div className="technologies-container">
              <h3>Technologies Used</h3>
              <div className="technology-buttons">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-button">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <img src="images/projects/ticket-gen.png" alt="Ticket-Generator" className="project-image" />
          <h3>Ticket-Generator</h3>
          <p>FrontEnd to generate tickets for a fictional event</p>
          <a href="https://ticket-generator-bice-seven.vercel.app/">View Project</a>
        </div>

        <div className="project-card">
          <img src="images/projects/age-calc.png" alt="Age Calculator" className="project-image" />
          <h3>Age Calculator</h3>
          <p>A simple calculator for the age on people and objects</p>
          <a href="age-calculator-seven-eta.vercel.app">View Project</a>
        </div>

        <div className="project-card">
          <img src="images/projects/RPGen.jpg" alt="RPGen" className="project-image" />
          <h3>Age Calculator</h3>
          <p>RPG character generator for D&D Parties</p>
          <a href="age-calculator-seven-eta.vercel.app">View Project</a>
        </div>
    
        <div className="project-card">
          <img src="images/projects/fire-smoke-detection.png" alt="Fire Detection" className="project-image" />
          <h3>Fire and Smoke Detection</h3>
          <p>Development of a vision model to detect Wildfires and smoke.</p>
          <a href="https://colab.research.google.com/drive/1qPuXxn8GF00BnuCGLLSaDNBmPIhvRV6q?usp=sharing">View Project</a>
        </div>

        <div className="project-card">
          <img src="images/projects/3d-digits.png" alt="3D Digits Generator" className="project-image" />
          <h3>3D Digits Generator</h3>
          <p>Training of an Autoencoder AI to generate 3D Digits</p>
          <a href="https://colab.research.google.com/drive/1clZLIQvfyXJrKMXTSLuJUzDMFB-Btyl6?usp=sharing">View Project</a>
        </div>

        <div className="project-card">
          <img src="images/projects/MergeSort.png" alt="Merge Sort Animation" className="project-image" />
          <h3>Merge Sort Animation</h3>
          <p>Python animation to illustrate the merge sort algorithm</p>
          <a href="https://github.com/Gustavo-Cruzz/SortingAlgos">View Project</a>
        </div>

        <div className="project-card">
          <img src="images/projects/CDIA.png" alt="Deep Learning Study Path" className="project-image" />
          <h3>Deep Learning Study Path</h3>
          <p>Step by step study path for Deep Learning</p>
          <a href="https://quilled-scion-18d.notion.site/Capacita-o-Ci-ncia-de-Dados-IA-9f713b97a780412ba0d5408f6d45651f?pvs=4">View Project</a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Connect With Me</h2>
      <div className="contact-icons">
        <a href="http://www.linkedin.com/in/gorcruz" target="_blank" rel="noopener noreferrer">
          <img src="/images/logos/linkedin logo.png" width="36" height="36" alt="LinkedIn         " />
        </a> 
        
        <a href="http://lattes.cnpq.br/3562852034903040" target="_blank" rel="noopener noreferrer">
          <img src="images/logos/lattescnqp.png" width="42" height="36" alt="Lattes CNPQ         " />
        </a>

        <a href="https://github.com/Gustavo-Cruzz" target="_blank" rel="noopener noreferrer">
          <img src="images/logos/github-mark.svg" width="36" height="36" alt="GitHub         " />
        </a>  

        {/* <a href="https://www.goodreads.com/user/show/your-goodreads-id" target="_blank" rel="noopener noreferrer">
          <img src="placeholder_goodreads_logo.png" alt="Goodreads" />
        </a> */}
        
      </div>
      <p>Feel free to connect!</p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Gustavo Oliveira Ramos Cruz. All rights reserved.</p>
    </footer>
  );
};

// Main App component
function App() {
  // State to manage the current theme
  const [theme, setTheme] = useState('light');

  // Function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme choice
  };

  // Effect to set the theme on initial load from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
