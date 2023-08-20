import React from 'react';
import Rooms from '../components/Rooms';
import BookForm from '../components/BookForm'
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <>
    <HeroSlider/>
    <div className='conatiner mx-auto relative'>
    <div className='mt-4 p-4 lg:shadow-xl lg:absolute  lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
    <BookForm/>
    </div>
    </div>
     <Rooms/>
    </>
  )
}

