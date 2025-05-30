import React from 'react'
import Navbar from '../../components/Navbar'
import Menu from '../../components/Menu'
import Footer1 from '../../components/Footer1'
import Footer2 from '../../components/Footer2'
import FooterLast from '../../components/FooterLast'

const Shop = () => {
  return (
   <>
    <Navbar/>
    <Menu/>
        <div>
            <div className='w-full flex items-center justify-center border border-gray-200'>
                <div className='w-[73%] py-5'>
                    <p className='font-medium text-gray-600'><ion-icon name="home"></ion-icon>Home 
                     <span className='text-gray-500 text-xs pl-1'> 
                         / Shop / Fruits and Vegetables
                        </span>
                        </p>
                </div>
            </div>

        </div>
    <Footer1/>
    <Footer2/>
    <FooterLast/>   
   </>
  )
}

export default Shop