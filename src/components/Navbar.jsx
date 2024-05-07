import React from "react";

function Navbar() {

    const scrollToAbout = () => {

      const contentElement = document.getElementById('content');

      if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToHome = () => {

      const contentElement = document.getElementById('hero');

      if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <>

      <nav className="fixed flex items-center w-full justify-between bg-gradient-to-t from-transparent to-black">

      <div className="flex">
        <img src="./images/logo.png" className="h-20 ml-14 mt-5"></img>
      </div>

      <div className="flex md:hidden mr-12">
        <label className="swap swap-rotate">
          <input type="checkbox"/>
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        </label>
      </div>

      <div className="hidden md:flex gap-12 text-bold jutify-end mr-14">
        <a onClick={scrollToHome} class="group transition duration-300 hover:cursor-pointer">
          Home
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-400"></span>
        </a>
        <a onClick={scrollToAbout} class="group transition duration-300 hover:cursor-pointer">
          About Us
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-400"></span>
        </a>
        <a class="group transition duration-300 hover:cursor-pointer">
          Events
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-400"></span>
        </a>
        <a class="group transition duration-300 hover:cursor-pointer">
          Gallery
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-400"></span>
        </a>
        <a class="group transition duration-300 hover:cursor-pointer">
          Our Team
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-400"></span>
        </a>
      </div>

      </nav>

      </>
    );
}

export default Navbar;