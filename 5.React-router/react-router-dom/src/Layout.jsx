import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>  
        <Header />
        <Outlet />   {/* This is provided by react-router-dom to dynamically change content */}
        <Footer />
    </>
  )
}

export default Layout
