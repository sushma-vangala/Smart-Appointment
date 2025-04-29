import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Automotive = () => {
    const {providers} = useContext(AppContext)
    const {service, speciality} = useParams()
    const navigate = useNavigate()
    const [filterProv, setFilterProv] = useState([])
    const applyFilter = () => {
        if(speciality){
            setFilterProv(providers.filter(prov=>prov.speciality===speciality))
        }else{
            setFilterProv(providers.filter(prov=>prov.service===service))
        }
    }
    useEffect(() => {
        applyFilter()
    },[providers,service, speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through the list of doctors.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> speciality==='Carwash' ? navigate('/services/Automotive') : navigate('/services/Automotive/Carwash')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Carwash" ? "bg-indigo-100 text-black" : ""}`}>Carwash</p>
            <p onClick={()=> speciality==='Auto Repair' ? navigate('/services/Automotive') : navigate('/services/Automotive/Auto Repair')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Auto Repair" ? "bg-indigo-100 text-black" : ""}`}>Auto Repair</p>
            <p onClick={()=> speciality==='Oil Change' ? navigate('/services/Automotive') : navigate('/services/Automotive/Oil Change')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Oil Change" ? "bg-indigo-100 text-black" : ""}`}>Oil Change</p>
            <p onClick={()=> speciality==='Tire Services' ? navigate('/services/Automotive') : navigate('/services/Automotive/Tire Services')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Tire Services" ? "bg-indigo-100 text-black" : ""}`}>Tire Services</p>
            <p onClick={()=> speciality==='Auto Electrical Service' ? navigate('/services/Automotive') : navigate('/services/Automotive/Auto Electrical Service')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Auto Electrical Service" ? "bg-indigo-100 text-black" : ""}`}>Auto Electrical Service</p>
            <p onClick={()=> speciality==='Vehcile Inspection' ? navigate('/services/Automotive') : navigate('/services/Automotive/Vehcile Inspection')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Vehcile Inspection" ? "bg-indigo-100 text-black" : ""}`}>Vehcile Inspection</p>
        </div>
        <div className='w-full grid grid-cols-5 gap-4 gap-y-6'>
        {
            filterProv.map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)}className='w-[200px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />   
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'> 
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                            <p>Available</p>
                        </div> 
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>   
                    </div>    
                </div>
         ))
        }
        </div>
      </div>  
    </div>
  )
}

export default Automotive
