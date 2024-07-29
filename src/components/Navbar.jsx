import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import './main.css';

function Navbar() {
  const location = useLocation();
  const [currPage, setCurrPage] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setCurrPage(path || 'home');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToHome = () => {
    const contentElement = document.getElementById('hero');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className={`z-100 ${ currPage === 'home' ? 'openingnav':''} fixed flex items-center w-full justify-between bg-gradient-to-t from-transparent to-black transition-transform duration-300 ${isNavbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="flex">
          <Link to='/'> <img loading='lazy' src="./images/logo.png" className="h-20 ml-6 md:ml-14 mt-5" alt="Logo" /> </Link>
        </div>

        <div className="flex md:hidden mt-5 mr-8 z-100 wht">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={toggleDrawer} checked={isDrawerOpen} readOnly />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
        </div>

        <div className="hidden md:flex gap-12 text-bold justify-end mr-14">
          <Link to="/" onClick={scrollToHome} className={`group transition duration-300 hover:cursor-pointer text-white`}>
            Home
            <span className={`block ${currPage === 'home' ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
          </Link>
          <Link to="/events" className={`group transition duration-300 hover:cursor-pointer text-white`}>
            Events
            <span className={`block ${currPage === 'events' ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
          </Link>
          <Link to="/gallery" className={`group transition duration-300 hover:cursor-pointer text-white`}>
            Gallery
            <span className={`block ${currPage === 'gallery' ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
          </Link>
          <Link to="/team" className={`group transition duration-300 hover:cursor-pointer text-white`}>
            Our Team
            <span className={`block ${currPage === 'team' ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
          </Link>
        </div>
      </nav>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center md:hidden fade-in">
          <button onClick={toggleDrawer} className="absolute top-10 right-10 text-white text-3xl">
            &times;
          </button>
          <Link to="/" onClick={() => { setCurrPage('home'); setIsDrawerOpen(false); }} className={`text-2xl my-4 ${currPage === 'home' ? 'text-blue-300' : 'text-white'}`}>
            Home
          </Link>
          <Link to="/events" onClick={() => { setCurrPage('events'); setIsDrawerOpen(false); }} className={`text-2xl my-4 ${currPage === 'events' ? 'text-blue-300' : 'text-white'}`}>
            Events
          </Link>
          <Link to="/gallery" onClick={() => { setCurrPage('gallery'); setIsDrawerOpen(false); }} className={`text-2xl my-4 ${currPage === 'gallery' ? 'text-blue-300' : 'text-white'}`}>
            Gallery
          </Link>
          <Link to="/team" onClick={() => { setCurrPage('team'); setIsDrawerOpen(false); }} className={`text-2xl my-4 ${currPage === 'team' ? 'text-blue-300' : 'text-white'}`}>
            Our Team
          </Link>
        </div>
      )}

 
    </>
  );
}

export default Navbar;
