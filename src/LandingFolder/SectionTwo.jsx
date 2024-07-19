import React from 'react';
import Image from '../assets/imgnetflix2.png';

function SectionTwo() {
  return (
    <div>
      <section className='bg-black text-white px-8 py-12 border-t-8 border-t-zinc-700'>
        <div className='flex lg:flex-row flex-col-reverse lg:items-start items-center justify-around gap-10 px-20 py-10'>
          <div className='lg:w-1/2 flex justify-center'>
            <img src={Image} alt={Image} loading='lazy' className='max-w-full h-auto' />
          </div>
          <div className='lg:w-1/2 flex flex-col gap-5 text-center'>
            <h1 className='lg:text-5xl text-3xl leading-[45px] font-bold font-sans break-words'>
              Download your shows to watch offline
            </h1>
            <div>
              <p className='text-lg lg:text-2xl font-semibold'>
                Save your favorites easily and always have <br className='lg:block hidden' />
                something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
