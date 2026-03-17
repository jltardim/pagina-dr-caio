import React, { useState, useEffect } from 'react';
import { LOGO_IMG_SRC } from '../constants';
import ImageWithFallback from './ImageWithFallback';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-center ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Logo - Maior e Centralizada */}
        <div className="flex items-center justify-center w-full">
          <ImageWithFallback
            src={LOGO_IMG_SRC}
            alt="Dr. Caio Tardim Neurologista"
            className={`object-contain transition-all duration-300 mix-blend-multiply ${isScrolled ? 'h-20' : 'h-28 md:h-36'
              }`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;