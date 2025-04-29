import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  
  const {token, setToken, userData} = useContext(AppContext)

  const[showMenu, setShowMenu] = useState(false)
  
  const logout=()=>{
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <div onClick={()=>navigate('/')} className='text-4xl font-bold cursor-pointer'>Smart Appointment</div>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='lg:text-xl py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-[var(--primary)] w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/services'>
            <li className='lg:text-xl py-1'>Services</li>
            <hr className='border-none outline-none h-0.5 bg-[var(--primary)] w-3/5 m-auto hidden'/>
        </NavLink>
        {/*<NavLink to='/about'>
            <li className='lg:text-xl py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-[var(--primary)] w-3/5 m-auto hidden'/>
        </NavLink>*/}
        <NavLink to='/contact'>
            <li className='lg:text-xl py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-[var(--primary)] w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token && userData
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full'src={userData.image} alt=""/>
            <img className='w-2.5'src={assets.dropdown_icon} alt=""/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')}className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('/my-appointments')}className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>   
          </div>
          :<button onClick={()=>navigate('/login')} className='bg-[var(--primary)] text-white px-8 py-3 rounded-full font-light cursor-pointer hidden md:block'>Login</button>
        }  
        <img onClick={()=> setShowMenu} className='w-6 md:hidden ' src={assets.menu_icon} alt=""/> 
      </div>
    </div>
  )
}

export default Navbar
