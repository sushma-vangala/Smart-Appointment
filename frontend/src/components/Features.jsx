import React from 'react'
import { features } from '../assets/assets'

const Features = () => {


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Features</h1>
      <p className='sm:w-1/3 text-center text-sm'>It isn't just another online booking. Its comprehensive solution for organizing all your activities</p>
      <div className='w-full grid grid-cols-4 justify-center items-center gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {features.slice(0,4).map((item, index) => (
            <div className='border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500 h-120' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />   
                <div className='w-2/3 p-4'> 
                    <p className='text-gray-900 text-lg font-medium'>{item.title}</p>
                    <p className='text-gray-600 text-sm'>{item.description}</p>   
                </div>    
            </div>
        ))}
      </div>
    </div>
  )
}

export default Features
