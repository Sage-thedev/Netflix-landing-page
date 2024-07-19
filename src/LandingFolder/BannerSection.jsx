import React from 'react';
import image from '../assets/imgnetflix.png';

function BannerSection() {
  return (
    <div>
      <section className='bg-black text-white px-8 py-12 border-t-8 border-t-zinc-700'>
        <div className='flex flex-col lg:flex-row lg:py-20 py-10 justify-around items-center lg:items-start gap-10'>
          <div className='flex flex-col gap-5 lg:w-1/2 px-5 lg:px-0'>
            <h1 className='text-4xl lg:text-5xl font-sans font-bold leading-tight text-center'>
              Enjoy on your TV
            </h1>
            <p className='text-lg lg:text-2xl font-semibold leading-normal text-center'>
              Watch on Smart TVs, Playstation, Xbox, 
              <span className='block lg:hidden'> Chromecast, Apple TV, Blu-ray players, and more.</span>
              <span className='hidden lg:block'>
             Chromecast, Apple TV, Blu-ray players,
                <br className='hidden lg:block' />
                and more.
              </span>
            </p>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <img src={image} alt="Netflix TV" className='max-w-full h-auto' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerSection;
