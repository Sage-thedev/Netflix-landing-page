import React from 'react'
import Image from '../assets/imgnetflix3.png'
function SectionFour() {
  return (
    <div>
        <section className='bg-black text-white px-8 py-12 border-t-8 border-t-zinc-700'>
        <div className='flex lg:flex-row flex-col-reverse lg:items-center items-center justify-around gap-10 px-20 py-10'>
          <div className='lg:w-1/2 flex justify-center'>
            <img src={Image} alt={Image} className='max-w-full h-auto' />
          </div>
          <div className='flex flex-col gap-5 text-center'>
            <h1 className='lg:text-5xl text-3xl leading-[45px] font-bold font-sans break-words'>
            Create profiles for kids
            </h1>
            <div>
              <p className='text-lg lg:text-2xl font-semibold'>
              Send kids on adventures with their favorite <br className='lg:block hidden' />
              characters in a space made just for them—free  <br className='lg:block hidden' /> with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionFour