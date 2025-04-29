import React from 'react'
import { servicesdataicons } from '../assets/assets'
import { Link } from 'react-router-dom'

const ServicesMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='services'>
      <h1 className='text-3xl font-medium '>Find by Services</h1>
      <p className='md:w-1/3 text-center text-sm'>simply browse through our extensive list of services and<br/> schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {servicesdataicons.map((item, index)=>(
            <Link onClick={()=>scrollTo(0,0)}className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/services/${item.service}`}>
                <img className='w-16 sm:w-24 mb-2 dark-mode-icon' src={item.image} alt="" />
                <p>{item.service}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default ServicesMenu
