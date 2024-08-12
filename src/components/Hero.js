import React from 'react';
import TypingText from './TypingText';
import './Hero.css';

const Hero = () => {
  
  const texts = [
    'Software Engineer',
    'Information Technology Specialist',
    'Web Developer'
  ];

  return (
    <div id="hero" className="hero">
    <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">My Professional Website</h1>
        <p className="hero-subtitle">
          By Matthew Ramer, <TypingText texts={texts} />
        </p>
        <a href="#about-me" className="hero-button">Skip to about me section</a>
      </div>
    </div>
  );
};

export default Hero;
