import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css'
import { BsCalendar } from 'react-icons/bs';

export default function CheckIn() {
  const [startDate, setStartDate] = useState(false)
  return (
    <div className=' flex items-center justify-between h-full between '>
    <DatePicker className='w-full h-full' selected={startDate} placeholderText='Check in' onChange={(date) => setStartDate(date)} />
      <div className=' z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
    </div>
  )
}

