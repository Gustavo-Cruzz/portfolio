import React from 'react';
import './App.css'; // Import the CSS for this component

// Define functional components for different sections
const Header = () => {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Hi, I'm Gustavo Cruz</h2>
        <p>A passionate AI Developer</p>
        <button>View My Projects</button>
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
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Natural Language Processing</li>
        <li>Placeholder Skill 5</li>
        <li>Placeholder Skill 5</li>
        <li>Placeholder Skill 5</li>
      </ul>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Project Title 1</h3>
          <p>Brief description of project 1.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project Title 2</h3>
          <p>Brief description of project 2.</p>
          <a href="#">View Project</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Connect With Me</h2>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
          <img src="placeholder_linkedin_logo.png" alt="LinkedIn" />
        </a>

        <a href="http://lattes.cnpq.br/your-lattes-id" target="_blank" rel="noopener noreferrer">
          <img src="placeholder_lattes_logo.png" alt="Lattes CNPQ" />
        </a>

        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <img src="placeholder_github_logo.png" alt="GitHub" />
        </a>

        <a href="https://www.goodreads.com/user/show/your-goodreads-id" target="_blank" rel="noopener noreferrer">
          <img src="placeholder_goodreads_logo.png" alt="Goodreads" />
        </a>
        
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
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;