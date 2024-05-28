import React from 'react';
import './Interests.css';
import { motion } from 'framer-motion';

const Interests = () => {
  return (
    <section id="interests" className="interests">
      <div className="background-overlay"></div>
      <motion.div className="section-container"  whileHover={{scale: 1.3, zIndex: 1}}>
        <div className="section">
          <h2>Basketball</h2>
          <p>I started playing basketball in 7th grade. In high school I played for freshman year and sophomore year.
            I started playing volleyball for my school after that, but every weekend I would go to the park to ball up.
            That park in OC became a second home for me, sometimes I would be there from sunrise to sunset. I always played but never
            really enjoyed watching until college came around. Then I became an avid Lakers fan. It's a shame what happened to them this
            year. (2024). But luckily the Timberwolves took care of business and knocked the Nuggets out of the playoffs.
          </p>
        </div>
      </motion.div>
      <motion.div className="section-container"  whileHover={{scale: 1.3, zIndex: 1}}>
        <div className="section">
          <h2>Interests2</h2>
          <div className="cat-image-container">
      <img src="../../public/images/Cat.jpg" alt="Cat" className="cat-image" />
          </div>
          <p>Insert interests content here...</p>
        </div>
      </motion.div>
      <motion.div className="section-container"  whileHover={{scale: 1.3, zIndex: 1}}>
        <div className="section">
          <h2>Interests3</h2>
          <p>Insert interests content here...</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Interests;
