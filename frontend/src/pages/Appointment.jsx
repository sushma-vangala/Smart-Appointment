import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RelatedProviders from '../components/RelatedProviders'
import { AppContext } from '../context/AppContext'
import {assets} from '../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const {providers, backendUrl, token, getProvidersData} = useContext(AppContext)
  const {id} = useParams()

  const daysOfWeek =['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT']

  const navigate = useNavigate()

  const [provInfo, setProvInfo] = useState(null)
  const [provSlots,setProvSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime]= useState('') 

  const fetchProvInfo = async () => {
    const provInfo = providers.find(prov=>prov._id===id)
    setProvInfo(provInfo)
    console.log(provInfo)
  }

  const getAvailableSlots=async()=>{
    setProvSlots([])

    let today=new Date()
    for(let i=0;i<7;i++){
      let currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime=new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if(today.getDate()=== currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 : 0)
      } else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots=[]

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

        let day= currentDate.getDate()
        let month = currentDate.getMonth()+1
        let year = currentDate.getFullYear()

        let slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = provInfo.slots_booked[slotDate] && provInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        if(isSlotAvailable){
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })
        }


        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setProvSlots(prev=>([...prev, timeSlots]))
    }
  }

  const bookAppointment = async()=>{
    if(!token){
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try {
      
      const date = provSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()

      const slotDate = day + "_" +month + "_" +year

      const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {id, slotDate, slotTime}, {headers:{token}})

      if(data.success){
        toast.success(data.message)
        getProvidersData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchProvInfo()
  },[providers,id])

  useEffect(()=>{
    getAvailableSlots()
  },[provInfo])

  useEffect(()=>{
    console.log(provSlots)
  },[provSlots])
  
  return provInfo && (
    <div>
      {/*provider details*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-[var(--primary)] w-full sm:max-w-72 rounded-lg' src={provInfo.image} alt=""/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {provInfo.name}
            <img className='w-5' src={assets.verified_icon}/>
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>
              {provInfo.degree} - {provInfo.speciality}
            </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{provInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About
              <img src={assets.info_icon} alt=""/>
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{provInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>${provInfo.fees}</span>
          </p>
        </div>
      </div>
      {/*Booking Slots*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            provSlots.length && provSlots.map((item, index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-[var(--primary)] text-white' :'border border-gray-200' }`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>  
            ))
          }
        </div>
        
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {provSlots.length && provSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[var(--primary)] text-white' : 'text-gray-400 border border-gray-300' }`} key={index}> 
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button onClick={bookAppointment} className='bg-[var(--primary)] text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>
      <RelatedProviders Id={id} speciality={provInfo.speciality} service={provInfo.service}/>
    </div>
  )
}

export default Appointment
