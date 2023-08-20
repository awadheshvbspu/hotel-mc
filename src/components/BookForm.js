import React, { useContext } from 'react';
import CheckIn from './CheckIn';
import AdultsDropdown from './AdultsDropdown';
import KidsDropdown from './KidsDropdown';
import CheckOut from './CheckOut'
import { RoomContext } from '../context/RoomContext';

export default function BookForm() {
  const {handleClick} =useContext(RoomContext)
  return (
    <>
    <form className='h-[300px]  mx-auto lg:h-[70px] bg-white shadow px-20'>
    <div className='flex flex-col w-full h-full lg:flex-row '>
    <div className='flex-1 border-r'>
    <CheckIn/>
    </div>
    <div className='flex-1 border-r'>
    <CheckOut/>
    </div>
    <div className='flex-1 border-r'>
    <AdultsDropdown/>
    </div>
    <div className='flex-1 border-r'>
    <KidsDropdown/>
    </div>
    <button className='btn btn-primary' onClick={(e)=>handleClick(e)}>Check now</button>
    </div>
    
    </form>
  
    </>
  )
}

