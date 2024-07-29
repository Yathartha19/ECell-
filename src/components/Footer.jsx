import React from 'react';
import './main.css';

const Footer = () => {
  return (
    <>
    <hr className="border-gray-500 w-full" />
    <footer className="graybg text-white py-10 pt-10" style={{ backgroundImage: "url('./images/final.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col w-full justify-center items-center">
            <div className='flex flex-row items-center justify-start gap-4'>
              <img src='./images/pes.png' alt="Logo" className="low:h-14 lg:h-20 mb-4" />
              <img src='./images/logo.png' alt="Logo" className="low:h-14 lg:h-20 mb-4" />
            </div>
            <img src='./images/cie.png' alt="Logo" className="low:h-14 lg:h-20" />
          </div>
          <div className='hidden sm:flex flex-col w-full justify-between items-center'>
            <div className="flex flex-col items-center justify-between pt-4">
              <h2 className="low:text-low lg:text-xl font-bold mb-4">Quick Links</h2>
              <ul className='flex flex-row low:gap-4 lg:gap-8' >
                <li className='low:text-xs lg:text-sm'><a href="/" className="hover:underline ">Home</a></li>
                <li className='low:text-xs lg:text-sm'><a href="/events" className="hover:underline">Events</a></li>
                <li className='low:text-xs lg:text-sm'><a href="/gallery" className="hover:underline">Gallery</a></li>
                <li className='low:text-xs lg:text-sm'><a href="/team" className="hover:underline">Our Team</a></li>
              </ul>
            </div>
            <div className="flex justify-end gap-6 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/facebook.png" alt="Facebook" className="low:h-6 lg:h-8"/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/twitter.png" alt="Twitter" className="low:h-6 lg:h-8"/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/instagram.png" alt="Instagram" className="low:h-6 lg:h-8"/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/linkedin.png" alt="LinkedIn" className="low:h-6 lg:h-8"/>
              </a>
            </div>
          </div>
          <div className='flex flex-row w-full justify-center items-center gap-20 mt-8 sm:mt-0'>
            <div className="flex flex-col">
              <h2 className="low:text-low lg:text-xl font-bold mb-4">Contact Us</h2>
              <p className='low:text-xs lg:text-sm'>Head1: +91 6969696969</p>
              <p className='low:text-xs lg:text-sm'>Head2: +91 6969696969</p>
              <p className='low:text-xs lg:text-sm'>Head3: +91 6969696969</p>
              <p className='low:text-xs lg:text-sm'>placeholder@gmail.com</p>
            </div>
          </div>
          <div className="flex sm:hidden justify-center gap-6 pt-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/facebook.png" alt="Facebook" className="low:h-6 lg:h-8"/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/twitter.png" alt="Twitter" className="low:h-6 lg:h-8"/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/instagram.png" alt="Instagram" className="low:h-6 lg:h-8"/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="./images/linkedin.png" alt="LinkedIn" className="low:h-6 lg:h-8"/>
              </a>
            </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
