import React from 'react'
import { servicesdata } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const Navigate = useNavigate()
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Services</h1>
      <p className='sm:w-1/3 text-center text-sm'>Browse through the list of services.</p>
      <div className='w-full grid grid-cols-3 justify-items-center items-center gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {servicesdata.slice(0,6).map((item, index) => (
          <div onClick={()=>Navigate(`/services/${item.service}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-78 h-64' key={index}>
            <img className='bg-blue-50' src={item.image} alt="" />   
            <div className='w-2/3 px-4'> 
              <p className='text-gray-900 text-lg font-medium whitespace-nowrap'>{item.service}</p>  
            </div>    
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
