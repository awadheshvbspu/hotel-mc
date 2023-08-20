import React from 'react';
import {Swiper, SwiperSlide} from  'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import EffectFade from '../../node_modules/swiper/modules/effect-fade.mjs';
import Autoplay from '../../node_modules/swiper/modules/autoplay.mjs';
import img1 from '../assets/img/heroSlider/1.jpg'
import img2 from '../assets/img/heroSlider/2.jpg'
import img3 from '../assets/img/heroSlider/3.jpg'

const slides =[
  {
    title : 'Your Luxury Hotel for Vacation',
    bg: img1,
    btnText: 'Room & Suites'
  },
  {
    title : 'Your Luxury Hotel for Vacation',
    bg: img2,
    btnText: 'Room & Suites'
  },
  {
    title : 'Your Luxury Hotel for Vacation',
    bg: img3,
    btnText: 'Room & Suites'
  },
]

export default function HeroSlider() {

  return (
    <Swiper modules={[EffectFade,Autoplay]} effect={'fade'} 
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    className='heroSlider h-[600px] lg:h-[860px]'>

    {slides.map((item,i)=>{
      const {title,bg,btnText} =item
      return(
        <SwiperSlide className='h-full relative flex justify-center items-center' key={i} >
          <div className='z-20 absolute top-[40%] lg:left-[25%] lg:px-0 px-8 text-white text-center'>
          <div className='uppercase text-tertiary tracking-[6px] mb-5'>Just Enjoy and relax</div>
          <h1 className='text-[32px] font-primary uppercase tracking-2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
          <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
          </div>
          <div className='absolute top-0 w-full h-full'>
          <img src={bg} alt='' className='object-cover h-full w-full'/>
          </div>
          <div className='absolute w-full top-0 h-full bg-black/70'></div>
        </SwiperSlide>
      )
    })}
    </Swiper>
  )
}

