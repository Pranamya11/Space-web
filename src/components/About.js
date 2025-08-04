import React from 'react';

const About = () => {
  const handleLearnMoreClick = () => {
    alert('Learn more about our space exploration missions!');
  };

  return (
    <section className="about">
      <div className="container">
        <div className="content">
          <div className="text-action" data-aos="fade-up">
            <h2>ABOUT US</h2>
            <h1>Pioneering the Future of Space Travel</h1>
            <p>
              We are dedicated to pushing the boundaries of human exploration and discovery. 
              Our mission is to make space travel accessible to everyone while advancing 
              our understanding of the cosmos.
            </p>
            <a onClick={handleLearnMoreClick} data-aos="fade-up" data-aos-delay="200">
              Learn More
              <i data-feather="arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 