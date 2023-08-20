import React from 'react';
import logo from '../assets/img/logo-white.svg'

export default function Footer() {
  return (
    <footer className='bg-primary py-12'>
    <div className='container mx-auto text-white flex justify-between'>
   <a href='/' >
   <img src={logo} alt=''/>
   </a>
    Copyright &copy; 2023. All right reserved
    </div>
    </footer>
  )
}

