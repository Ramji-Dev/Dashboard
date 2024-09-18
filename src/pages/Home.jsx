import React from 'react'
import { Navbar } from '../components'
import { Outlet } from "react-router-dom"
import NavStateProvider from '../context/NavStateProvider'

function Home() {
  return (
    <div className="relative w-full h-screen bg-[#e6e5e4]">
       <NavStateProvider>
        <Navbar />
        <Outlet />
       </NavStateProvider>
    </div>
  )
}

export default Home