import React from 'react';
import CircularText from './CircularText';

const Header = ({ isHidden }) => {
  const handleExploreClick = () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={isHidden ? 'hidden' : ''}>
      <div className="container">
        <div className="content">
          <div className="logo">
            <CircularText
              text="SPACE*EXPLORER*"
              onHover="speedUp"
              spinDuration={20}
              className="header-logo"
            />
          </div>
          <div className="extra-nav">
            <button onClick={handleExploreClick}>
              Let's Explore!
              <i data-feather="globe"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 