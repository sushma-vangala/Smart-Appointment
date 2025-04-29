import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const LegalAndFinancial = () => {

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
    },[providers, service, speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through the list of doctors.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> speciality==='General physician' ? navigate('/services/healthcare') : navigate('/services/healthcare/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
            <p onClick={()=> speciality==='Gynecologist' ? navigate('/services/healthcare') : navigate('/services/healthcare/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
            <p onClick={()=> speciality==='Dermatologist' ? navigate('/services/healthcare') : navigate('/services/healthcare/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
            <p onClick={()=> speciality==='Pediatricians' ? navigate('/services/healthcare') : navigate('/services/healthcare/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
            <p onClick={()=> speciality==='Neurologist' ? navigate('/services/healthcare') : navigate('/services/healthcare/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
            <p onClick={()=> speciality==='Gastroenterologist' ? navigate('/services/healthcare') : navigate('/services/healthcare/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality=== "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
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

export default LegalAndFinancial
