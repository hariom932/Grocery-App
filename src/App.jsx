import './App.css'
import React, { createContext, useState } from 'react'
import Routing from './components/Routing'

export const MyCart = createContext()
function App() {
  const [cartItems,setCartItems]=useState([])
   return (
    <>
    <MyCart.Provider value={{cartItems,setCartItems}}>
      <Routing/>
    </MyCart.Provider>
    </>
  )
}

export default App
