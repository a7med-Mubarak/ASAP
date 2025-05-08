import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNav = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`bg-navbar backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-emerald-600 text-3xl md:text-4xl font-bold cursor-pointer hoverASAP"
          onClick={() => handleNav('/')}
        >
          ASAP
        </h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-emerald-600 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        <div className="hidden md:flex space-x-8 text-lg md:text-xl font-medium">
          <a onClick={() => handleNav('/')} className="hover:text-emerald-900 text-emerald-600 transition duration-300 cursor-pointer">
            Home
          </a>
          <a onClick={() => handleNav('/Analysis')} className="hover:text-emerald-900 text-emerald-600 transition duration-300 cursor-pointer">
            Match Analysis
          </a>
          <a onClick={() => handleNav('/MatchDay')} className="hover:text-emerald-900 text-emerald-600 transition duration-300 cursor-pointer">
            Match Day
          </a>
          <a onClick={() => handleNav('/ContactUs')} className="hover:text-emerald-900 text-emerald-600 transition duration-300 cursor-pointer">
            Contact Us
          </a>
          <a onClick={() => handleNav('/AboutUs')} className="hover:text-emerald-900 text-emerald-600 transition duration-300 cursor-pointer">
            About Us
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-inherit shadow-md text-emerald-600">
          <a onClick={() => handleNav('/')} className="block cursor-pointer">
            Home
          </a>
          <a onClick={() => handleNav('/Analysis')} className="block cursor-pointer">
            Match Analysis
          </a>
          <a onClick={() => handleNav('/MatchDay')} className="block cursor-pointer">
            Match Day
          </a>
          <a onClick={() => handleNav('/ContactUs')} className="block cursor-pointer">
            Contact Us
          </a>
          <a onClick={() => handleNav('/AboutUs')} className="block cursor-pointer">
            About Us
          </a>
        </div>
      )}
    </nav>
  );
}
