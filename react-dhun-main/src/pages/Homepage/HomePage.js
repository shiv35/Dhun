import React from 'react'
import Navbar from '../../HomeAndLogin/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../HomeAndLogin/Footer'

const HomePage = () => {
  return (
    <div className='w-full'>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default HomePage
