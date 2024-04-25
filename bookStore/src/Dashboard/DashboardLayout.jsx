import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from './SideBar'
import MyFooter from '../components/MyFooter'

const DashboardLayout = () => {
  return (
    <>
      <div className='flex gap-4 flex-col md:flex-row bg-teal-100 '>
        <Navbar />
        <SideBar />
        <Outlet />
      </div>
      <br/><br/>
      <MyFooter />
    </>
  )
}
export default DashboardLayout