import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[var(--primary)] rounded-lg px-6 md:px-10 lg:px-20">
      {/*Left side*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className="text-3xl m-auto md:m-0 md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Scheduling Made Simple <br/> Quick, Clear, and Reliable
        </p>
        <p className='text-white text-sm font-light text-center sm:text-left'>
          Easily manage appointments, reschedule with a click, and stay organized <br className='hidden sm:block'/> all in one intuitive platform designed to save you time and reduce no-shows.
        </p>
        <a href="#services" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 sm:text-center hover:scale-105 transition-all duration-300'>
          Book Appointment
        </a>
      </div>
      {/*right side*/}
      <div className="md:w-1/2 relative"> 
        <img className="w-full md:absolute top-0 bottom-0 left-10 h-full rounded-lg" src={assets.myheader_img} alt=""/>
      </div>
    </div>
  )
}

export default Header
