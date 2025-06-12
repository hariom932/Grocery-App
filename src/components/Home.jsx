import React from 'react'
import Navbar from '../header/Navbar'
import Menu from './Menu'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Grocery from './Grocery'
import Footer1 from '../footer/Footer1'
import Footer2 from '../footer/Footer2'
import FooterLast from '../footer/FooterLast'

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