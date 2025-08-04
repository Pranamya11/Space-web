import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Status from './components/Status';
import Destination from './components/Destination';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ToTop from './components/ToTop';

function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    // Initialize AOS with enhanced settings for upward animations
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to repeat on scroll
      offset: 50,
      delay: 0,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom',
      mirror: true, // Enable mirror effect for upward scroll
      disable: 'mobile' // Disable on mobile for better performance
    });

    // Initialize feather icons after a short delay
    const initFeather = () => {
      if (window.feather) {
        window.feather.replace();
      }
    };

    // Wait for DOM to be ready
    setTimeout(initFeather, 100);

    // Scroll event listener
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const heroSection = document.querySelector('.hero');
      
      if (heroSection) {
        const heroSectionOffsetTop = heroSection.offsetTop;
        setShowToTop(scrollTop > heroSectionOffsetTop);
      }

      // Header hide/show logic
      if (scrollTop > 100) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial scroll event
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanetSelect = (planetData) => {
    setSelectedPlanet(planetData);
    
    // Scroll to the Status section after selecting a planet
    setTimeout(() => {
      const statusSection = document.querySelector('.status');
      if (statusSection) {
        statusSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="App">
      <Header isHidden={isHeaderHidden} />
      <Hero />
      <WhyUs />
      <About />
      <Status planetData={selectedPlanet} />
      <Destination onPlanetSelect={handlePlanetSelect} />
      <Contact />
      <Footer />
      <ToTop show={showToTop} onClick={scrollToTop} />
      <Chatbot />
    </div>
  );
}

export default App; 