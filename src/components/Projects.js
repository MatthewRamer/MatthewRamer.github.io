import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src="images/toyota_screenshot.jpg" alt="Toyota Car Classification System" className="project-image" />
          <h3 className="project-title">Toyota Car Model Classification System</h3>
          <p className="project-description">
            Developed a web application for classifying car models based on images using Python, Apache Spark, and HDFS. 
            The project involved integrating MySQL for storing HDFS links and creating a simple HTML frontend for user interaction. 
            The project included a comprehensive 27-page report detailing methodology and results.
          </p>
          <a href={"/TCMCS_report.pdf"} target="_blank" rel="noopener noreferrer" className="project-link">View Project Report</a>
        </div>
        <div className="project-card">
          <img src="/images/blogme_screenshot.jpg" alt="BlogMe" className="project-image" />
          <h3 className="project-title">BlogMe</h3>
          <p className="project-description">
            Created a personal blogging site using React, HTML, CSS, and MongoDB. 
            Implemented Google authentication with Firebase and allowed users to create, manage, and interact with blog posts and comments. 
            This project focused on full-stack development and user authentication.
          </p>
          <a href="https://github.com/MatthewRamer/blog-me" target="_blank" rel="noopener noreferrer" className="project-link">View Project Repository</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
