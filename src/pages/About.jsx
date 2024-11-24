import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import './About.css';  // Import the About page styles

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <div className="timeline">
        <div className="timeline__item">
          <FaReact size={50} />
          <h3>React</h3>
          <p>Building interactive UIs with React.js</p>
        </div>
        <div className="timeline__item">
          <FaHtml5 size={50} />
          <h3>HTML5</h3>
          <p>Crafting responsive web structures</p>
        </div>
        <div className="timeline__item">
          <FaCss3Alt size={50} />
          <h3>CSS3</h3>
          <p>Styling modern web interfaces with CSS3</p>
        </div>
        <div className="timeline__item">
          <FaNodeJs size={50} />
          <h3>Node.js</h3>
          <p>Building backend services with Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default About;
