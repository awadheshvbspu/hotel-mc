import React, {  useContext } from 'react';
import AdultsDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';
import { useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop'
import { RoomContext } from '../context/RoomContext';

export default function RoomDetails() {
  const {id} = useParams();
  const {rooms} = useContext(RoomContext)

  const room =rooms.find((room)=>{
    return room.id === Number(id);
  })

  const {name,description,facilities,imageLg,price} =room;
  return (
    <section>
    <ScrollToTop/>
    <div className='bg-room bg-cover bg-center relative flex justify-center items-center h-[560px]'>
    <div className='absolute w-full h-full bg-black/70'>
    
    </div>
    <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
    </div>
    <div className='container mx-auto '>
    <div className='flex flex-col lg:flex-row h-full py-24'>
    <div className='w-full h-full lg:w-[60%] px-6'>
    <h2 className='h2'>{name}</h2>
    <p className='mb-8'>{description}</p>
    <img src={imageLg} alt='' className='mb-8'/>
    <div className='mt-12'>
    <h3 className='h3 mb-3'>Room facilities</h3>
    <p className='mb-12'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className='grid grid-cols-3 gap-6 mb-12'>
    {facilities.map((item,i)=>{
      const {name,icon} = item;
      return(
        <div key={i} className='flex items-center gap-x-3 flex-1'>
        <div className='text-3xl text-accent'>{icon}</div>
        <div className=' text-base'>{name}</div>
        </div>
      )
    })}
    </div>
    </div>
    </div> 
    
    <div className='w-full h-full lg:w-[40%]  lg:mt-28 mt-0'>
   <div className='py-8 px-6 bg-accent/20 mb-12'>
   <div className='flex-col space-y-4 mb-4'>
   <h3>Your Reservation</h3>
   <div className='h-[60px] bg-white'>
   <CheckIn/>
   </div>
   <div className='h-[60px] bg-white'>
   <CheckOut/>
   </div>
   <div className='h-[60px] bg-white'>
   <AdultsDropdown/>
   </div>
   <div className='h-[60px] bg-white'>
   <KidsDropdown/>
   </div>
   </div>
   <button className='btn btn-lg btn-primary w-full'>Book now for ${price}</button>
   </div>
   <div>
   <h3 className='h3'>Hotel Rules</h3>
   <p className='mb-6'>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   <ul className='flex flex-col gap-y-4'>
   <li className='flex items-center gap-x-4'>
   <FaCheck className='text-accent'/> Check-in : 3:00 PM - 9:00 PM
   </li>
   <li className='flex items-center gap-x-4'>
   <FaCheck className='text-accent'/> Check-out : 10:30 AM 
   </li>
   <li className='flex items-center gap-x-4'>
   <FaCheck className='text-accent'/> No Pets
   </li>
   <li className='flex items-center gap-x-4'>
   <FaCheck className='text-accent'/> No Smoking
   </li>
   </ul>
   </div>
    </div>
   
    </div>
    </div>
    </section>
  )
}

