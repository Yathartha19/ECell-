import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed right-4 sm:right-8 bottom-6 sm:bottom-12 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToHome}
    >
      <img src='./images/uparrow.png' className="h-12" alt="Scroll to top" />
    </button>
  );
};

export default ScrollButton;
