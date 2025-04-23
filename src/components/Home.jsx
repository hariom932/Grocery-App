import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Grocery from './Grocery'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import FooterLast from './FooterLast'

const Home = () => {
  return (
   <>
        <Navbar/>
        <Menu/>
        <Slider1/>
        <Slider2/>
        <Grocery/>
        <Footer1/>
        <Footer2/>
        <FooterLast/>
   </>
  )
}

export default Home