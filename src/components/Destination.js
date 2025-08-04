import React from 'react';
import { planetData } from '../data/planetData';

const Destination = ({ onPlanetSelect }) => {
  const destinations = [
    { key: 'SATURN', name: 'SATURN', image: '/assets/saturn.jpeg' },
    { key: 'EARTH', name: 'EARTH', image: '/assets/earth.jpg' },
    { key: 'JUPITER', name: 'JUPITER', image: '/assets/saturn.jpeg' },
    { key: 'MERCURY', name: 'MERCURY', image: '/assets/mercury.jpeg' },
    { key: 'MARS', name: 'MARS', image: '/assets/mars.jpeg' },
    { key: 'VENUS', name: 'VENUS', image: '/assets/mercury.jpeg' },
    { key: 'URANUS', name: 'URANUS', image: '/assets/neptune.jpeg' },
    { key: 'NEPTUNE', name: 'NEPTUNE', image: '/assets/neptune.jpeg' }
  ];

  const handleReadMore = (planetKey) => {
    const data = planetData[planetKey];
    if (data && onPlanetSelect) {
      onPlanetSelect(data);
      // Scroll to status section
      const statusSection = document.querySelector('.status');
      if (statusSection) {
        statusSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.log('Planet data not found for key:', planetKey);
    }
  };

  const handleSeeMore = () => {
    alert('More destinations coming soon!');
  };

  return (
    <section className="destination">
      <div className="container">
        <div className="content">
          <div className="title" data-aos="fade-up">
            <h1>MOST POPULAR DESTINATION</h1>
            <p>Explore the most fascinating celestial bodies in our solar system</p>
            <a onClick={handleSeeMore}>
              See More
              <i data-feather="arrow-right"></i>
            </a>
          </div>

          {destinations.map((dest, index) => (
            <div 
              key={dest.key}
              className={`items ${dest.name.toLowerCase()}`}
              style={{ 
                backgroundImage: `url(${dest.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h1>{dest.name}</h1>
              <a onClick={() => handleReadMore(dest.key)}>
                Read More
                <i data-feather="arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination; 