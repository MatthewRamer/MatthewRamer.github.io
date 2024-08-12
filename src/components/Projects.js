import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src="path/to/image1.jpg" alt="Toyota Car Classification System" className="project-image" />
          <h3 className="project-title">Toyota Car Model Classification System</h3>
          <p className="project-description">
            Developed a web application for classifying car models based on images using Python, Apache Spark, and HDFS. 
            The project involved integrating MySQL for storing HDFS links and creating a simple HTML frontend for user interaction. 
            The project included a comprehensive 27-page report detailing methodology and results.
          </p>
          <a href="https://example.com/toyota-car-classification" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <img src="path/to/image2.jpg" alt="BlogMe" className="project-image" />
          <h3 className="project-title">BlogMe</h3>
          <p className="project-description">
            Created a personal blogging site using React, HTML, CSS, and Express. 
            Implemented Google authentication with Firebase and allowed users to create, manage, and interact with blog posts and comments. 
            This project focused on full-stack development and user authentication.
          </p>
          <a href="https://example.com/blogme" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
