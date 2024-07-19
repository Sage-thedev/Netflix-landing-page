import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black text-white px-8 lg:px-20 py-12 border-t-8 border-t-zinc-700 font-light'> 
        <footer>
            <div>
                <Link to="/"><h3 className='underline pb-5 text-lg'>Questions? Contact Us.</h3></Link>
                <div className=''>
                    <ul className='flex flex-wrap'>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>FAQ</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Investors Relations</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Privacy</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Speed Test</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Help Center</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Jobs</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Cookie Preferences</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Legal Notices</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Account</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Ways to Watch</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Corporate Information</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Only on Netflix</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Media Center</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Terms of Use</Link></li>
                        <li className='w-1/2 lg:w-1/4 mb-4'><Link to="/" className='underline'>Contact Us </Link></li>
                    </ul>

                    <div>
                        <select name="" id="" className='bg-neutral-900 text-lg focus-within:visible border border-[#ffffff57] px-5 py-1 font-sans font-medium rounded-lg '>
                            <option value="">English</option>
                        </select>
                        </div>
                        <div className='py-5'>
                        <p className='font-light'>Netflix Nigeria</p>
                        </div>
                            
                </div>
                </div>

                
        </footer>
    </div>
  )
}

export default Footer