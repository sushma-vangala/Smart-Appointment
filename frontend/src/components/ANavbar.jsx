import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { ProviderContext } from '../context/ProviderContext'

const ANavbar = () => {

    const {aToken,setAToken} = useContext(AdminContext)

    const {pToken, setPToken} = useContext(ProviderContext)

    const navigate=useNavigate()

    const logout=()=>{
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        pToken && setPToken('')
        pToken && localStorage.removeItem('pToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex gap-2 items-center'>
        <p className='text-4xl sm:text-2xl cursor-pointer'>Smart Appointment</p>
        <p className='mt-1 border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 text-xs'>{aToken ? 'Admin' : 'Provider'}</p>
      </div>
      <button onClick={logout} className='bg-[var(--primary)] text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default ANavbar

