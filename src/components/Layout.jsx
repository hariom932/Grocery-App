import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import FooterLast from './FooterLast'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Menu/>
        <Outlet/>
        <Footer1/>
        <Footer2/>
        <FooterLast/>
    </>
  )
}

export default Layout