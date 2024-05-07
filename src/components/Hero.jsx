import React, { useState } from 'react';

const Hero = () => {

  const scrollToAbout = () => {

    const contentElement = document.getElementById('content');

    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    './images/TLOS.png',
    './images/ESUMMIT.png',
    './images/supra.png',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>

    <div id="hero" className="hero min-h-screen">
      <div className="hero-overlay flex justify-center items-center bg-[url('./images/zuhahaha.png')] bg-cover bg-center h-screen">
      </div>
      <div className="text-center">
      <h1 className=" mb-6 text-4xl md:hidden font-bold text-">E - Cell</h1>
      <h1 className=" mb-6 hidden md:flex text-6xl lg:text-7xl xl:text-8xl font-bold">Entrepreneurship Cell</h1>
      <h4 className=" mb-16 text-3xl lg:text-4xl xl:text-5xl">PES University</h4>
      <button className="btn btn-outline" onClick={scrollToAbout}>Explore</button>
      </div>
    </div>

    <div id="content" className="flex justify-center w-full h-screen bg-[url('./images/supra.png')] bg-cover bg-center">
        <div className="flex flex-col mt-40 items-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">ABOUT US</h1>
          <p className="flex mt-10 md:mt-16 ml-24 md:ml-40 mr-24 md:mr-40 text-xl lg:text-2xl xl:text-3xl font-thin text-center">
            E-Cell, IIT Kanpur aims to induce an entrepreneurial mindset into the students and air an<br/>
            innovative streak in them. We are here to water the ‘Ideas’ in the bud and help them bloom
            into impactful endeavors through networking student enterprises from campus to incubators,
            seeding funds and angel investors to transform the newly proposed ideas into successful start-ups.
          </p>
          <h1 className="mt-72 mb-16 text-4xl font-bold">EVENTS</h1>
        </div>
    </div>

    <div className="flex h-screen bg-black">
      <div className="container mx-auto my-4">
        <div className="relative w-full mt-16">
          <div className="overflow-hidden h-64">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover" />
          </div>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 h-full transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-25 text-white">
            ⇐
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 h-full transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-25 text-white">
            ⇒
          </button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Hero