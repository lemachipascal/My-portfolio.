import React, { useEffect } from 'react';
import './Home.css';


const Home = () => {
  useEffect(() => {
    // Adding a smooth scroll effect on page load
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">Hello, I'm Lemachi</h1>
        <p className="home__subtitle">A passionate Junior Software Developer</p>
        <a href="about" className="btn btn-primary">Learn More</a>
      </div>
      <div className="home__background">
        {/* Optional: You can add a background animation or image here */}
      </div>
    </div>
  );
};

export default Home;
