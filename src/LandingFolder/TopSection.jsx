import React from 'react'
import bg from '../assets/bgimg.jpeg'
import image from '../assets/Netflix-logo.png'
import { Link } from 'react-router-dom'

function TopSection() {
  return (
    <div>
      <section className='relative lg:h-screen p-5'>
        <div className='absolute inset-0 z-[-1]'>
          <img src={bg} alt={bg} className='w-full h-full object-cover brightness-50' />
        </div>
        <header className="flex items-center justify-between h-20 lg:px-10 px-5">
          <h2 className=' lg:w-40 md:w-30 w-40 '>
            <img src={image} alt={image} />
          </h2>
          <Link to="/signin">
            <button className='bg-red-600 text-white lg:py-2  py-1 px-2 lg:px-4 rounded font-sans font-semibold'>Sign In</button>
          </Link>
        </header>
        
        <div className='flex items-center justify-center lg:h-full h-auto p-3 px-10 text-white'>
          <div className='text-center text-xl flex flex-col items-center gap-5  px-10'>
            <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold'><span className='block md:hidden'>Unlimited movies, TV</span>
              <span className='block md:hidden'> shows, and more</span>
              <span className='hidden md:block'>Unlimited movies, TV shows, and more</span></h1>
            <p className='font-semibold'>Watch anywhere. Cancel anytime.</p>
            <p className='font-semibold'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex lg:flex-row md:flex-row flex-col gap-3 items-center'>
              <input type="email" className='border-2 border-[#ffffff33] p-3 rounded lg:w-96 w-80 bg-[#00000046]' placeholder='Email address' />
              <button className='flex items-center rounded font-sans font-semibold py-3 px-7 text-white bg-red-600'>
                Get Started <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopSection
