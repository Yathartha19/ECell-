import { useEffect } from 'react';
import './main.css';

const Hero = () => {

  // useEffect(() => {
  //   const contentElement = document.getElementById('hero');
  //   if (contentElement) {
  //     contentElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // } , []);

  const scrollToAbout = () => {

    const contentElement = document.getElementById('about');

    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

    <div id="hero" className="hero min-h-screen">
      <div className="hero-overlay flex justify-center items-center h-screen" style={{ backgroundImage: "url('./images/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="text-center wht pt-12">
        <h1 className=" mb-6 text-4xl md:hidden font-bold text-">E - Cell</h1>
        <h1 className=" mb-6 hidden md:flex text-6xl lg:text-7xl xl:text-8xl font-bold wht opening">Entrepreneurship Cell</h1>
        <h4 className=" mb-16 text-3xl lg:text-4xl xl:text-5xl wht opening">PES University</h4>
        <button className="openingnav border rounded-md py-2 px-4 hover:bg-white hover:text-black" onClick={scrollToAbout}>Explore</button>
      </div>
    </div>

    <div id="about">
      <img src='./images/content.png' className='absolute -z-10 w-full' />
      <div className="flex flex-col items-center wht">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold pt-40">About Us</h1>
          <div className="flex flex-row items-cente">
            <p className="blck flex mt-10 md:mt-16 ml-24 md:ml-40 mr-24 md:mr-40 text-xl lg:text-2xl xl:text-3xl font-thin text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec diam eu lectus venenatis vulputate. Sed tincidunt mi nec ligula bibendum, ac fringilla mauris sagittis. Cras euismod nisi a purus vehicula, id egestas justo dictum. Phasellus quis tortor ac turpis facilisis vehicula et ut lectus. Integer vehicula sapien nec ante fermentum, non facilisis erat cursus. Aliquam erat volutpat. Mauris at facilisis ligula, sed varius justo.
            </p>
          </div>
        </div>
    </div>
    <br/>

    <div id="content" className="flex flex-col justify-center w-full bg-gradient-to-b from-black  to-black">

        <div className="flex flex-col mt-28 items-center wht">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Our Goals</h1>
          <p className="blck flex mt-10 md:mt-16 ml-24 md:ml-40 mr-24 md:mr-40 text-xl lg:text-2xl xl:text-3xl font-thin text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec diam eu lectus venenatis vulputate. Sed tincidunt mi nec ligula bibendum, ac fringilla mauris sagittis. Cras euismod nisi a purus vehicula, id egestas justo dictum. Phasellus quis tortor ac turpis facilisis vehicula et ut lectus. Integer vehicula sapien nec ante fermentum, non facilisis erat cursus. Aliquam erat volutpat. Mauris at facilisis ligula, sed varius justo.
          </p>
        </div>
        
        
        <div className='flex flex-col justify-center items-center wht mt-32 mb-20'>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Events and Initiatives</h1>

          <div className='flex flex-col justify-center items-center mt-20 gap-16'>

            <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
              <img src='./images/esummit.png' className='low:h-20 md:h-32 lg:h-64' />
              <div className='flex flex-col items-center md:items-start'>
                <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold'>ESummit</h2>
                <p className='text-center text-lg lg:text-xl xl:text-2xl font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam nec diam eu lectus venenatis vulputate.</p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
              <img src='./images/esummit.png' className='h-20 md:hidden' />
              <div className='flex flex-col items-center md:items-start'>
                <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold'>TLOS</h2>
                <p className='text-center text-lg lg:text-xl xl:text-2xl font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam nec diam eu lectus venenatis vulputate.</p>
              </div>
              <img src='./images/esummit.png' className='hidden md:flex low:h-20 md:h-32 lg:h-64' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
              <img src='./images/esummit.png' className='low:h-20 md:h-32 lg:h-64' />
              <div className='flex flex-col items-center md:items-start'>
                <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold'>Ventures</h2>
                <p className='text-center text-lg lg:text-xl xl:text-2xl font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam nec diam eu lectus venenatis vulputate.</p>
              </div>
            </div>
          
          </div>

        </div>
      
    </div>

    </>
  )
}

export default Hero