import React from 'react';

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="content">
          <div className="title" data-aos="fade-up">
            <h2>WHY US</h2>
            <h1>Choose Your Perfect Space Adventure</h1>
            <p>
              Discover the most fascinating destinations in our solar system and beyond. 
              Each journey is carefully crafted to provide an unforgettable experience.
            </p>
          </div>
          
          <div className="reason">
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <i data-feather="zap"></i>
              </div>
              <div className="desc">
                <h3>Lightning Fast</h3>
                <p>Experience the thrill of traveling at incredible speeds through space.</p>
              </div>
            </div>
            
            <div className="card" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <i data-feather="shield"></i>
              </div>
              <div className="desc">
                <h3>Safe & Secure</h3>
                <p>Your safety is our top priority with advanced protection systems.</p>
              </div>
            </div>
            
            <div className="card" data-aos="fade-up" data-aos-delay="600">
              <div className="icon">
                <i data-feather="star"></i>
              </div>
              <div className="desc">
                <h3>Premium Experience</h3>
                <p>Luxury accommodations and world-class service throughout your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 