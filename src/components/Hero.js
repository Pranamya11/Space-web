import React from 'react';
import TextType from './TextType';

const Hero = () => {
  const handleLearnMoreClick = () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSentenceComplete = (text, index) => {
    console.log(`Completed typing: ${text}`);
  };

  return (
    <section className="hero">
      <div className="moon"></div>
      <div className="container">
        <div className="content">
          <div className="text">
            <h1 data-aos="fade-up">Unveiling the Future of Space</h1>
            <div className="hero-description" data-aos="fade-up" data-aos-delay="200">
              <TextType 
                text={[
                  "Venture into the boundless expanse of the cosmos as we push the limits of discovery, redefining the frontiers of space exploration and unleashing innovations that will transform our journey among the stars.",
                  "Explore the mysteries of distant galaxies and unlock the secrets of the universe through cutting-edge technology and human ingenuity.",
                  "Join us on an extraordinary journey beyond Earth's boundaries, where science meets imagination and dreams become reality."
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="hero-text-type"
                onSentenceComplete={handleSentenceComplete}
                textColors={["#a4a4a4", "#82c8e5", "#a4a4a4"]}
              />
            </div>
            <a onClick={handleLearnMoreClick} data-aos="fade-up" data-aos-delay="400">
              Learn More
              <i data-feather="arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 