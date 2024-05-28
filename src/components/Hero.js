import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to my Professional Website</h1>
        <p className="hero-subtitle">Created by Matthew Ramer for CS110 at the University of California, Riverside.</p>
        <a href="#about-me" className="hero-button">Skip to about me section</a>
      </div>
    </div>
  );
};

export default Hero;
