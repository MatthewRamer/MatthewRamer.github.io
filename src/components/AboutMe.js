import React from 'react';
import './AboutMe.css';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="background-overlay"></div>
      <motion.div className="section-container"  whileHover={{scale: 1.3, zIndex: 1}}>
        <div className="section">
          <h2>Biography</h2>
          <p>I'm a 22-year-old senior at the University of California, Riverside, about to graduate with a bachelor's degree in computer science.
I am from Orange County, where I graduated from Villa Park High School.
Beyond school, I'm also an avid sports enthusiast, finding joy in playing basketball, volleyball, and tennis. I also enjoy hiking and game development.
My most expensive hobby is my car, a manual 6-speed 2017 Subaru BRZ. Here is my <a href="https://raw.githubusercontent.com/MatthewRamer/MatthewRamer.github.io/413862e646aadebbecfa43e3ef24022fb664a512/public/resume%20no%20address.pdf" target="_blank" rel="noreferrer">resume.</a>
</p>
        </div>
      </motion.div>
      <motion.div className="section-container2"  whileHover={{scale: 1.3, zIndex: 1}}>
        <div className="section">
          <h2>Education/Skills</h2>
          <p><strong>Education:</strong><br />
      - Villa Park High School, 2020<br />
      &nbsp;&nbsp; - High School Diploma<br />
      - University of California, Riverside, 2024<br />
      &nbsp;&nbsp; - Bachelor's in Computer Science<br /><br />
      <strong>Programming Languages:</strong><br />
      - React<br />
      - Rust<br />
      - C#<br />
      - C++<br />
      - Java<br />
      - Python<br />
      - JavaScript<br />
      - Assembly<br /><br />
      <strong>Technical Skills:</strong><br />
      - Spark<br />
      - Convolutional Neural Networks (CNNs)<br />
      - HTML<br />
      - Databases<br />
      - Game Development<br />
      - Machine Learning<br />
      - Compiler Design<br />
      - Computer Security<br />
      - Operating Systems<br /></p>
        </div>
      </motion.div>
      <motion.div className="section-container"  whileHover={{scale: 1.3, zIndex: 1}}>
        <div className="section">
          <h2>Experience</h2>
          <div>
      <h3>BJ’s Bar and Grill - Dishwasher/Line cook</h3>
      <p>July 2022 - August 2022</p>
      <ul>
        <li>Hired as a dishwasher, promoted to line cook and alternated between positions as needed</li>
      </ul>
    </div>
    <div>
      <h3>Orange County Fair - Maintenance Apprentice</h3>
      <p>July 2021 - August 2021</p>
      <ul>
        <li>Shadowed maintenance workers with a variety of tasks, including but not limited to:
          <ul> Forklifting, Compacting, Landscaping, Plumbing</ul>
        </li>
      </ul>
    </div>
    <div>
      <h3>Target - Fulfillment Expert</h3>
      <p>October 2019 - January 2020</p>
      <ul>
        <li>Prepared online orders for bagging while taking care of guests’ needs on the sales floor</li>
        <li>Fulfilled other positions when needed</li>
      </ul>
    </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
