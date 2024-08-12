import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="background-overlay"></div>
      <div className="containers-wrapper">
        <div className="bio-container">
          <div className="section">
            <h2>Biography</h2>
            <div className="bio-content">
            <img src={"/images/profile.jpg"} alt="Matthew Ramer" className="bio-image" />
            <div className="bio-text">
              <p>I am a Computer Science graduate from the University of California, Riverside, with a strong foundation in software development, 
                web technologies, and embedded systems. My academic journey has equipped me with a comprehensive understanding of core computer science concepts, including computer security, 
                data structures, algorithms, and software engineering.
              </p>
              <p>
                I have always been passionate about technology and problem-solving. Throughout my studies, I have developed practical skills through hands-on projects and coursework. 
                My technical expertise spans various programming languages and frameworks, including Java, Python, C++, and React.
              </p>
              <p>
                In addition to my technical skills, I am an avid sports enthusiast with interests in basketball, volleyball, and tennis. 
                I also enjoy hiking and game development, which keep me engaged and constantly learning new things. One of my most cherished hobbies is working on my manual 6-speed 2017 Subaru BRZ, 
                which reflects my dedication and attention to detail.
              </p>
              <p>
                I am actively seeking an IT position where I can leverage my skills in software development and project management to contribute to innovative solutions and drive organizational success. 
                As a UCR alumni, I am eager to apply my knowledge and enthusiasm to new challenges in the tech industry.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="skills-container">
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
        - State Machines<br />
        - Operating Systems<br /></p>
          </div>
        </div>

        {/* <div className="section-container">
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
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
