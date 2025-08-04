import React from 'react';
import { planetData } from '../data/planetData';

const Status = ({ planetData: selectedPlanet }) => {
  const planet = selectedPlanet || planetData['EARTH'];

  const getImageStyle = (imagePath) => {
    return {
      backgroundImage: `url(${imagePath})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };
  };

  return (
    <section className="status">
      <div className="container">
        <div className="content">
          <div className="title" data-aos="fade-up">
            <h2>{planet.name.toUpperCase()}</h2>
            <p>{planet.description}</p>
          </div>

          <div className="planet" data-aos="zoom-in">
            <div
              className="earth"
              style={getImageStyle(planet.image)}
            >
              {/* Moons orbiting around the planet */}
              {planet.moons && planet.moons.length > 0 && (
                planet.moons.map((moon, index) => (
                  <div
                    key={index}
                    className="moon"
                    style={{
                      ...getImageStyle(moon.image),
                      animationDelay: `${index * 2}s`
                    }}
                  >
                    <div className="moon-desc">
                      <p>{moon.name}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Planet statistics displayed around the planet */}
            <div className="planet-stats">
              {Object.entries(planet.desc).map(([key, value], index) => (
                <div
                  key={index}
                  className={`desc desc-${index + 1}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="name">{key}</div>
                  <div className="value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status; 