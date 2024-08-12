import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name">Matthew Ramer</span>
        <a href="https://github.com/MatthewRamer" className="navbar-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/matthew-ramer" className="navbar-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <ul className="nav-menu">
      <li className="nav-item">
          <a href="#hero" className="nav-links">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about-me" className="nav-links">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-links">
            My Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#interests" className="nav-links">
            Personal Interests
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-links" target="_blank" rel="noopener noreferrer">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
