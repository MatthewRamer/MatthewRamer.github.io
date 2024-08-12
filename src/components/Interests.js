import React from 'react';
import './Interests.css';

const Interests = () => {
  return (
    <section id="interests" className="interests">
      <h2>Personal Interests</h2>
      <div className="background-overlay"></div>
      <div className="interests-container">
        <div className="section-container">
            <h3>Basketball</h3>
            <div className="mbappe-image-container">
              <img src="/images/mbappe.jpg"
              alt="Mbappe" className="mbappe-image" style={{ maxWidth: '50%', height: 'auto' }}/>
            </div>
            <p>I started playing basketball in 7th grade. In high school I played for freshman year and sophomore year.
              I started playing volleyball for my school after that, but every weekend I would go to the park to ball up.
              That park in OC became a second home for me, sometimes I would be there from sunrise to sunset. I always played but never
              really enjoyed watching until college came around. Then I became an avid Lakers fan. It's a shame what happened to them this
              year. (2024). But luckily the Timberwolves took care of business and knocked the Nuggets out of the playoffs.
            </p>
            <p>UPDATE: Got into soccer recently (8/11/24) due to the euros, Mbappe is my favorite player :)</p>
        </div>
        <div className="section-container">
            <h3>Dojo</h3>
            <div className="cat-image-container">
        <img src="/images/Cat.jpg"
        alt="Cat" className="cat-image" style={{ maxWidth: '50%', height: 'auto' }}/>
            <p>Handsome young boy.</p>
            </div>
        </div>
        <div className="section-container">
            <h3>Hiking</h3>
            <div className="hike-image-container">
        <img src="/images/Hike.jpg"
        alt="Cat" className="cat-image" style={{ maxWidth: '90%', height: 'auto' }}/>
            <p>I enjoy hiking mountains and exploring nature. This is a view of Grand Terrace and Riverside.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
